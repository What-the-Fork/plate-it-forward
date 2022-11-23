import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home/Home.jsx'
import { FourOhFour } from './FourOhFour.jsx'
import {Navigation} from "./Shared/Components/Navigation";
import {Footer} from "./Shared/Components/Footer";


export function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path={"*"} element={<FourOhFour />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}