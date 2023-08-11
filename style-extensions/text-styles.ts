import { defineTextStyles } from '@pandacss/dev';

const textStyles = defineTextStyles({

    bodyStrong: {
        description: 'The body text style when contrast must be enhanced - used in paragraphs',
        value: {
            fontFamily: 'raleway',
            fontWeight: '700',
            fontSize: '14px',
            lineHeight: '20px',
        },
    },

    lightTouch: {
        description: 'Use this to convey a subtopic light idea.', // TODO: Improve this description
        value: {
            fontFamily: 'raleway',
            fontWeight: '300',
            fontSize: '14px',
            lineHeight: '1.1',
        },
    },
});

export default textStyles;