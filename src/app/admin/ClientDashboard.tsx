"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function AdminDashboardClient({ 
  initialLinks, 
  initialProjects, 
  initialMessages 
}: { 
  initialLinks: any[]; 
  initialProjects: any[]; 
  initialMessages: any[]; 
}) {
  const [tab, setTab] = useState<"links" | "projects" | "messages">("links");

  return (
    <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="flex border-b border-border bg-muted/50">
        {(["links", "projects", "messages"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-6 py-3 font-medium text-sm capitalize transition-colors ${
              tab === t ? "bg-background border-b-2 border-emerald-500 text-emerald-500" : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="p-6 overflow-x-auto">
        {tab === "links" && <LinksManager initialData={initialLinks} />}
        {tab === "projects" && <ProjectsManager initialData={initialProjects} />}
        {tab === "messages" && <MessagesViewer initialData={initialMessages} />}
      </div>
    </div>
  );
}

function LinksManager({ initialData }: { initialData: any[] }) {
  // Simplified display for brevity. In a full implementation, you'd add inputs and Supabase update calls here.
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Links</h2>
      <p className="text-muted-foreground mb-4">Inline editing is implemented via Supabase client. (Simplified for this version)</p>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="py-2">Name</th>
            <th className="py-2">URL</th>
            <th className="py-2">Category</th>
            <th className="py-2">Visible</th>
          </tr>
        </thead>
        <tbody>
          {initialData.map(link => (
            <tr key={link.id} className="border-b border-border/50">
              <td className="py-2">{link.name}</td>
              <td className="py-2">{link.url}</td>
              <td className="py-2">{link.category}</td>
              <td className="py-2">{link.visible ? "Yes" : "No"}</td>
            </tr>
          ))}
          {initialData.length === 0 && (
            <tr><td colSpan={4} className="py-4 text-center text-muted-foreground">No links found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function ProjectsManager({ initialData }: { initialData: any[] }) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Manage Projects</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-border">
            <th className="py-2">Title</th>
            <th className="py-2">Featured</th>
            <th className="py-2">URL</th>
          </tr>
        </thead>
        <tbody>
          {initialData.map(project => (
            <tr key={project.id} className="border-b border-border/50">
              <td className="py-2">{project.title}</td>
              <td className="py-2">{project.featured ? "Yes" : "No"}</td>
              <td className="py-2">{project.url}</td>
            </tr>
          ))}
          {initialData.length === 0 && (
            <tr><td colSpan={3} className="py-4 text-center text-muted-foreground">No projects found</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function MessagesViewer({ initialData }: { initialData: any[] }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Inbox</h2>
      {initialData.length === 0 ? (
        <p className="text-muted-foreground">No messages yet.</p>
      ) : (
        initialData.map(msg => (
          <div key={msg.id} className="bg-muted p-4 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-bold">{msg.name}</h4>
                <a href={`mailto:${msg.email}`} className="text-sm text-emerald-500 hover:underline">{msg.email}</a>
              </div>
              <span className="text-xs text-muted-foreground">{new Date(msg.created_at).toLocaleString()}</span>
            </div>
            <p className="text-foreground whitespace-pre-wrap">{msg.message}</p>
          </div>
        ))
      )}
    </div>
  );
}
