import { Accessor, Show, children } from "solid-js";
import { css } from "../../../styled-system/css";
import BasicModal from "./BasicModal.component";
import { divider } from "../../../styled-system/patterns";
import { JSXElement } from "solid-js";
import techClickable from "../../recipes/techClickable.recipe";

const termOfUseStrongStyle = css({ textStyle: "landingBodyStrong" });
const termOfUsePStyle = css({ textStyle: "landingBody", mb: "10px" });

const ModelDivider = () => {
    return <div class={divider({ w: "100%", color: "lightgray", h: "1px" })} />;
};

const ModalHeader = (props: {
    title?: string;
    onClose: () => void;
    titleClass?: string;
}) => {
    const titleClass =
        props.titleClass ??
        css({
            display: "flex",
            alignItems: "center",
            textStyle: "landingSubTitle",
            p: "15px",
        });

    return (
        <>
            <h4 class={titleClass}>
                {props.title ?? "Example Title"}
                <button
                    onClick={props.onClose}
                    class={css({
                        ml: "auto",
                        fontWeight: "700",
                        lineHeight: "32px",
                        fontSize: "32px",
                        color: "gray",
                        cursor: "pointer",
                        _hover: { color: "black" },
                    })}
                >
                    ×
                </button>
            </h4>
        </>
    );
};

const ModalBody = (props: { children: JSXElement }) => {
    const c = children(() => props.children);

    return (
        <div
            class={css({
                p: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
            })}
        >
            {c()}
        </div>
    );
};

const RunModal = (props: {
    open: Accessor<boolean>;
    onClose: () => void;
    title?: string;
    titleClass?: string;
    width?: string;
    simpleBody?: boolean;
    children: JSXElement;
}) => {
    const c = children(() => props.children);

    return (
        <BasicModal
            open={props.open}
            onClose={props.onClose}
            width='50%'
            margin='40px'
        >
            {/* Header */}
            <ModalHeader
                onClose={props.onClose}
                title={props.title}
                titleClass={props.titleClass}
            />
            <ModelDivider />

            {/* Body */}
            <Show when={props.simpleBody}> {c()} </Show>
            <Show when={!props.simpleBody}>
                <ModalBody> {c()} </ModalBody>
            </Show>

            <ModelDivider />
            <button
                onClick={props.onClose}
                class={techClickable({ color: "red" })}
            >
                Fechar
            </button>
        </BasicModal>
    );
};

export default RunModal;
