import { css } from "../../styled-system/css";
import { Flex } from "../../styled-system/jsx";
import { flex } from "../../styled-system/patterns";
import '../index.css';
import LoginArea from "./LandingPage/LoginArea";
import WelcomeArea from "./LandingPage/WelcomeArea";


const LandingPage = () => {
    return (
        <div id='main-bg-image' class={css({
            bgSize: 'cover',
            bgRepeat: 'no-repeat',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'space-between',
        })}>
            <WelcomeArea />
            <LoginArea />
        </div>
    )
}

export default LandingPage;