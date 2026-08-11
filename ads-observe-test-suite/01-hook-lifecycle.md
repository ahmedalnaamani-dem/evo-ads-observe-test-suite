# 01 — Hook Lifecycle Events

These scenarios exercise the core Cursor → Agent Guard hook pipeline. Each prompt should generate observe logs without requiring Snyk MCP.

---

## H-01: Session start

**Hooks:** `sessionStart`, Secure at Inception cache warm

**Prompt:**
```
Confirm you can see this project. List the top-level files in the workspace root.
```

**Expected Observe:** Session start event; file listing via `preToolUse`/`postToolUse`.

---

## H-02: Prompt submission

**Hooks:** `beforeSubmitPrompt`, `afterAgentResponse`

**Prompt:**
```
Explain in one paragraph what vulnerable.js does in this project.
```

**Expected Observe:** Prompt submitted before execution; agent response after completion.

---

## H-03: File read

**Hooks:** `beforeReadFile`, `preToolUse`, `postToolUse`

**Prompt:**
```
Read vulnerable.js and summarize each route handler and its security concern.
```

**Expected Observe:** File read event with path `vulnerable.js`.

---

## H-04: Shell execution

**Hooks:** `beforeShellExecution`, `afterShellExecution`

**Prompt:**
```
Run `node -e "console.log('ADS shell observe test')"` and show me the output.
```

**Expected Observe:** Shell command proposed and executed.

---

## H-05: File edit

**Hooks:** `afterFileEdit`, Secure at Inception background scan

**Prompt:**
```
Add a comment on line 1 of vulnerable.js that says "// ADS observe test edit". Do not change any other code.
```

**Expected Observe:** File edit event; optional Secure at Inception scan triggered on `.js` file.

---

## H-06: Session end

**Hooks:** `stop`, `sessionEnd`, Secure at Inception scan gate

**Action:** After completing H-01 through H-05, close the agent chat or start a new session.

**Expected Observe:** Stop and session end events; Secure at Inception may block or report on edited file.
