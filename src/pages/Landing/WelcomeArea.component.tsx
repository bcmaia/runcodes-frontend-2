import { createSignal } from "solid-js";
import { css } from "../../../styled-system/css";
import { stack } from "../../../styled-system/patterns";
import logo from "../../assets/logos/logoblue.png";
import techClickable from "../../recipes/techClickable.recipe";
import { link } from "../../recipes/text-recipes.recipes";
import TermsOfUse from "./TermsOfUse.component";



const WelcomeAreaContent = () => {
    const [open, setOpen] = createSignal(false);

    return (
        <div
            class={stack({
                w: "100%",

                md: { ml: "2%", w: "96%" },
                lg: { ml: "13%", w: "85%" },
                xl: { ml: "27%", w: "70%" },

                mt: "25%",
                "@media (max-height: 767px)": { mt: "10%" },
            })}
        >
            <TermsOfUse open={open} onClose={() => setOpen(false)} />

            <a href='https://runcodes.icmc.usp.br/' class={css({})}>
                <img src={logo} alt='Runcodes logo' />
            </a>

            <h5 class={css({ textStyle: "landingLightTouch" })}>ICMC</h5>

            <p
                class={css({
                    textStyle: "landingBodyStrong",
                })}
            >
                run.codes é um sistema de submissão e correção automática de
                exercícios de programação, com suporte a diversas linguagens
                como C/C++, Python, Java, Fortran, dentre outras.
            </p>

            <div class={techClickable({ width: "fit" })}>
                <a href='https://icmc.usp.br/' target='_blank'>
                    conheça mais sobre o icmc
                </a>
            </div>

            {/* TODO: Add pop-up */}
            <p
                class={css({
                    textStyle: "landingBodyStrong",
                    mt: "10px",
                })}
            >
                Ao navegar no run.codes você concorda com os{" "}
                <button class={link()} onclick={() => setOpen(true)}>
                    {" "}
                    Termos de Uso{" "}
                </button>
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
                p: "2%",
            })}
        >
            <WelcomeAreaContent />
        </div>
    );
};

export default WelcomeArea;
