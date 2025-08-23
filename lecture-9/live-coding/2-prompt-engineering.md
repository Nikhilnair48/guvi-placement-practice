# Prompt Engineering

## Seven part skaffold on prompt

1) Role/Audience - sets the tone and evalutation criteria
Why? The same answer written as a "blogger" vs "interviewer" reads very differently
Line: "You are a technical interviewer assessing entry-level candidates"

2) Context - fixes assumptions so the model stops guessing
Why? Ambiguity creates drift: wrong APIs, wrong language, wrong version
Line: "Runtime: Node.js v24. Data structure: adjacency list. Language: Javascript"

3) Task - the deliverables, in order.
Why? The model can produce many things; listing deliverables prevents the model from meandering
Line: "1) Explain BFS in <200 words 2) provide runnable JS code that returns visitation order 3) state time complexity"

4) Constraints - hard rules that removes the wiggle room
Why? Keywords like "must," "never" help reduce the model from making assumptions
Line: "Use a queue, no recursion, no third-party libraries"

5) Output format - the structure a program will read (JSON, table, plain text, canvas)
Why? Machine-readable output makes parsing and testing easier

6) Example (optional) - show shape, not the solution
Why? Few examples to teach structure; long examples from model can be ambiguous

7) Self-check - tell the model to validate its own output
Why? Catch malformed JSON, missing fields, invalid JS syntax, etc
Line: "Validate your JSON; if any field is unknown, set it to null"


## BFS example with prompt engineering

### Bad prompt
Explain BFS and give JS code

### Better prompt

You are a technical interviewer.

Context:
Runetime: Node.js v24. Data: adjacency list

Task:
1) Explain BFS for a junior developer in <200 words
2) Provide a runnable Javascript code that runs visitation order from starting node
3) State time complexity as "O(...)

Contraints:
- Use a queue; no recursion; no third-party libraries

Output:
Return only valid JSON matching:
{
    "explanation": "string",
    "code": "string",
    "time_complexity": "string",
    "edge_cases": ["string"]
}

Example shape (not the solution):
{
    "explanation": "...",
    "code": "...",
    "time_complexity": "O(n+m)",
    "edge_cases": ["...", "..."]
}

Self-check:
Validate your JSON; if any field is unknown, set it to null

## Tracking down a production issue 

### Bad Prompt
What's wrong with these logs?
<logs>

### Better Prompt
You are a Site Reliability Engineer (SRE) on-call.

Context:
You'll be given trimmed logs from a failing service.

Task:
Return JSON ONLY:
```json
{
    "hypotheses": [
        { "cause": "string", "confidence": "low|mid|high", "verify_cmd": "string" }
    ],
    "next_steps": ["string", "string"]
}
```

Constraints:
- Commands must be safe and read-only
- If logs are insufficient, set confidence to "low" and say "insufficient evidence" in next_steps

Self-check:
Validate your JSON; ensure hypotheses[].verify_cmd is read-only (no writes, delete, or restarts)

## Picking the right output format

- Plain text: human readable. Eg: provide the model with some code & you ask it to explain the code, en email
- Markdown/Markdown tables: side-by-side comparisons (eg: express vs fastify vs nestjs, BFS vs DFS)
- JSON - pipeline, tests, etc

