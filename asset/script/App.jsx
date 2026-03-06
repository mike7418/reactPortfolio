// React JavaScript source code
import { useState } from 'react'
import reactLogo from './asset/image/React__logo.wine.svg'
import viteLogo from 'asset/image/vite__logo.svg'
import '/asset/css/App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="http://vitjs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="viteLogo">
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}