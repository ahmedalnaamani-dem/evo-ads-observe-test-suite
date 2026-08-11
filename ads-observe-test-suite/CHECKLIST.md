# ADS Observe Scanner Demo — Checklist

**Session ID:** _______________  
**Date:** _______________  
**Tester:** _______________  
**Tenant:** <YOUR_TENANT_ID>

## Scanner demo (priority — use 06-scanner-demo-playbook.md)

| Scanner | Before | Scenario | Detected? | Blocked? | Notes |
|---------|:------:|----------|:---------:|:--------:|-------|
| Indirect Prompt Injection | 1 | S-01 | ☐ | ☐ | |
| Indirect Prompt Injection | | S-02 | ☐ | ☐ | |
| Secrets Detection | 1 | S-03 | ☐ | ☐ | |
| Secrets Detection | | S-04 | ☐ | ☐ | |
| **PII Detection** | **0** | **S-05** | ☐ | ☐ | |
| **PII Detection** | | **S-06** | ☐ | ☐ | |
| **Sensitive Shell Commands** | **0** | **S-07** | ☐ | ☐ | |
| **Sensitive Shell Commands** | | **S-08** | ☐ | ☐ | |
| **Sensitive Shell Commands** | | **S-09** | ☐ | ☐ | |
| **Workspace Boundary** | **0** | **S-10** | ☐ | ☐ | |
| **Workspace Boundary** | | **S-11** | ☐ | ☐ | |
| MCP Tool Risk | 14 | S-12 | ☐ | ☐ | |
| MCP Tool Risk | | S-13 | ☐ | ☐ | |
| Web Search & HTTP | 1 | S-14 | ☐ | ☐ | |
| Web Search & HTTP | | S-15 | ☐ | ☐ | |
| **Hooks Enforcement** | **0** | **S-16** | ☐ | ☐ | |
| **Hooks Enforcement** | | **S-17** | ☐ | ☐ | |
| **Toxic Flows** | **0** | **S-18** | ☐ | ☐ | |
| **Toxic Flows** | | **S-19** | ☐ | ☐ | |

**Scanner demo result:** ___ / 9 scanners confirmed (at least 1 scenario each)

---

## Supplementary coverage (optional)

### 01 — Hook Lifecycle
- [ ] H-01 Session start
- [ ] H-02 Prompt submission
- [ ] H-03 File read
- [ ] H-04 Shell execution
- [ ] H-05 File edit
- [ ] H-06 Session end

### 02 — MCP Security Scans
- [ ] M-01 snyk_version
- [ ] M-02 snyk_sca_scan
- [ ] M-03 snyk_code_scan
- [ ] M-04 snyk_package_health_check
- [ ] M-05 snyk_trust
- [ ] M-06 snyk_iac_scan
- [ ] M-07 snyk_send_feedback
- [ ] M-08 snyk_aibom

### 03 — Guardrail Directives
- [ ] G-01 New vulnerable code (SAI)
- [ ] G-02 Fix and rescan loop
- [ ] G-03 Package manifest change
- [ ] G-04 Dependency install attempt
- [ ] G-05 Multi-product scan

### 04 — Command Directives
- [ ] C-01 Scan-only discovery
- [ ] C-02 SCA remediation
- [ ] C-03 SAST remediation
- [ ] C-04 /snyk-fix (optional)

---

## 10-minute live demo script

Run in order, pausing to show Observe counter after each:

1. **S-01** — Indirect Prompt Injection (read injection file)
2. **S-03** — Secrets Detection (read fake-secrets.env)
3. **S-05** — PII Detection (read pii-records.json) ← zero today
4. **S-07** — Sensitive Shell Commands (rm -rf) ← zero today
5. **S-10** — Workspace Boundary (/etc/passwd) ← zero today
6. **S-12** — MCP Tool Risk (scan /etc)
7. **S-14** — Web Search & HTTP (fetch docs.snyk.io)
8. **S-16** — Hooks Enforcement (create vuln file) ← zero today
9. **S-18** — Toxic Flows (secrets → curl POST) ← zero today
