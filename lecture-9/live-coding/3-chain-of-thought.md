# Chain of Thought

What is it?

Chain of thought means asking the model to show a few intermediate steps before the final answer.

Why is it helpful?

If you only ask for "the answer," you can't see wrong assumptions. Short, labels steps make reasoning visible, easy to skim and easy to correct.

How to use it?

Limit the number of steps and the length of each step. Keep steps separate from deliverable. 

Example: 

Role: You are a technical interviewer.
Alternative way to define role:
I'm a junior developer, trying to learn data structures and algorithms. I'm reviewing these for an upcoming interview at <COMPANY NAME>.

Task:
1) List up to 5 labeled steps (<20 words each) describing how BFS visits each node
2) Then return final output as JSON only:
    {
        "explanation": "string",
        "code": "string",
        "time_complexity": "string",
        "edge_cases": ["string"]
    }

Constraints:
- No recursion; use a queue
- Explanation <= 120 words
- If unsure, set any unknown field to null

Return steps first, then the JSON. Do not mix them.

## Example B

Role: Product triage assistant

Task:
1) List up to 4 labeled steps (<= 20 words) that map feedback to tags
2) Each tag must have alongside it, a "rationales"

Constraints:
- Allowed tags: ["billing", "auth", "perf", "ux", "docs"]
- "rationales" must align 1:1 with tags
- If none apply, then return not tags and rationales for a feedback; say: insufficient evidence


Data:
Feedback 1:
It's indeed challenging to deal with a difficult boss and to carry a large workload, especially when you are new to a city and haven't established a supportive network. I would suggest taking a step back to think about your situation and perhaps speak to your boss regarding the issues you're facing. On the other hand, dealing with a large workload can be managed by prioritizing tasks, and maybe you can discuss it with your superiors too.

In regards to feeling lonely, you might want to explore activities or groups that align with your interests to meet new people. And also, remember to take time for yourself to relax and destress. I'm here to assist you as we navigate through these issues.

Feedback 2:
"The knight, feeling the heat and the shaking ground, knew the dragon was awake. He mustered his courage and challenged the dragon. His goal was to get back the golden crown and bring peace to the kingdom. The knight yelled, 'Hey Dragon! I'm here to get our crown back!'. He was brave and determined, waiting for the dragon's answer."



## Self-consistency

What is it?
Instead of trusting one answer, the model generates multiple candidates and then the best answer using rules or tests.

Why is it useful?
Models are stochastic (having a random probability distribution).
A single try can miss an edge case. A small pool (3-5) plus a deterministic selector raises the reliability of the model.

How to use it?
- Generate 3-5 candidates at modest randomness 
- Validate each candidate against some objective checks (schema, tests)
- Keep the one that passes most checks

