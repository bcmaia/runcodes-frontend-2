import { css } from "../../../styled-system/css";
// import "./LoginArea.css";

const LoginArea = () => {
    return (
        <div class={css({
            display: 'flex',
            alignItems: 'center',
            // justifyItems: 'center',
            width: '40%',
            height: '100%',
            bgColor: 'rgba(53,68,88,0.8)',
            textAlign: 'center',
        })}>
            <p class={css({textAlign: 'center'})}>Hello, World!</p>
        </div>
    );
};

export default LoginArea;
