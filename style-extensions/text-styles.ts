import { defineTextStyles } from "@pandacss/dev";

const textStyles = defineTextStyles({
    landingBody: {
        description:
            "Use this style in the landing page for paragraphs.",
        value: {
            fontFamily: "face-font",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0",
        },
    },

    landingSubTitle: {
        description:
            "Use this style in the landing page for sub titles.",
        value: {
            fontFamily: "face-font",
            fontWeight: "500",
            fontSize: "18px",
            lineHeight: "1.5",
            letterSpacing: "0",
        },
    },

    landingBodyStrong: {
        description:
            "Use this style in the landing page for paragraphs when contrast is needed.",
        value: {
            fontFamily: "face-font",
            fontWeight: "700",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0",
        },
    },

    landingLightTouch: {
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
