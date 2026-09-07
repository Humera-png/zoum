-- Extra intake fields collected before payment: phone, highest education,
-- and why they're taking the course. Nullable since older rows predate this.
ALTER TABLE enrollments ADD COLUMN phone TEXT;
ALTER TABLE enrollments ADD COLUMN education TEXT;
ALTER TABLE enrollments ADD COLUMN purpose TEXT;
