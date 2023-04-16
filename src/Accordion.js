import React, { useState } from "react";

export function Accordion() {
    const [isToggled, setToggled] = useState(false)

    return (
        <div class="App-header">
            {isToggled ?
                <h3>Show Me</h3>
                : null
            }
            <button
                onClick={() => setToggled(!isToggled)}
            >Toggle</button>
        </div>
    )
}
