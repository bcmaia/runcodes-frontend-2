import { css } from "../../../styled-system/css";
import techClickable from "../../recipes/techClickable.recipe";
import { link } from "../../recipes/text-recipes.recipes";
import { divider } from "../../../styled-system/patterns";
import { UserContext } from "../../App";
import {
    Accessor,
    Setter,
    createEffect,
    createSignal,
    useContext,
} from "solid-js";
import { fetchUserData } from "../../services/auth";
import { useNavigate } from "@solidjs/router";
import ErrorMsgBox from "./ErrorMsgBox.component";

const inputClass = css({
    p: "6px 12px",
    mb: "15px",

    fontFamily: "face-font",
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

const EmailInput = (props: {
    email: Accessor<string>;
    setEmail: Setter<string>;
}) => {
    return (
        <input
            name='data[User][email]'
            placeholder='Email'
            maxlength='255'
            type='email'
            id='UserEmail'
            required={true}
            class={inputClass}
            value={props.email()}
            onInput={(e) => props.setEmail(e.target.value)}
        />
    );
};

const PasswordInput = (props: {
    password: Accessor<string>;
    setPassword: Setter<string>;
}) => {
    return (
        <input
            name='data[User][password]'
            placeholder='Senha'
            type='password'
            id='UserPassword'
            required={true}
            class={inputClass}
            value={props.password()}
            onInput={(e) => props.setPassword(e.target.value)}
        />
    );
};

const LoginForm = () => {
    // Signals
    const [authErr, setAuthErr] = createSignal(""); // TODO: Display error message
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");

    // Hooks
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();

    // Effects
    createEffect(() => {
        if (userCtx?.user?.isLoggedIn) navigate("/home");
    });

    // Submit function
    const handleSubmit = (event: any) => {
        event.preventDefault();

        setAuthErr("");

        fetchUserData(email(), password())
            .then((userData) => {
                if (undefined === userCtx)
                    throw Error("User context is undefined");
                userCtx?.setUser("userData", userData);
                userCtx?.setUser("isLoggedIn", true);
            })
            .catch((err) => setAuthErr(err.toString()));

        setPassword("");
    };

    // UI
    return (
        <form id='UserLoginForm' accept-charset='utf-8' onSubmit={handleSubmit}>
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

            <ErrorMsgBox show={"" !== authErr()}>
                Você não confirmou o seu email
            </ErrorMsgBox>

            <EmailInput email={email} setEmail={setEmail} />

            <PasswordInput password={password} setPassword={setPassword} />

            <button
                type='submit'
                class={techClickable({
                    color: "white",
                    weight: "extralight",
                    width: "max",
                })}
            >
                login
            </button>

            <ErrorMsgBox show={"" !== authErr()} color='blue'>
                Se você não recebeu seu email para confirmação do cadastro,
                {' '}
                <a
                    class={css({
                        color: "black",
                        _hover: { textDecoration: "underline" },
                    })}
                >
                    clique aqui
                </a> 
                {' '}
                que enviaremos novamente. Caso você continue sem receber, envie
                um email para support@run.codes
            </ErrorMsgBox>

            <div
                class={css({
                    fontFamily: "face-font",
                    fontSize: "14px",
                    lineHeight: "20px",
                    mt: "5px",
                    textAlign: "right",
                })}
            >
                <a
                    href=''
                    class={link({ color: "white", hoverColor: "white" })}
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
                p: "2%",
            })}
        >
            <div
                class={css({
                    mt: { base: "16%", md: "32%" },
                    "@media (max-height: 767px)": { mt: "10%" },
                    w: { base: "100%", md: "98%", lg: "80%", xl: "65%" },
                })}
            >
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginArea;
