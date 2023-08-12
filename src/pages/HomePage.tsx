import { css } from "../../styled-system/css";
import RunHeader from "../shared/RunHeader";
import RunPanel from "../shared/RunPanel";

const HomePage = () => {
    return (
        <div class={css({
            minW: '100wh',
            minH: '100vh',
            bgColor: 'rgb(220,220,220)',
        })}>
            <RunHeader />
            <RunPanel 
                title="Aaaaaaaa"
                width=""
                margin="20px"
            >
                <p>bbbbbbbb</p>
            </RunPanel>
        </div>
    );
};

export default HomePage;
