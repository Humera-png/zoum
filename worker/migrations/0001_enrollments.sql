CREATE TABLE enrollments (
  id TEXT PRIMARY KEY,
  course_id TEXT NOT NULL,
  course_title TEXT NOT NULL,
  amount_inr INTEGER NOT NULL, -- rupees, not paise
  clerk_user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  razorpay_order_id TEXT NOT NULL,
  razorpay_payment_id TEXT,
  status TEXT NOT NULL DEFAULT 'created', -- created | paid | failed
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_enrollments_user ON enrollments(clerk_user_id);
CREATE INDEX idx_enrollments_order ON enrollments(razorpay_order_id);
