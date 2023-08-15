import { createSignal } from 'solid-js';
import { css } from '../../styled-system/css';
import '../index.css';
import RunModal from '../shared/FirstModal';
import LoginArea from './LandingPage/LoginArea';
import WelcomeArea from './LandingPage/WelcomeArea';

const LandingPage = () => {

    return (
        <div id='main-bg-image' class={css({
            bgSize: 'cover',
            bgRepeat: 'no-repeat',
            height: '100vh',
            width: '100vw',

            bgImage: `url(assets/images/login2back.jpg)`,
            bgPosition: 'center center',
            backgroundSize: 'cover',
            bgAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',

            display: 'flex',
            justifyContent: 'space-between',

            flexDir: {base: 'column', md: 'row'},
        })}>
            <WelcomeArea />
            <LoginArea />
        </div>
    )
}

export default LandingPage;