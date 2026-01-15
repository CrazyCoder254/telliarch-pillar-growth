import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, Users, Send, History } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Subscriber {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
}

interface ServiceSubscription {
  id: string;
  email: string;
  service_name: string;
  subscribed_at: string;
  is_active: boolean;
}

interface SentNewsletter {
  id: string;
  subject: string;
  content: string;
  service_filter: string | null;
  sent_at: string;
  recipient_count: number;
}

const SERVICES = [
  "Human Resource Management",
  "Financial Management & Accounting",
  "Strategic Management",
  "Brand Management & Marketing",
  "Mental Health & Wellness Solutions",
  "Mentorship & Coaching"
];

const NewsletterManager = () => {
  const { toast } = useToast();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [serviceSubscriptions, setServiceSubscriptions] = useState<ServiceSubscription[]>([]);
  const [sentNewsletters, setSentNewsletters] = useState<SentNewsletter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const [newsletterForm, setNewsletterForm] = useState({
    subject: "",
    content: "",
    serviceFilter: "all"
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [subscribersRes, serviceSubsRes, sentRes] = await Promise.all([
        supabase.from("newsletter_subscribers").select("*").order("subscribed_at", { ascending: false }),
        supabase.from("service_subscriptions").select("*").order("subscribed_at", { ascending: false }),
        supabase.from("sent_newsletters").select("*").order("sent_at", { ascending: false }).limit(20)
      ]);

      setSubscribers(subscribersRes.data || []);
      setServiceSubscriptions(serviceSubsRes.data || []);
      setSentNewsletters(sentRes.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      
      const { data, error } = await supabase.functions.invoke("send-newsletter", {
        body: {
          subject: newsletterForm.subject,
          content: newsletterForm.content,
          serviceFilter: newsletterForm.serviceFilter === "all" ? null : newsletterForm.serviceFilter
        },
        headers: {
          Authorization: `Bearer ${session?.access_token}`
        }
      });

      if (error) throw error;

      toast({
        title: "Newsletter Sent!",
        description: data.message,
      });
      
      setNewsletterForm({ subject: "", content: "", serviceFilter: "all" });
      fetchData();
    } catch (error) {
      console.error("Error sending newsletter:", error);
      toast({
        title: "Error",
        description: "Failed to send newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  const getServiceSubscriberCount = (serviceName: string) => {
    return serviceSubscriptions.filter(s => s.service_name === serviceName && s.is_active).length;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="compose" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="compose" className="flex items-center gap-2">
            <Send className="h-4 w-4" />
            Compose
          </TabsTrigger>
          <TabsTrigger value="subscribers" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Subscribers ({subscribers.filter(s => s.is_active).length})
          </TabsTrigger>
          <TabsTrigger value="services" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Service Subs ({serviceSubscriptions.filter(s => s.is_active).length})
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="compose">
          <Card className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Compose Newsletter
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSendNewsletter} className="space-y-4">
                <div>
                  <Label htmlFor="audience">Target Audience</Label>
                  <Select
                    value={newsletterForm.serviceFilter}
                    onValueChange={(value) => setNewsletterForm({ ...newsletterForm, serviceFilter: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Newsletter Subscribers ({subscribers.filter(s => s.is_active).length})</SelectItem>
                      {SERVICES.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service} ({getServiceSubscriberCount(service)})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={newsletterForm.subject}
                    onChange={(e) => setNewsletterForm({ ...newsletterForm, subject: e.target.value })}
                    placeholder="Newsletter subject..."
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    value={newsletterForm.content}
                    onChange={(e) => setNewsletterForm({ ...newsletterForm, content: e.target.value })}
                    placeholder="Write your newsletter content here..."
                    rows={8}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSending}>
                  {isSending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Newsletter
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscribers">
          <Card className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Newsletter Subscribers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {subscribers.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">No subscribers yet</p>
                ) : (
                  subscribers.map((subscriber) => (
                    <div key={subscriber.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div>
                        <p className="font-medium">{subscriber.email}</p>
                        <p className="text-sm text-muted-foreground">
                          Joined {new Date(subscriber.subscribed_at).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge variant={subscriber.is_active ? "default" : "secondary"}>
                        {subscriber.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((service) => {
              const serviceSubs = serviceSubscriptions.filter(s => s.service_name === service);
              return (
                <Card key={service} className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center justify-between">
                      {service}
                      <Badge>{serviceSubs.filter(s => s.is_active).length}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {serviceSubs.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No subscribers</p>
                      ) : (
                        serviceSubs.map((sub) => (
                          <div key={sub.id} className="flex items-center justify-between text-sm p-2 bg-muted/30 rounded">
                            <span>{sub.email}</span>
                            <Badge variant={sub.is_active ? "outline" : "secondary"} className="text-xs">
                              {sub.is_active ? "Active" : "Inactive"}
                            </Badge>
                          </div>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="history">
          <Card className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <History className="h-5 w-5 text-primary" />
                Sent Newsletters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {sentNewsletters.length === 0 ? (
                  <p className="text-muted-foreground text-center py-4">No newsletters sent yet</p>
                ) : (
                  sentNewsletters.map((newsletter) => (
                    <div key={newsletter.id} className="p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold">{newsletter.subject}</h4>
                        <Badge variant="outline">{newsletter.recipient_count} recipients</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">{newsletter.content}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{new Date(newsletter.sent_at).toLocaleString()}</span>
                        {newsletter.service_filter && (
                          <Badge variant="secondary" className="text-xs">{newsletter.service_filter}</Badge>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NewsletterManager;
