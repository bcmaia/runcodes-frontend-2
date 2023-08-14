import { cva } from "../../styled-system/css";


const runClickable = cva({
    base: {
        boxSizing: 'border-box',
        w: 'fit-content',
        h: 'fit-content',
        
        fontFamily: 'main-font',
        color: 'white',
        lineHeight: '1.5',
        fontWeight: '600',
        
        border: 'solid 1px #354458',
        bgColor: 'rgb(53, 68, 88)',

        cursor: "pointer",
    },

    variants: {
        size: {
            sm: {
                p: '5px 10px',
                fontSize: '12px', 
            },
            md: {
                p: '6px 12px',
                fontSize: '14px',
            },
        },
    },

    defaultVariants: {
        size: 'sm',
    },
});


export default runClickable;