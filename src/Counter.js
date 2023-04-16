import React, { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div class = "App-header">
            <h3>{count}</h3>
                <button
                    onClick={() => setCount(count + 5)}
                >+ 5</button>
                <button
                    onClick={() => setCount(count + 1)}
                >+</button>
                <button
                    onClick={() => setCount(count - 1)}
                >-</button>
                <button
                    onClick={() => setCount(count - 5)}
                >- 5</button>
        </div>
    )
}