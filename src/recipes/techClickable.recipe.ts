import { cva } from '../../styled-system/css';

const techClickable = cva({
    base: {
        textAlign: 'center',

        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',

        fontFamily: 'raleway',
        fontSize: '18px',
        lineHeight: '1.33',

        borderStyle: 'solid',
        textTransform: 'uppercase',

        p: '10px 16px',

        transition: 'all 200ms ease',
    },
    variants: {
        weight: {
            extralight: { fontWeight: '200', borderWidth: '1.5px',},
            semibold: { fontWeight: '600', borderWidth: '2px',},
        },
        color: {
            red: {
                color: 'rgb(228, 95, 86, 1)', 
                borderColor: 'rgb(228, 95, 86, 1)',
                bgColor: 'rgb(228, 95, 86, 0)', 
                _hover: {
                    color: 'white', 
                    bgColor: 'rgb(228, 95, 86, 1)'
                },
            },
            white: {
                color: 'rgb(255, 255, 255, 1)', 
                borderColor: 'rgb(255, 255, 255, 1)',
                bgColor: 'rgb(255, 255, 255, 0)', 
                _hover: {
                    color: 'rgb(16, 16, 16, 1)', 
                    bgColor: 'rgb(255, 255, 255, 1)'
                },
            },
        },
        width: {
            fit: {width: 'fit'},
            auto: {width: 'auto'},
        },
    },
    defaultVariants: {
        weight: 'semibold',
        color: 'red',
        width: 'fit',
    },
});

export default techClickable;