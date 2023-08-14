import { Outlet } from "@solidjs/router";
import RunHeader from "./shared/RunHeader";

const Layout = () => {
    return (
        <>
            <RunHeader />
            <Outlet />
        </>
    );
};

export default Layout;
