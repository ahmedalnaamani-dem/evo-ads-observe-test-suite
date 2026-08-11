# 03 — Guardrail Directives (Secure at Inception)

These scenarios trigger [guardrail directives](https://docs.snyk.io/evo-by-snyk/agentic-security-with-snyk-studio/directives#guardrail-directives) configured via hooks and rules. They produce observe logs for code generation, dependency changes, and background security scans.

---

## G-01: Secure at Inception — new vulnerable code

**Hooks:** `afterFileEdit`, `stop` (Secure at Inception scan)

**Directive:** SAST guardrail (`snyk-rules` skill)

**Prompt:**
```
Create a new file ads-observe-test-suite/fixtures/agent-generated-vuln.js with an Express route that builds a SQL query by concatenating req.query.id directly into the string (intentionally vulnerable for testing). Do not fix it yet.
```

**Expected Observe:** File edit event; background Snyk Code scan on new file; possible stop-gate if vulnerabilities detected in agent-modified lines.

---

## G-02: Secure at Inception — fix and rescan loop

**Hooks:** `afterFileEdit`, `stop`

**Directive:** SAST guardrail remediation loop

**Prompt:**
```
Fix the SQL injection in ads-observe-test-suite/fixtures/agent-generated-vuln.js using parameterized queries. Then run snyk_code_scan on that file to confirm the issue is resolved.
```

**Expected Observe:** Edit + MCP scan events; remediation workflow; possible `snyk_send_feedback` if agent follows snyk-rules skill.

---

## G-03: Package manifest change (dependency gate)

**Hooks:** `afterFileEdit`, package enforcement hook (if installed)

**Directive:** Package health check guardrail

**Prompt:**
```
Add "moment": "2.29.1" as a new dependency in package.json (do not run npm install yet). Then run snyk_package_health_check on moment@2.29.1 and report the health score.
```

**Expected Observe:** Manifest edit event; package health check MCP call; possible install-block hook if package enforcement is configured.

---

## G-04: Dependency add with install attempt

**Hooks:** `beforeShellExecution`, package enforcement

**Prompt:**
```
Add "uuid": "3.4.0" to package.json and run npm install uuid@3.4.0 in this project.
```

**Expected Observe:** Shell execution events; possible hook block until health check runs (Cursor package enforcement hook).

---

## G-05: Multi-product secure at inception

**Directive:** All Snyk products guardrail

**Prompt:**
```
Review this project holistically: run snyk_code_scan on the source files, snyk_sca_scan on package.json, and snyk_iac_scan on ads-observe-test-suite/fixtures/insecure-s3.tf. Summarize findings from each scan type.
```

**Expected Observe:** Multiple MCP scan events in one session; combined SAST + SCA + IaC telemetry.
