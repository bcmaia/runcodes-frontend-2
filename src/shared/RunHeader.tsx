import { css } from "../../styled-system/css";
import logo from "../assets/logos/logowhite.png";
import mojoDojoCasaHouseIcon from "../assets/icons/MojoDojoCasaHouse.svg";
import { JSXElement } from "solid-js";
import { JsxElements } from "../../styled-system/types/jsx";
import { float, hstack, square } from "../../styled-system/patterns";
import { A } from "@solidjs/router";

// # CONSTANTS
const HEADER_HEIGHT = "51px";

// Target color: #ffa500
// NOTE: Use <https://codepen.io/sosuke/pen/Pjoqqp> to get a filter that
//  transforms a white image into a image of a given tone.
const FILTER_TO_ORANGE =
    "invert(64%) sepia(49%) saturate(1967%) hue-rotate(359deg)" +
    " brightness(102%) contrast(106%)";

const HeaderButton = (props: { 
    children: JSXElement,
    withBg?: boolean,
}) => {
    return (
        <div
            class={square({
                display: "inline-flex",
                justifyItems: "center",
                alignItems: "center",

                p: '5px 10px',

                cursor: "pointer",
                color: "white",
                bgColor: props.withBg ? "#1c8cbc" : 'rgba(0, 0, 0, 0)',

                h: HEADER_HEIGHT,
                boxSizing: "border-box",

                _hover: {
                    color: "#ffa500",
                    bgColor: "white",
                    "& > *": { filter: FILTER_TO_ORANGE },
                },
            })}
        >
            {props.children}
        </div>
    );
};

const Clock = () => {
    return (
        <ul class={css({
            h: HEADER_HEIGHT,
            boxSizing: "border-box",
            p: '5px 10px',
        })}>
            <li>
                Hora do Servidor:
            </li>
            <li>
                <p> dd/mm/yyyy </p>
                <p> 00:00:00 </p>
            </li>
        </ul>
    );
};

const LeftPart = () => {
    return (
        <div class={hstack({ ml: '0px', mr: "auto" })}>
            <div
                class={css({
                    p: "10px 15px",
                })}
            >
                <img
                    alt=''
                    src={logo}
                    class={css({
                        maxH: "36px",
                    })}
                />
            </div>

            <A href='/home'>
                <HeaderButton withBg={true} >
                    <img
                        alt=''
                        src={mojoDojoCasaHouseIcon}
                        class={css({
                            maxH: "20px",
                            m: "0 5px",
                        })}
                    />
                </HeaderButton>
            </A>
        </div>
    );
};

const RightPart = () => {
    return (
        <div class={hstack({ mr: '0px', ml: "auto" })}>
            <HeaderButton>
                example@usp.br
            </HeaderButton>
            <Clock />
        </div>
    );
};

const RunHeader = () => {
    return (
        <nav>
            <div
                class={css({
                    bgColor: "rgba(53,68,88,1.0)",
                    overflow: "auto",
                    display: "flex",
                    alignItems: "center",
                    maxH: HEADER_HEIGHT,
                    position: "relative",

                    
                })}
            >
                <LeftPart />
                <RightPart />
            </div>
        </nav>
    );
};

export default RunHeader;
