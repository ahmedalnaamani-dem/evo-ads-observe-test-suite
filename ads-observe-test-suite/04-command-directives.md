# 04 — Command Directives (Remediation Playbooks)

These scenarios invoke [command directives](https://docs.snyk.io/evo-by-snyk/agentic-security-with-snyk-studio/directives#command-directives) — manually triggered security playbooks that produce end-to-end remediation observe logs.

Install the `/snyk-fix` command directive from [Snyk Studio Recipes](https://github.com/snyk/studio-recipes) to run C-02 and C-03 natively. The prompts below work even without the slash command installed.

---

## C-01: Scan-only discovery

**Prompt:**
```
Scan this entire project with both snyk_code_scan and snyk_sca_scan. Do not fix anything — just produce a prioritized list of the 5 most severe findings across both scans.
```

**Expected Observe:** Dual MCP scan events; discovery phase telemetry.

---

## C-02: Targeted SCA remediation

**Prompt:**
```
Run snyk_sca_scan on this project. Fix the highest-severity lodash vulnerability by upgrading to the minimum safe version. Re-scan to validate the fix. Do not create a PR unless I confirm.
```

**Expected Observe:** SCA scan → manifest edit → shell (npm install) → re-scan → possible `snyk_send_feedback`.

---

## C-03: Targeted SAST remediation

**Prompt:**
```
Run snyk_code_scan on vulnerable.js. Fix the highest-priority code vulnerability (all instances of that type in the file). Re-scan to validate. Show a remediation summary but do not create a PR.
```

**Expected Observe:** SAST scan → code edit → re-scan → remediation summary event.

---

## C-04: Full /snyk-fix workflow (if directive installed)

**Prompt:**
```
/snyk-fix sca lodash
```

**Expected Observe:** Full end-to-end remediation playbook: parse → scan → fix → validate → summary → PR prompt.
