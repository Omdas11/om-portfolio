import { createClient } from "@/lib/supabase/server";
import { AdminDashboardClient } from "./ClientDashboard";

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const supabase = await createClient();

  // Fetch initial data server-side
  const [{ data: links }, { data: projects }, { data: messages }] = await Promise.all([
    supabase.from('links').select('*').order('sort_order', { ascending: true }),
    supabase.from('projects').select('*').order('sort_order', { ascending: true }),
    supabase.from('messages').select('*').order('created_at', { ascending: false }),
  ]);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      <AdminDashboardClient 
        initialLinks={links || []} 
        initialProjects={projects || []} 
        initialMessages={messages || []} 
      />
    </div>
  );
}
