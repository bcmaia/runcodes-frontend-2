import { cva } from "../../styled-system/css";

export const link = cva({
    base: {
        cursor: 'pointer',
        _hover: {
            textDecorationLine: 'underline',
            
        },
    },
    
    variants: {
        color: {
            blue: {color: '#337ab7',},
            white: {color: 'white',},
        },

        hoverColor: {
            darkBlue: {
                _hover: {color: '#135a97'},
            },
            white: {
                _hover: {color: 'white'},
            },
        },
    },

    defaultVariants: {
        color: 'blue',
        hoverColor: 'darkBlue',
    },
});