import { Outlet } from "@solidjs/router";
import RunHeader from "./components/RunHeader";

const Layout = () => {
    return (
        <>
            <RunHeader />
            <Outlet />
        </>
    );
};

export default Layout;
