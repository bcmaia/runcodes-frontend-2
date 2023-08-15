import { Show } from "solid-js";
import { css } from "../../styled-system/css";

const FirstModal = (props: {
    open: boolean;
    onClose: () => void;
    title?: string;
    width?: string;
}) => {
    const clickOutOfScope = (event: any) => {
        if (event.target === event.currentTarget) {
            props.onClose();
        }
    };

    return (
        <Show when={props.open}>
            <div
                onClick={clickOutOfScope}
                class={css({
                    position: "absolute",
                    w: "100%",
                    h: "100%",
                    zIndex: "360",

                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",

                    bgColor: "rgba(0, 0, 0, 0.5)",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                })}
            >
                <div
                    class={css({
                        position: "relative",
                        w: props.width ?? "auto",
                        bgColor: "rgba(255, 255, 255, 1)",
                        rounded: "10px",
                        p: '10px 15px',
                        boxShadow: '0 5px 15px rgba(0,0,0,.5)',
                    })}
                >
                    <h4>title</h4>
                </div>
            </div>
        </Show>
    );
};

export default FirstModal;
