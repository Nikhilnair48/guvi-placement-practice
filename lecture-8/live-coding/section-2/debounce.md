# Typeahead with debounce and cancel

## Problem statement

Build an autocomplete for a text input. As the user types, show suggestions from an API.

Do not spam the API while the user is typing quickly. Do not display stale results.

Route for suggestions (assume it exists):
GET /api/suggest?q=<query>

Example:
"g" -> request 300ms later <-- cancel
"gu" -> request 300ms later <-- cancel
"guv" -> request 300ms later <-- cancel
"guvi" -> request 300ms later


Requirements:
- Debounce input so requests fire after a short pause (eg: 300ms?)
- Cancel any in-flight request when a new one starts
- If results return out of order, never show stale data
- Keyboard (optional): up/down to move a highlight, enter to choose

## Approach

### Not a good approach...

- Fire a fetch request on every key up; no debounce & no abort

### Better approach
- Debounce the query value. On each debounced change, abort the previous request and then fetch
- Keep an incrementing request id

## Implementation

```js

const DATA = ["Apple", "Apricot", "Banana", "Cherry", "Orange", "Mango"];

function suggestApi(q, { signal }) {
    return new Promise((resolve, reject) => {
        const t = setTimeout(() => {
            const query = q.trim().toLowerCase();
            resolve(query ? 
                DATA.filter(x => x.toLowerCase().startsWith(query)) : []);
        }, 300);
        signal.addEventListener("abort", () => [
            clearTimeout(t);
            reject(new Error("Request aborted"));
        ]);
    });
}

// custom debounce hook
function useDebounced(value, delay = 300) {
    const [v, setV] = useState(value);
    useEffect(() => {
        const t = setTimeout(() => setV(value), delay);
        return () => clearTimeout();
    }, [value, delay])
    return v;
}


function TypeAhead() {
    const [q, setQ] = useState("");
    const debouncedQ = useDebounced(q, 300);

    const [open, setOpen] = useState(false);
    const [opts, setOps] = useState([]);
    const [highlighted, setHighlighted] = useState(-1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const inputRef = useRef();

    const reqCounter = useRef(0);
    const abortRef = useRef(null);

    useEffect(() => {
        setError("");

        if(!debouncedQ) {
            setOps([]);
            setOpen(false);
            setHighlighted(-1);
            return;
        }

        // cancelling previous in-flight requests
        if(abortRef.current)
            abortRef.current.abort();

        const controller = new AbortController();
        abortRef.current = controller;
        const id = ++reqCounter.current;

        setLoading(true);

        suggestApi(debouncedQ, { signal: controller.signal})
            .then(list => {
                // stale request that returned some data
                if(id !== requestCounter.current) return;

                setOpts(list);
                setOpen(list.length > 0);
                setHighlighted(list.length > 0 ? 0 : -1);
            }).finally(() => {
                setLoading(false);
            })

        return () => controller.abort();
    }, [debouncedQ]);

    // keep the highlighted option visible

    // handle key up and down events

    // close the options when user clicks outside
    
    return (
        <div>
            <label>Search</label>
            <input 
                id="input"
                ref={inputRef}
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => {}}
            />
            {open && (
                <ul>
                    {
                        opts.map((opt, i) => {
                            const selected = i === highlight;
                            return (
                                <li
                                    id={`${opt}-${i}`}
                                    key={opt}
                                    onMouseEnter={() => {}}
                                    onMouseDown={() => {}}
                                    onClick={() => {
                                        setQ(opt);
                                        setOpen(false);
                                    }}
                                >
                                    {opt}
                                </li>
                            )
                        })
                    }
                </ul>
            )}
            
        </div>

    )

}
```


