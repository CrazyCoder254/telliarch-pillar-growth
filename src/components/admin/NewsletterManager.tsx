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
    <div className="space-y-4">
      <Tabs defaultValue="compose" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-4">
          <TabsTrigger value="compose" className="flex items-center gap-1.5 text-xs">
            <Send className="h-3.5 w-3.5" />
            Compose
          </TabsTrigger>
          <TabsTrigger value="subscribers" className="flex items-center gap-1.5 text-xs">
            <Users className="h-3.5 w-3.5" />
            Subscribers ({subscribers.filter(s => s.is_active).length})
          </TabsTrigger>
          <TabsTrigger value="services" className="flex items-center gap-1.5 text-xs">
            <Mail className="h-3.5 w-3.5" />
            Service ({serviceSubscriptions.filter(s => s.is_active).length})
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-1.5 text-xs">
            <History className="h-3.5 w-3.5" />
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="compose">
          <Card className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Send className="h-4 w-4 text-primary" />
                Compose Newsletter
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-3">
              <form onSubmit={handleSendNewsletter} className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="audience" className="text-xs">Target Audience</Label>
                  <Select
                    value={newsletterForm.serviceFilter}
                    onValueChange={(value) => setNewsletterForm({ ...newsletterForm, serviceFilter: value })}
                  >
                    <SelectTrigger className="text-sm h-9">
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
                <div className="space-y-1">
                  <Label htmlFor="subject" className="text-xs">Subject</Label>
                  <Input
                    id="subject"
                    value={newsletterForm.subject}
                    onChange={(e) => setNewsletterForm({ ...newsletterForm, subject: e.target.value })}
                    placeholder="Newsletter subject..."
                    className="text-sm h-9"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="content" className="text-xs">Content</Label>
                  <Textarea
                    id="content"
                    value={newsletterForm.content}
                    onChange={(e) => setNewsletterForm({ ...newsletterForm, content: e.target.value })}
                    placeholder="Write your newsletter content here..."
                    rows={5}
                    className="text-sm"
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-9 text-sm" disabled={isSending}>
                  {isSending ? (
                    <>
                      <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-1.5 h-3.5 w-3.5" />
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
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-primary" />
                Newsletter Subscribers
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-3">
              <div className="space-y-2 max-h-80 overflow-y-auto">
                {subscribers.length === 0 ? (
                  <p className="text-muted-foreground text-center py-3 text-sm">No subscribers yet</p>
                ) : (
                  subscribers.map((subscriber) => (
                    <div key={subscriber.id} className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
                      <div>
                        <p className="text-sm font-medium">{subscriber.email}</p>
                        <p className="text-xs text-muted-foreground">
                          Joined {new Date(subscriber.subscribed_at).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge variant={subscriber.is_active ? "default" : "secondary"} className="text-xs">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICES.map((service) => {
              const serviceSubs = serviceSubscriptions.filter(s => s.service_name === service);
              return (
                <Card key={service} className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
                  <CardHeader className="pb-1 pt-3 px-3">
                    <CardTitle className="text-xs flex items-center justify-between">
                      <span className="truncate">{service}</span>
                      <Badge className="text-xs ml-1">{serviceSubs.filter(s => s.is_active).length}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-3 pb-3">
                    <div className="space-y-1 max-h-28 overflow-y-auto">
                      {serviceSubs.length === 0 ? (
                        <p className="text-xs text-muted-foreground">No subscribers</p>
                      ) : (
                        serviceSubs.map((sub) => (
                          <div key={sub.id} className="flex items-center justify-between text-xs p-1.5 bg-muted/30 rounded">
                            <span className="truncate">{sub.email}</span>
                            <Badge variant={sub.is_active ? "outline" : "secondary"} className="text-[10px] px-1">
                              {sub.is_active ? "Active" : "Off"}
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
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-sm">
                <History className="h-4 w-4 text-primary" />
                Sent Newsletters
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-3">
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {sentNewsletters.length === 0 ? (
                  <p className="text-muted-foreground text-center py-3 text-sm">No newsletters sent yet</p>
                ) : (
                  sentNewsletters.map((newsletter) => (
                    <div key={newsletter.id} className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="text-sm font-semibold">{newsletter.subject}</h4>
                        <Badge variant="outline" className="text-xs">{newsletter.recipient_count} sent</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1.5 line-clamp-2">{newsletter.content}</p>
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <span>{new Date(newsletter.sent_at).toLocaleString()}</span>
                        {newsletter.service_filter && (
                          <Badge variant="secondary" className="text-[10px]">{newsletter.service_filter}</Badge>
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
