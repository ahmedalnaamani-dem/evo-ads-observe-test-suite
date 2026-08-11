# Evo ADS Observe Test Suite

A hands-on test project for demonstrating **every [Snyk Evo ADS](https://docs.snyk.io/evo-by-snyk) Observe scanner** in Cursor with Agent Guard hooks. It pairs an intentionally vulnerable app with a scenario playbook and detection fixtures so you can trigger each scanner and watch detections land in the ADS Observe view.

> [!WARNING]
> This repo is a **security test harness**. It intentionally contains fake secrets, fake PII, and deliberately vulnerable code inside `ads-observe-test-suite/fixtures/` and `vulnerable.js`. These are dummy values for scanner testing only — never use them as real credentials or ship this code.

## Repository layout

| Path | What it is |
|------|------------|
| [`ads-observe-test-suite/`](./ads-observe-test-suite/) | The playbook: scenario docs, checklist, and detection fixtures |
| [`ads-observe-test-suite/README.md`](./ads-observe-test-suite/README.md) | Full suite docs + scanner coverage matrix |
| [`ads-observe-test-suite/06-scanner-demo-playbook.md`](./ads-observe-test-suite/06-scanner-demo-playbook.md) | **Primary demo** — all 9 Observe scanners, 19 scenarios |
| [`ads-observe-test-suite/fixtures/`](./ads-observe-test-suite/fixtures/) | Test inputs (fake secrets, fake PII, vulnerable IaC/JS) |
| [`ads-observe-test-suite/run-suite.sh`](./ads-observe-test-suite/run-suite.sh) | Prints the scanner index and quick-demo prompts |
| `vulnerable.js`, `package.json` | Intentionally vulnerable target app for SCA / code scans |

## Scanner coverage

| Observe scanner | Scenarios |
|-----------------|-----------|
| Indirect Prompt Injection | S-01, S-02 |
| Secrets Detection | S-03, S-04 |
| PII Detection | S-05, S-06 |
| Sensitive Shell Commands | S-07, S-08, S-09 |
| Workspace Boundary | S-10, S-11 |
| MCP Tool Risk | S-12, S-13 |
| Web Search & HTTP | S-14, S-15 |
| Hooks Enforcement | S-16, S-17 |
| Toxic Flows | S-18, S-19 |

## Prerequisites

- A Snyk Evo ADS agent deployed and online for your tenant
- Agent Guard hooks active (`~/.cursor/hooks.json` with `snyk-agent-guard.sh` entries)
- Snyk MCP server enabled in Cursor and `snyk auth` completed locally

## Getting started

1. Clone this repo and open it in Cursor.
2. Set up your tenant credentials locally (see below) — they are **not** committed.
3. Open the Snyk ADS **Observe** view and start a new Cursor Agent session.
4. Run scenarios from [`ads-observe-test-suite/06-scanner-demo-playbook.md`](./ads-observe-test-suite/06-scanner-demo-playbook.md) and track progress in [`ads-observe-test-suite/CHECKLIST.md`](./ads-observe-test-suite/CHECKLIST.md).

```bash
./ads-observe-test-suite/run-suite.sh   # prints the scanner index + quick-demo prompts
```

## Tenant configuration

The docs reference a `<YOUR_TENANT_ID>` placeholder. Supply your own tenant ID and push key locally; **do not commit them**. A `tenantid-pushkey.txt` file is git-ignored for this purpose:

```
# tenantid-pushkey.txt (git-ignored — never commit real keys)
tenant-id: <YOUR_TENANT_ID>
push-key:  <YOUR_PUSH_KEY>
```

## References

- [Agentic security with Snyk Studio](https://docs.snyk.io/evo-by-snyk/agentic-security-with-snyk-studio/agentic-security-with-snyk-studio)
- [Evo Agent Guard + Cursor integration](https://snyk.io/blog/evo-agent-guard-cursor-integration/)
- [Understanding Toxic Flows in MCP](https://snyk.io/articles/understanding-toxic-flows-mcp/)
- [Cursor Hooks documentation](https://cursor.com/docs/hooks)
