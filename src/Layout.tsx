import { Outlet } from "@solidjs/router";
import RunHeader from "./components/page-pieces/RunHeader.component";

const Layout = () => {
    return (
        <>
            <RunHeader />
            <Outlet />
        </>
    );
};

export default Layout;
