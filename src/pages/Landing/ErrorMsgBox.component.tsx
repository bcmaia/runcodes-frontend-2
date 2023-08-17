import { JSXElement, Show, children } from "solid-js";
import { RecipeVariantProps, cva } from "../../../styled-system/css";

const errorMsgBox = cva({
    base: {
        bg: "red",
        rounded: "5px",
        p: '15px',
        mt: '20px',
        mb: '20px',
        borderWidth: '1px',
        borderStyle: 'solid',
        textStyle: 'landingBody',
    },
    variants: {
        color: {
            red: {
                bg: 'linear-gradient(to bottom,#f2dede 0,#e7c3c3 100%)',
                borderColor: '#dca7a7',
                color: '#a94442',
            },
            blue: {
                bg: 'linear-gradient(to bottom,#d9edf7 0,#b9def0 100%)',
                borderColor: '#9acfea',
                color: '#31708f',
            },
        },
    },
    defaultVariants: {
        color: "red",
    },
});

type errorMsgBoxPropType = RecipeVariantProps<typeof errorMsgBox> & {
    show: boolean;
    color?: string;
    children: JSXElement;
};

const ErrorMsgBox = (props: errorMsgBoxPropType) => {
    const c = children(() => props.children);

    return (
        <Show when={props.show}>
            <div class={errorMsgBox({ color: props.color ?? "red" })}>
                {c()}
            </div>
        </Show>
    );
};

export default ErrorMsgBox;
