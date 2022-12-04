import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Home } from './Home/Home.jsx'
import { FourOhFour } from './FourOhFour.jsx'
import {Navigation} from "./Shared/Components/Navigation/Navigation.jsx";
import {Footer} from "./Shared/Components/Footer";
import {Center} from "./Center/Center";
import "mapbox-gl/dist/mapbox-gl.css";
import {Partner} from "./Partner/Partner.jsx";
// import {CenterSignUpFormContent} from "./Shared/Components/Navigation/Sign-up/CenterSignUpFormContent.jsx"
// import {RestaurantSignUpFormContent} from "./Shared/Components/Navigation/Sign-up/RestaurantSignUpFormContent.jsx"
import {ProfileCenter} from "./Profile/CenterUser/ProfileCenter.jsx";
import {ProfileRestaurant} from "./Profile/RestaurantUser/ProfileRestaurant.jsx";
import {Provider} from "react-redux";
import {CenterSignUpForm} from "./Shared/Components/Navigation/Sign-up/CenterSignUpForm.jsx";
import {RestaurantSignUpForm} from "./Shared/Components/Navigation/Sign-up/RestaurantSignUpForm.jsx";

export function App({store}) {
    return (
        <>
            <Provider store={store}>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route  path='/' element={<Home />} />
                    <Route path='/community-center' element={<Center />}/>
                    <Route path={"*"} element={<FourOhFour />} />
                    <Route path='/partner-with-us' element={<Partner />} />
                    <Route path='/community-center-signup' element={<CenterSignUpForm />} />
                    <Route path='/restaurant-signup' element={<RestaurantSignUpForm />} />
                    <Route path='/profile-center' element={<ProfileCenter />} />
                    <Route path='/profile-restaurant' element={<ProfileRestaurant />} />
                </Routes>
                <Footer />
            </BrowserRouter>
            </Provider>
        </>
    )
}