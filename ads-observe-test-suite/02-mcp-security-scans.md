# 02 — Snyk MCP Security Scans

These scenarios invoke [Snyk MCP tools](https://docs.snyk.io/evo-by-snyk/agentic-security-with-snyk-studio/agentic-security-with-snyk-studio#mcp-server-supported-tools) and should produce `beforeMCPExecution` / `afterMCPExecution` observe events plus scan result telemetry.

**Prerequisite:** Snyk MCP connected and authenticated (`snyk auth`).

---

## M-01: MCP connectivity check

**MCP tool:** `snyk_version`

**Prompt:**
```
Use the Snyk MCP to run snyk_version and report the CLI version.
```

**Expected Observe:** MCP execution event; version info returned.

---

## M-02: Open Source (SCA) scan

**MCP tool:** `snyk_sca_scan`

**Prompt:**
```
Run snyk_sca_scan on /Users/jenny/Documents/Labs/Internal_Projects/Test ADS & Observe and summarize the top 3 dependency vulnerabilities by severity.
```

**Expected Observe:** SCA scan initiated via MCP; dependency findings in results.

---

## M-03: Code (SAST) scan

**MCP tool:** `snyk_code_scan`

**Prompt:**
```
Run snyk_code_scan on vulnerable.js in this project. List all High and Critical findings with file and line numbers.
```

**Expected Observe:** SAST scan via MCP; code vulnerability findings (SQL injection, XSS, prototype pollution expected).

---

## M-04: Package health check

**MCP tool:** `snyk_package_health_check`

**Prompt:**
```
Compare the security health of lodash vs underscore for this Node.js project using snyk_package_health_check. Recommend the safer option.
```

**Expected Observe:** Package health check MCP call; structured health comparison.

---

## M-05: Trust workspace folder

**MCP tool:** `snyk_trust`

**Prompt:**
```
Run snyk_trust on this project directory so Snyk scans can proceed without trust prompts.
```

**Expected Observe:** Trust MCP execution event.

---

## M-06: Infrastructure as Code scan

**MCP tool:** `snyk_iac_scan`

**Prompt:**
```
Run snyk_iac_scan on ads-observe-test-suite/fixtures/insecure-s3.tf and report any misconfigurations found.
```

**Expected Observe:** IaC scan MCP event; S3 public access or encryption findings expected.

---

## M-07: Send feedback (post-remediation)

**MCP tool:** `snyk_send_feedback`

**Prompt:**
```
Call snyk_send_feedback with path set to this project root, fixedExistingIssuesCount=1, and preventedIssuesCount=0. This is a test feedback event for ADS observe logging.
```

**Expected Observe:** Feedback MCP event (remediation telemetry).

---

## M-08: AI-BOM generation

**MCP tool:** `snyk_aibom`

**Prompt:**
```
Generate an AI-BOM for this project using snyk_aibom and summarize what AI-related components were detected.
```

**Expected Observe:** AI-BOM MCP execution event.
