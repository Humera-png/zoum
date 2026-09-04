-- General contact inquiries (business, hire-talent, career, etc.)
CREATE TABLE inquiries (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT NOT NULL,
  reason TEXT NOT NULL,
  role_needed TEXT,
  headcount TEXT,
  message TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_inquiries_email ON inquiries(email);
CREATE INDEX idx_inquiries_reason ON inquiries(reason);

-- Job applications (from the Career page / job listings apply form)
CREATE TABLE job_applications (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  gender TEXT NOT NULL,
  dob TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile TEXT NOT NULL,
  city TEXT NOT NULL,
  current_ctc TEXT,
  expected_ctc TEXT,
  company TEXT,
  experience TEXT,
  education TEXT NOT NULL,
  resume_filename TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_job_applications_email ON job_applications(email);
