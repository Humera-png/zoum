import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

type Lead = {
  id: string;
  name: string;
  company: string | null;
  email: string;
  engagementType: string | null;
  message: string;
  createdAt: string;
};

export const Route = createFileRoute("/admin")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await fetch("/leads-api");
      if (!res.ok) throw new Error("Failed to fetch leads");
      const data = await res.json();
      setLeads(data);
    } catch (err) {
      setError("Failed to load leads. Please make sure the database is configured.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-white text-xl">Loading leads...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 max-w-md text-center">
          <h2 className="text-red-400 text-xl font-semibold mb-2">Database Error</h2>
          <p className="text-slate-300">{error}</p>
          <button
            onClick={fetchLeads}
            className="mt-4 px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-slate-400">Manage your contact leads</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-slate-700 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">Contact Leads</h2>
              <p className="text-slate-400 text-sm mt-1">{leads.length} total leads</p>
            </div>
            <button
              onClick={fetchLeads}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition font-medium"
            >
              Refresh
            </button>
          </div>

          {leads.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-slate-400 text-lg">
                No leads yet. They will appear here when people contact you.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-slate-700">
              {leads.map((lead) => (
                <div key={lead.id} className="p-6 hover:bg-slate-700/30 transition">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-white font-semibold text-lg">{lead.name}</h3>
                      <p className="text-slate-400 text-sm">{lead.email}</p>
                      {lead.company && (
                        <p className="text-slate-500 text-sm mt-1">Company: {lead.company}</p>
                      )}
                      {lead.engagementType && (
                        <span className="inline-block mt-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">
                          {lead.engagementType}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm leading-relaxed">{lead.message}</p>
                      <p className="text-slate-500 text-xs mt-3">
                        Received: {new Date(lead.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
