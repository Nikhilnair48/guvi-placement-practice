# Prep questions


- How does a HTTP request work?
    - http request is created by the browser
    - a handshake with server is performed
        - HTTP verb: OPTIONS call
        - what is TCP?
    - how does a server interpret your request?

- CORS - cross origin resource sharing
    - frontend is running on http://localhost:3000
    - backend is running http://test.com
        - i trust x,y,z domains - localhost,abc.com,etc
            - if you're backend is open to the public internet, you might also trust all traffic
        - port for http: 80/8080
        - secure port is for HTTPS - 443

- Event loop

- API Design 
    - Eg: parking lot, e-commerce


- React
    - Components
    - Props
        - Why's prop drilling bad?
    - How do you solve the issue with prop drilling?
        - Context API
        - Redux
    - Hooks
        - When do you use useState vs useReducer?
        - When do you use useCallback vs useMemo?
