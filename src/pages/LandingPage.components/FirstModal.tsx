import { Accessor, JSXElement, Show, children } from "solid-js";
import { css } from "../../../styled-system/css";
import { Transition } from "solid-transition-group";

// NOTE: I'm sorry. I don't know how to implement the original popup animation
//  using solidjs + pandacss, so, i made this mess, that, at least, gives us
//  some animation.

const FirstModal = (props: {
    open: Accessor<boolean>;
    onClose: () => void;
    width?: any;
    margin?: any;
    children?: JSXElement;
}) => {
    const c = children(() => props.children ?? <></>);

    const clickOutOfScope = (event: any) => {
        if (event.target === event.currentTarget) {
            props.onClose();
        }
    };

    return (
        <Transition
            onEnter={(el, done) => {
                const a = el.animate([{ opacity: 0 }, { opacity: 1 }], {
                    duration: 400,
                });
                a.finished.then(done);
            }}
            onExit={(el, done) => {
                const a = el.animate([{ opacity: 1 }, { opacity: 0 }], {
                    duration: 400,
                });
                a.finished.then(done);
            }}
        >
            {props.open() && (
                <div
                    onClick={clickOutOfScope}
                    class={css({
                        position: "fixed",
                        w: "100%",
                        h: "100%",
                        zIndex: "360",

                        top: "0",
                        left: "0",

                        backdropFilter: "blur(5px)",
                        bgColor: "rgba(0, 0, 0, 0.5)",
                        overflow: "scroll",
                    })}
                >
                    <div
                        class={css({
                            position: "static",
                            display: "block",

                            w: { base: "94%", lg: "900px" },
                            m: { base: "3% auto", lg: "30px auto" },

                            bgColor: "rgba(255, 255, 255, 1)",
                            rounded: "10px",
                            boxShadow: "0 5px 15px rgba(0,0,0,.5)",
                            transition: "all ease 1s",
                        })}
                    >
                        {c()}
                    </div>
                </div>
            )}
        </Transition>
    );
};

export default FirstModal;
