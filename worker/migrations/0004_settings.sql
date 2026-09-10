-- Admin-editable key/value settings (currently just the WhatsApp community
-- link shown after a paid enrollment). Keys are allowlisted in the Worker.
CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL DEFAULT '',
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

INSERT OR IGNORE INTO settings (key, value) VALUES ('whatsapp_community_url', '');
