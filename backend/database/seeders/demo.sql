INSERT INTO tenants (id, name, domain, logo_url) VALUES
  ('00000000-0000-0000-0000-000000000001', 'Kingslee HR Demo', 'demo.kingslee.hr', NULL)
ON DUPLICATE KEY UPDATE name=VALUES(name);

INSERT INTO users (id, email, password, full_name, roles, tenant_id)
VALUES (
  '00000000-0000-0000-0000-000000000100',
  'admin@demo.com',
  '$argon2id$v=19$m=65536,t=3,p=4$eG1YS3V4a0VqaEVVMmRhOA$SkKdUvOJdvAtLtI3JrYnQLFW1hgSm2XbSVa4XqG0g3E',
  'Demo Admin',
  'super_admin,admin',
  '00000000-0000-0000-0000-000000000001'
) ON DUPLICATE KEY UPDATE full_name=VALUES(full_name);

INSERT INTO employees (id, first_name, last_name, email, department, job_title, tenant_id)
VALUES
  ('00000000-0000-0000-0000-000000001000','Layla','Al Saud','layla@demo.com','HR','HRBP','00000000-0000-0000-0000-000000000001'),
  ('00000000-0000-0000-0000-000000001001','Omar','Al Harbi','omar@demo.com','Engineering','Engineer','00000000-0000-0000-0000-000000000001')
ON DUPLICATE KEY UPDATE job_title=VALUES(job_title);
