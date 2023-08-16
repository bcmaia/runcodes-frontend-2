/**
 * App.jsx
 * -----------------------------------------------------------------------------
 * This file, `App.jsx`, serves as the entry point for your Solid.js web
 * application. It sets up routing, global state management, and defines the
 * main structure of your application's UI components.
 * -----------------------------------------------------------------------------
 */

// -----------------------------------------------------------------------------
// ----------------- IMPORTING RESOURCES FROM EXTERNAL MODULES -----------------
// -----------------------------------------------------------------------------
import { Router, Route, Routes } from "@solidjs/router";
import { createContext, lazy } from "solid-js";
import { SetStoreFunction, createStore } from "solid-js/store";

// -----------------------------------------------------------------------------
// ----------------- IMPORTING TYPEFONTS ---------------------------------------
// -----------------------------------------------------------------------------
// It is important to import any font that is used in the correct weight
//  here. The fonts bellow will be statically added to our webapp and will be
//  shipped to the end user wether we use then or not.
import "@fontsource/raleway";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/700.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";

// -----------------------------------------------------------------------------
// ----------------- IMPORTING WEBPAGES ----------------------------------------
// -----------------------------------------------------------------------------
// The following components and pages are imported to be used within the
//  application. These include layout components and route-specific pages.
//
// NOTE: Some pages are rarely accessed, so, we can use lazy load on then.

import Layout from "./Layout";
import LandingPage from "./pages/Landing.page.tsx";
import HomePage from "./pages/Home.page.tsx";
const MyOferringsPage = lazy(() => import("./pages/MyOferrings.page.tsx"));

// -----------------------------------------------------------------------------
// ----------------- CONTEXTS AND GLOBAL STATE ---------------------------------
// -----------------------------------------------------------------------------
// The user-related state and context are defined here. A default state for the
//  user is created, and a context is established to provide access to this state
//  throughout the application.

type userStoreType = { isLoggedIn: boolean; userData: any };
type userContextType = {
    user: userStoreType;
    setUser: SetStoreFunction<userStoreType>;
};

export const DEFAULT_USER_STATE: userStoreType = {
    isLoggedIn: false,
    userData: {},
};

export const UserContext = createContext<userContextType>();



// -----------------------------------------------------------------------------
// ----------------- MAIN APLICATION COMPONENT ---------------------------------
// -----------------------------------------------------------------------------
// The main `App` component serves as the root component of the application.
//  It sets up routing using the `Router` and `Routes` components, and also
//  manages the global contexts.

const App = () => {
    const [user, setUser] = createStore<userStoreType>({
        isLoggedIn: false,
        userData: {},
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            <Router>
                <Routes>
                    <Route path='/' component={LandingPage} />

                    <Route path='/' component={Layout}>
                        <Route path='/home' component={HomePage} />
                        <Route
                            path='/Offerings/my'
                            component={MyOferringsPage}
                        />
                    </Route>
                </Routes>
            </Router>
        </UserContext.Provider>
    );
};


export default App;
