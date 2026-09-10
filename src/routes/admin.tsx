import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [{ name: "robots", content: "noindex, nofollow" }],
  }),
  component: AdminDashboard,
});

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL as string | undefined;
const TOKEN_STORAGE_KEY = "zoum_admin_token";

interface Enrollment {
  id: string;
  course_title: string;
  amount_inr: number;
  name: string;
  email: string;
  phone: string | null;
  education: string | null;
  purpose: string | null;
  status: string;
  created_at: string;
}
interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string;
  reason: string;
  role_needed: string | null;
  headcount: string | null;
  message: string;
  created_at: string;
}
interface JobApplication {
  id: string;
  full_name: string;
  email: string;
  mobile: string;
  city: string;
  education: string;
  experience: string | null;
  resume_filename: string | null;
  created_at: string;
}

interface AdminData {
  enrollments: Enrollment[];
  inquiries: Inquiry[];
  jobApplications: JobApplication[];
  settings: Record<string, string>;
}

function AdminDashboard() {
  const [token, setToken] = useState(() => sessionStorage.getItem(TOKEN_STORAGE_KEY) ?? "");
  const [tokenInput, setTokenInput] = useState("");
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<"enrollments" | "inquiries" | "applications" | "settings">(
    "enrollments",
  );

  const fetchData = async (t: string) => {
    if (!CONTACT_API_URL) {
      setError("VITE_CONTACT_API_URL isn't configured.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${CONTACT_API_URL.replace(/\/$/, "")}/admin/data`, {
        headers: { Authorization: `Bearer ${t}` },
      });
      if (res.status === 401) {
        sessionStorage.removeItem(TOKEN_STORAGE_KEY);
        setToken("");
        setError("Incorrect access code.");
        return;
      }
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setData(await res.json());
    } catch (err) {
      console.error(err);
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchData(token);
  }, [token]);

  const saveSetting = async (key: string, value: string) => {
    if (!CONTACT_API_URL) return { ok: false, error: "API not configured" };
    try {
      const res = await fetch(`${CONTACT_API_URL.replace(/\/$/, "")}/admin/settings`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ key, value }),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok) return { ok: false, error: body?.error ?? `Request failed (${res.status})` };
      setData((d) => (d ? { ...d, settings: { ...d.settings, [key]: value } } : d));
      return { ok: true };
    } catch {
      return { ok: false, error: "Failed to save. Please try again." };
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sessionStorage.setItem(TOKEN_STORAGE_KEY, tokenInput);
            setToken(tokenInput);
          }}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-full max-w-sm"
        >
          <h1 className="text-white text-xl font-semibold mb-1">Admin access</h1>
          <p className="text-slate-400 text-sm mb-5">Enter the access code to view submissions.</p>
          <input
            type="password"
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="Access code"
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white mb-4"
            autoFocus
          />
          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-2.5 font-medium transition"
          >
            Continue
          </button>
          {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-32 px-6 pb-10 md:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-white">ZOUM Admin</h1>
          <div className="flex gap-2">
            <button
              onClick={() => fetchData(token)}
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg text-sm font-medium transition"
            >
              Refresh
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem(TOKEN_STORAGE_KEY);
                setToken("");
                setData(null);
              }}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition"
            >
              Log out
            </button>
          </div>
        </div>

        <div className="flex gap-2 mb-6">
          {(
            [
              ["enrollments", `Course Enrollments (${data?.enrollments.length ?? 0})`],
              ["inquiries", `Contact Inquiries (${data?.inquiries.length ?? 0})`],
              ["applications", `Job Applications (${data?.jobApplications.length ?? 0})`],
              ["settings", "Settings"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                tab === key ? "bg-emerald-500 text-white" : "bg-slate-900 text-slate-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {loading && <p className="text-slate-400">Loading...</p>}
        {error && <p className="text-red-400 mb-4">{error}</p>}

        {data && tab === "enrollments" && (
          <>
            <CourseSummary enrollments={data.enrollments} />
            <Table
              rows={data.enrollments}
              empty="No course enrollments yet."
              columns={[
                ["created_at", "Date", (v) => new Date(v).toLocaleString()],
                ["name", "Name"],
                ["email", "Email"],
                ["phone", "Phone"],
                ["education", "Education"],
                ["purpose", "Purpose"],
                ["course_title", "Course"],
                ["amount_inr", "Amount", (v) => `₹${Number(v).toLocaleString("en-IN")}`],
                ["status", "Status"],
              ]}
            />
          </>
        )}
        {data && tab === "settings" && (
          <SettingsPanel settings={data.settings} onSave={saveSetting} />
        )}
        {data && tab === "inquiries" && (
          <Table
            rows={data.inquiries}
            empty="No contact inquiries yet."
            columns={[
              ["created_at", "Date", (v) => new Date(v).toLocaleString()],
              ["name", "Name"],
              ["email", "Email"],
              ["phone", "Phone"],
              ["company", "Company"],
              ["reason", "Reason"],
              ["message", "Message"],
            ]}
          />
        )}
        {data && tab === "applications" && (
          <Table
            rows={data.jobApplications}
            empty="No job applications yet."
            columns={[
              ["created_at", "Date", (v) => new Date(v).toLocaleString()],
              ["full_name", "Name"],
              ["email", "Email"],
              ["mobile", "Mobile"],
              ["city", "City"],
              ["education", "Education"],
              ["experience", "Experience"],
              ["resume_filename", "Resume"],
            ]}
          />
        )}
      </div>
    </div>
  );
}

// Per-course rollup so scheduling 400 people across many courses is legible:
// how many paid, how many total, per course.
function CourseSummary({ enrollments }: { enrollments: Enrollment[] }) {
  if (enrollments.length === 0) return null;
  const byCourse = new Map<string, { total: number; paid: number }>();
  for (const e of enrollments) {
    const cur = byCourse.get(e.course_title) ?? { total: 0, paid: 0 };
    cur.total += 1;
    if (e.status === "paid") cur.paid += 1;
    byCourse.set(e.course_title, cur);
  }
  const rows = [...byCourse.entries()].sort((a, b) => b[1].paid - a[1].paid);

  return (
    <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {rows.map(([course, c]) => (
        <div key={course} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <div className="text-sm text-slate-200 truncate" title={course}>
            {course}
          </div>
          <div className="mt-1 text-2xl font-semibold text-white">
            {c.paid}
            <span className="text-sm text-slate-500 font-normal"> paid</span>
          </div>
          <div className="text-xs text-slate-500">{c.total} total (incl. unpaid)</div>
        </div>
      ))}
    </div>
  );
}

function SettingsPanel({
  settings,
  onSave,
}: {
  settings: Record<string, string>;
  onSave: (key: string, value: string) => Promise<{ ok: boolean; error?: string }>;
}) {
  const [waUrl, setWaUrl] = useState(settings["whatsapp_community_url"] ?? "");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);

  const save = async () => {
    setSaving(true);
    setMsg(null);
    const res = await onSave("whatsapp_community_url", waUrl.trim());
    setSaving(false);
    setMsg(res.ok ? { ok: true, text: "Saved." } : { ok: false, text: res.error ?? "Failed." });
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-xl">
      <h2 className="text-white font-semibold mb-1">WhatsApp community link</h2>
      <p className="text-slate-400 text-sm mb-4">
        Shown to students in a popup and in their confirmation email right after they pay. Leave
        blank to hide it until you have a link.
      </p>
      <input
        type="url"
        value={waUrl}
        onChange={(e) => setWaUrl(e.target.value)}
        placeholder="https://chat.whatsapp.com/..."
        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5 text-white mb-3"
      />
      <button
        onClick={save}
        disabled={saving}
        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 text-white rounded-lg text-sm font-medium transition"
      >
        {saving ? "Saving..." : "Save"}
      </button>
      {msg && (
        <span className={`ml-3 text-sm ${msg.ok ? "text-emerald-400" : "text-red-400"}`}>
          {msg.text}
        </span>
      )}
    </div>
  );
}

function Table<T extends object>({
  rows,
  columns,
  empty,
}: {
  rows: T[];
  columns: [keyof T, string, ((v: any) => string)?][];
  empty: string;
}) {
  if (rows.length === 0) {
    return <p className="text-slate-500 py-12 text-center">{empty}</p>;
  }
  return (
    <div className="overflow-x-auto bg-slate-900 border border-slate-800 rounded-2xl">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="border-b border-slate-800 text-slate-400">
            {columns.map(([key, label]) => (
              <th key={String(key)} className="px-4 py-3 font-medium whitespace-nowrap">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-slate-800/60 text-slate-200">
              {columns.map(([key, , fmt]) => (
                <td key={String(key)} className="px-4 py-3 max-w-xs truncate" title={String(row[key] ?? "")}>
                  {row[key] == null ? "—" : fmt ? fmt(row[key]) : String(row[key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
