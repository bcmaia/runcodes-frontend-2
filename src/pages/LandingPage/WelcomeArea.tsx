import { css } from "../../../styled-system/css";
import { stack } from "../../../styled-system/patterns";
import logo from "../../assets/logos/logoblue.png";
import techClickable from "../../recipes/techClickable.recipe";
import { link } from "../../recipes/text-recipes";

const WelcomeAreaContent = () => {
    return (
        <div
            class={stack({
                w: "100%",
                
                md: { ml: "2%", w: "96%" },
                lg: { ml: "13%", w: "85%" },
                xl: { ml: "27%", w: "70%" },

                mt: "25%",
                '@media (max-height: 767px)': {mt: "10%"},
            })}
        >
            <a href='https://runcodes.icmc.usp.br/' class={css({})}>
                <img src={logo} alt='Runcodes logo' />
            </a>

            <h5 class={css({ textStyle: "lightTouch" })}>ICMC</h5>

            <p
                class={css({
                    textStyle: "bodyStrong",
                })}
            >
                run.codes é um sistema de submissão e correção automática de
                exercícios de programação, com suporte a diversas linguagens
                como C/C++, Python, Java, Fortran, dentre outras.
            </p>

            <a
                href='https://icmc.usp.br/'
                target='_blank'
                class={techClickable()}
            >
                conheça mais sobre o icmc
            </a>

            {/* TODO: Add pop-up */}
            <p
                class={css({
                    textStyle: "bodyStrong",
                    mt: "10px",
                })}
            >
                Ao navegar no run.codes você concorda com os{" "}
                <a href='#' class={link()}>
                    {" "}
                    Termos de Uso{" "}
                </a>
            </p>
        </div>
    );
};

const WelcomeArea = () => {
    return (
        <div
            class={css({
                h: "100%",
                w: { base: "100%", md: "60%" },
                p: '2%'
            })}
        >
            <WelcomeAreaContent />
        </div>
    );
};

export default WelcomeArea;
