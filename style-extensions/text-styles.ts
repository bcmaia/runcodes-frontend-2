import { defineTextStyles } from "@pandacss/dev";

const textStyles = defineTextStyles({
    bodyStrong: {
        description:
            "The body text style when contrast must be enhanced - used in paragraphs",
        value: {
            fontFamily: "face-font",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0",
        },
    },

    lightTouch: {
        description: "Use this to convey a subtopic light idea.", // TODO: Improve this description
        value: {
            fontFamily: "face-font",
            fontWeight: "300",
            fontSize: "14px",
            lineHeight: "1.1",
            letterSpacing: "0",
        },
    },

    runTextH3: {
        description: "Use this to make a simple title inside the run codes app",
        value: {
            fontFamily: "main-font",
            fontWeight: "600",
            fontSize: "16px",
            letterSpacing: "0",
            lineHeight: "1.1",
        },
    },

    runTextP: {
        description:
            "Use this to make a simple paragraph inside the run codes app",
        value: {
            fontFamily: "main-font",
            fontWeight: "600",
            fontSize: "12px",
            lineHeight: "17.15px",
            letterSpacing: "0",
        },
    },
});

export default textStyles;
