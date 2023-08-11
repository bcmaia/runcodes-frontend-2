import { css } from "../../../styled-system/css";
import techClickable from "../../recipes/techClickable.recipe";
import { link } from "../../recipes/text-recipes";
import { Divider } from "../../../styled-system/jsx";
import { divider } from "../../../styled-system/patterns";
// import './LoginArea.css';

const inputClass = css({
    p: "6px 12px",
    mb: "15px",

    fontFamily: "raleway",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "#999",

    width: "100%",
    minH: "20px",

    transition: "all 100ms ease",

    border: "1px solid #ccc",

    _focus: {
        borderColor: "#66afe9",
        boxShadow:
            "inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)",
        outline: "0",
    },
});

const EmailInput = () => {
    return (
        <input
            name='data[User][email]'
            placeholder='Email'
            maxlength='255'
            type='email'
            id='UserEmail'
            required={true}
            class={inputClass}
        />
    );
};

const PasswordInput = () => {
    return (
        <input
            name='data[User][password]'
            placeholder='Senha'
            type='password'
            id='UserPassword'
            required={true}
            data-dashlane-rid='06f2e493039b21e0'
            class={inputClass}
        />
    );
};

const LoginForm = () => {
    return (
        <form
            action='/'
            id='UserLoginForm'
            method='post'
            accept-charset='utf-8'
            data-form-type='login'
        >
            <div
                class={techClickable({
                    color: "white",
                    weight: "extralight",
                    width: "auto",
                })}
            >
                <a href='#'> cadastre-se agora! </a>
            </div>

            <div
                class={divider({
                    orientation: "horizontal",
                    thickness: "1px",
                    color: "white",
                    mt: "33px",
                })}
            />

            <h3
                class={css({
                    color: "white",
                    fontSize: "24px",
                    fontFamily: "raleway",
                    fontWeight: "300",
                    lineHeight: "1.1",
                    mt: "20px",
                    mb: "10px",
                })}
            >
                Já estou cadastrado
            </h3>

            <EmailInput />

            <PasswordInput />

            <div
                class={techClickable({
                    color: "white",
                    weight: "extralight",
                    width: "auto",
                })}
            >
                <a href='#'> login </a>
            </div>

            <div
                class={css({
                    fontFamily: "raleway",
                    fontSize: "14px",
                    lineHeight: "20px",
                    mt: "5px",
                    textAlign: "right",
                })}
            >
                <a
                    href=''
                    class={link({ color: "white", hoverColor: "darkBlue" })}
                >
                    Esqueceu sua senha?
                </a>
            </div>
        </form>
    );
};

const LoginArea = () => {
    return (
        <div
            class={css({
                width: { base: "100%", md: "40%" },
                height: "100%",
                bgColor: "rgba(53,68,88,0.8)",
                p: "3%",
            })}
        >
            <div
                class={css({
                    mt: { base: "16%", md: "32%" },
                    "@media (max-height: 767px)": { mt: "10%" },
                    ml: { base: "0", md: "2%" },
                    w: { base: "100%", md: "98%", lg: "80%", xl: "56.2%" },
                })}
            >
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginArea;
