const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Elevator } from "./views/Elevator.jsx"

export function App() {

    return <Router>
        <section>
            <main>
                <Routes>
                    <Route element={<Elevator />} path="/" />
                </Routes>
            </main>
        </section>
    </Router>
}