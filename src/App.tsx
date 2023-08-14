import { Router, Route, Routes } from "@solidjs/router";
import { createContext, lazy, useContext } from "solid-js";

// # FONTS
import "@fontsource/raleway";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/700.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";

// # PAGES
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import { SetStoreFunction, createStore } from "solid-js/store";
const MyOferringsPage = lazy(() => import('./pages/MyOferringsPage'));

type userStoreType = {isLoggedIn : boolean, userData : any};
type userContextType = {user: userStoreType, setUser: SetStoreFunction<userStoreType>};

export const DEFAULT_USER_STATE : userStoreType = {isLoggedIn : false, userData : {}};

export const UserContext = createContext<userContextType>();

const App = () => {
    const [user, setUser] = createStore<userStoreType>({isLoggedIn: false, userData: {}});

    return (
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <Routes>
                    <Route path='/' component={LandingPage} />
                    
                    <Route path='/' component={Layout}>
                        <Route path='/home' component={HomePage} />
                        <Route path='/Offerings/my' component={MyOferringsPage} />
                    </Route>
                </Routes>
            </Router>
        </UserContext.Provider>
    );
};

export function useUserContext() {
    return useContext(UserContext);
}

export default App;
