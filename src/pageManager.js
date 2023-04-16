import React from "react";
import './App.css';
import { Counter } from './Counter';
import { Accordion } from './Accordion';
import { Input } from './input';
import { MoviesList } from './Movies/moviesList';
import PropTypes from "prop-types";

export function PageManager({ issudoToggled, setsudoToggled }) {
    return (
        <div class="pageManager">
            <button
                style={{ fontSize: '20px' }}
                onClick={() => {
                    if (issudoToggled === 4) {
                        setsudoToggled(1);
                    } else { setsudoToggled(issudoToggled + 1); }
                }}
            >SWITCH PAGE</button>
            <div class="render">
                {issudoToggled === 1 ?
                    <Counter />
                    : issudoToggled === 2 ?
                        <Accordion />
                        : issudoToggled === 3 ?
                            <Input />
                            : <MoviesList />
                }
            </div>
        </div>
    )
}

PageManager.propTypes = {
    issudoToggled: PropTypes.number.isRequired,
    setsudoToggled: PropTypes.func.isRequired
}