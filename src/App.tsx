import React from 'react';
import './App.css';
import Pages from "./Server/Routes";
import ErrorBoundaries from './Error/ErrorBoundaries';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <ErrorBoundaries>
                <Pages/>
            </ErrorBoundaries>
        </div>
    );
}

export default App;
