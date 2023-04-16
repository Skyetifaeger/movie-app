import React, { useState } from "react";

export function Input() {

    const [inputValue, setInputValue] = useState("")

    return (
        <div class="App-header">
            <div class = "inputText">
            {inputValue &&
                <h3>{inputValue}</h3>
            }
            </div>
            <input
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }
                }
            />
        </div>
    )
}