import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home/Home.jsx'
import { FourOhFour } from './FourOhFour.jsx'
import {Navigation} from "./Shared/Components/Navigation";
import {Footer} from "./Shared/Components/Footer";
import {Center} from "./Center/Center";
// import "mapbox-gl/dist/mapbox-gl.css";
import {Partner} from "./Partner/Partner.jsx";
import {CenterSignUp} from "./Partner/CenterSignUp.jsx"
import {RestaurantSignUp} from "./Partner/RestaurantSignUp.jsx"
import {ProfileCenter} from "./Profile/CenterUser/ProfileCenter.jsx";
import {ProfileRestaurant} from "./Profile/RestaurantUser/ProfileRestaurant.jsx";

export function App() {
    return (
        <>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path='/community-center' element={<Center />}/>
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path='/partner-with-us' element={<Partner />} />
                    <Route path='/center-signup' element={<CenterSignUp />} />
                    <Route path='/restaurant-signup' element={<RestaurantSignUp />} />
                    <Route path='/profile-center' element={<ProfileCenter />} />
                    <Route path='/profile-restaurant' element={<ProfileRestaurant />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}