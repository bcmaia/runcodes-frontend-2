import { css } from "../../styled-system/css";
import logo from "../assets/logos/logowhite.png";
import { JSXElement } from "solid-js";
import { hstack, square } from "../../styled-system/patterns";
import { A } from "@solidjs/router";

import mojoDojoCasaHouseIcon from "../assets/icons/mojo-dojo-casa-house.svg";
import moreArrowsDown from "../assets/icons/more-arrows-down.svg";

// # CONSTANTS
const HEADER_HEIGHT = "51px";

// Target color: #ffa500
// NOTE: Use <https://codepen.io/sosuke/pen/Pjoqqp> to get a filter that
//  transforms a white image into a image of a given tone.
const FILTER_TO_ORANGE =
    "invert(64%) sepia(49%) saturate(1967%) hue-rotate(359deg)" +
    " brightness(102%) contrast(106%)";

const HeaderButton = (props: { children: JSXElement; withBg?: boolean }) => {
    return (
        <div
            class={square({
                display: "inline-flex",
                justifyItems: "center",
                alignItems: "center",

                p: "5px 10px",

                cursor: "pointer",
                color: "white",
                bgColor: props.withBg ? "#1c8cbc" : "rgba(0, 0, 0, 0)",

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
        <ul
            class={hstack({
                h: HEADER_HEIGHT,
                boxSizing: "border-box",
                lineHeight: "20px",
                textAlign: "center",
                p: "5px 10px",
                bgColor: "#1c8cbc",
            })}
        >
            <li class={css({ mr: "5px" })}>Hora do Servidor:</li>
            <li>
                <p> dd/mm/yyyy </p>
                <p> 00:00:00 </p>
            </li>
        </ul>
    );
};

const LeftPart = () => {
    return (
        <div class={hstack({ ml: "0px", mr: "auto", gap: "0" })}>
            <div
                class={css({
                    p: {base: '0' , sm: "5px 10px", md: '10px 15px'},
                })}
            >
                <img
                    alt=''
                    src={logo}
                    class={css({
                        maxH: "36px",
                        '@media(max-width: 500px)': {display: 'none'},
                    })}
                />
            </div>

            <A href='/home'>
                <HeaderButton withBg={true}>
                    <img
                        alt='TODO: Write image description.'
                        src={mojoDojoCasaHouseIcon}
                        class={css({
                            minH: '10px',
                            maxH: "30px",
                            m: {base: '0', sm: "0 5px"},
                        })}
                    />
                </HeaderButton>
            </A>
        </div>
    );
};

const RightPart = () => {
    return (
        <div class={hstack({ mr: "0px", ml: "auto", gap: "0" })}>
            <HeaderButton>
                <p
                    class={css({
                        fontWeight: "300",
                        fontFamily: "face-font",
                    })}
                >
                    example@usp.br
                </p>
                <div>
                <img
                    alt='TODO: Write image description.'
                    src={moreArrowsDown}
                    class={css( {h: '10px', m: '0 5px' })}
                />
                </div>
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
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    maxH: HEADER_HEIGHT,
                    position: "relative",

                    fontFamily: "main-font",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: "white",
                })}
            >
                <LeftPart />
                <RightPart />
            </div>
        </nav>
    );
};

export default RunHeader;
