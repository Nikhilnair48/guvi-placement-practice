# Section 1 - Micro pre-requisites

## What's a Large Language Model?

An LLM is a text autocomplete engine trained on large amounts of text.

Early models were trained to solve challenges in "Natural Language Processing."

Today's models can generate images & videos - multimodal capabilities.

What's large here?

An LLM can be in the 10s of gigabytes in size. The content that is used to train the model can be in petabytes.

How does a LLM perform this "autocomplete?"

It learns the statistics of language; given a prompt, it predicts the next token.

## Tokens, & other concepts

### What's a token?

A token is the unit the model reads/writes. It's often smaller than a word (eg: "encoding" -> encod + ing). Models have a fixed context window - the max token the model can consider at once.

Eg:
a model has 8K (8000) context window
Your prompt + the answer from the model must fit into the context window

Why's token relevant?

Tokenization lets the model handle various symbols - code symbols, emojis, words (common or rare) to build it's own vocabulary.

Setting restrictions on context window or LLM response is also helpful in reducing cost, latency and correctness depend on token count.

## What's prompt?

A prompt is everything you give the model before it starts generating text.

### Prompt

Messy prompt:
Explain BFS... talk about graphs and use JS and maybe complexity and please be concise and give details...

A better prompt:
You are a technical interviewer.
Task: Explain BFS to a junior developer in <200 words, then provide a 20-30 line JS BFS implementation on an adjancency list. Include time complexity as O(...).
Output: JSON only { explanation, code, time_complexity, edge_cases[] }. Validate JSON.


### Decoding knobs - why the same prompt can give different answers?

The LLM attempts to predict the next set of tokens. It will come up with multiple options for the next set of tokens. How do we choose the token to be used as a response?

    - Temperature: randomness. Lower => steadier; higher => more varied
    - Top-P (nuclus) sampling: sample only from the smallest set of tokens whose cumulative probability >= p (0.85 - confidence)
        - If I've 10 options for the tokens, then pick N whose sum >= p
            - Confidence of 5 tokens may add up to .90


## Structured outputs

If you plan to parse, grade or chain the output, don't ask for prose - ask for JSON with a specific schema.

{
    "explanation": "string",
    "code": "string",
    "time_complexity": "string",
    "edge_cases": ["string"],
    "examples: ["string]
}
If unknown, set a field to null.


