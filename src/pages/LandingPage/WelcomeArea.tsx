import { css } from "../../../styled-system/css";
import { Center, Float, Stack, VStack } from "../../../styled-system/jsx";
import { flex, stack, vstack } from "../../../styled-system/patterns";
// import "./WelcomeArea.css";
import logo from "../../assets/logos/logoblue.png";

const WelcomeAreaContent = () => {
    return (
        <div class={stack({
            ml: '27%',
            mt: '25%',
            w: '70%',
            fontFamily: 'raleway',
        })}>
            <a href='https://runcodes.icmc.usp.br/' class={css({})}>
                <img src={logo} alt='Runcodes logo' />
            </a>

            <h5>ICMC</h5>

            <p>
                run.codes é um sistema de submissão e correção automática de
                exercícios de programação, com suporte a diversas linguagens
                como C/C++, Python, Java, Fortran, dentre outras.
            </p>
        </div>
    );
};

const WelcomeArea = () => {
    return (
        <div
            class={css({
                width: "60%",
                height: "100%",
            })}
        >
            <WelcomeAreaContent />
            {/* <div class='WelcomeArea-content'>
                <a href='https://runcodes.icmc.usp.br/'>
                    <img src='run.codes_files/logoblue.png' alt='run.codes' />
                </a>
                <h5>ICMC</h5>
                <p>
                    run.codes é um sistema de submissão e correção automática de
                    exercícios de programação, com suporte a diversas linguagens
                    como C/C++, Python, Java, Fortran, dentre outras.
                </p>
                <a
                    href='https://icmc.usp.br/'
                    class='btn btn-lg btn-red-outline'
                    target='_blank'
                >
                    Conheça mais sobre o ICMC
                </a>
                <br />
                <br />
                Ao navegar no run.codes você concorda com os
                <a
                    href='#'
                    class='modalTerms terms'
                    data-toggle='modal'
                    data-target='#modalTerms'
                >
                    Termos de Uso
                </a>
            </div> */}
        </div>
    );
};

export default WelcomeArea;
