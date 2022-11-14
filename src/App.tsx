import React from 'react';
import {backgroundColor, classnames, height, padding, typography} from 'tailwindcss-classnames';

function App() {
    return (
        <div className={classnames(
            backgroundColor('bg-stone-800'),
            height('h-screen'),
        )}>
            <header className={classnames(
                typography('text-center', 'text-white', 'text-5xl'),
                padding('p-4'),
            )}>
                Planet Crafter Calculator
            </header>
            <header className={classnames(
                typography('text-center', 'text-red-600', 'text-xl', 'font-extralight', 'italic'),
            )}>
                Work in progress!
            </header>
        </div>
    );
}

export default App;
