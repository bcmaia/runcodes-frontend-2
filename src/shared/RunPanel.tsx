import { JSXElement, children } from "solid-js";
import { css } from "../../styled-system/css";


const RunPanel = (props : {
    title?: string, 
    children?: JSXElement, 
    width?: string, 
    margin?: string,
}) => {
    const c = children(() => props.children ?? (<></>));
    return (
        <div class={css({
            w: props.width ?? 'auto',
            m: props.margin ?? '0',
        })}>

            <div class={css({
                w: '100%',
                p: '10px 15px',
                bgColor: 'rgb(244,244,244)',
                p: '10px 15px',
            })}> 
                <h3 class={css({
                    textStyle: 'runTextH3',
                })}>
                    {props.title ?? ''}
                </h3>
            </div>

            <div class={css({
                w: '100%',
                textStyle: 'runTextP',
                bg: 'blue',
                bgColor: 'rgb(255,255,255)',
                p: '10px 15px',
            })}>
                {c()}
            </div>

        </div>
    );
};

export default RunPanel;
