import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Loader2 } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  logo_url: string;
  website_url: string | null;
  display_order: number;
  is_active: boolean;
}

const PartnersManager = () => {
  const { toast } = useToast();
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    logo_url: "",
    website_url: "",
    display_order: 0,
    is_active: true,
  });

  const fetchPartners = async () => {
    const { data, error } = await supabase
      .from("partners")
      .select("*")
      .order("display_order", { ascending: true });
    if (error) {
      toast({ title: "Error loading partners", description: error.message, variant: "destructive" });
    } else {
      setPartners(data || []);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.logo_url.trim()) {
      toast({ title: "Name and logo URL are required", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    const { error } = await supabase.from("partners").insert([{
      name: form.name.trim(),
      logo_url: form.logo_url.trim(),
      website_url: form.website_url.trim() || null,
      display_order: form.display_order,
      is_active: form.is_active,
      created_by: user?.id,
    }]);
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Partner added" });
      setForm({ name: "", logo_url: "", website_url: "", display_order: 0, is_active: true });
      fetchPartners();
    }
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from("partners").delete().eq("id", id);
    if (error) {
      toast({ title: "Error deleting", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Partner removed" });
      fetchPartners();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
        <CardHeader>
          <CardTitle className="text-base">Add Partner</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div>
              <Label htmlFor="p-name" className="text-xs">Name</Label>
              <Input id="p-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            </div>
            <div>
              <Label htmlFor="p-logo" className="text-xs">Logo URL</Label>
              <Input id="p-logo" value={form.logo_url} onChange={(e) => setForm({ ...form, logo_url: e.target.value })} placeholder="https://..." required />
            </div>
            <div>
              <Label htmlFor="p-site" className="text-xs">Website URL (optional)</Label>
              <Input id="p-site" value={form.website_url} onChange={(e) => setForm({ ...form, website_url: e.target.value })} placeholder="https://..." />
            </div>
            <div>
              <Label htmlFor="p-order" className="text-xs">Display Order</Label>
              <Input id="p-order" type="number" value={form.display_order} onChange={(e) => setForm({ ...form, display_order: parseInt(e.target.value) || 0 })} />
            </div>
            <div className="flex items-center gap-2">
              <Switch id="p-active" checked={form.is_active} onCheckedChange={(v) => setForm({ ...form, is_active: v })} />
              <Label htmlFor="p-active" className="text-xs">Active</Label>
            </div>
            <Button type="submit" disabled={loading} className="w-full" size="sm">
              {loading && <Loader2 className="mr-1 h-3 w-3 animate-spin" />}
              Add Partner
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h3 className="text-base font-bold">Partners ({partners.length})</h3>
        {partners.map((p) => (
          <Card key={p.id} className="bg-card/80 backdrop-blur-sm border-none shadow-elegant">
            <CardContent className="p-4 flex items-center gap-3">
              <img src={p.logo_url} alt={p.name} className="h-12 w-12 object-contain bg-white rounded" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">{p.name}</p>
                <p className="text-xs text-muted-foreground">Order: {p.display_order} · {p.is_active ? "Active" : "Hidden"}</p>
              </div>
              <Button size="icon" variant="ghost" className="h-7 w-7 text-destructive" onClick={() => handleDelete(p.id)}>
                <Trash2 className="h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        ))}
        {partners.length === 0 && (
          <p className="text-xs text-muted-foreground">No partners yet.</p>
        )}
      </div>
    </div>
  );
};

export default PartnersManager;
