import ReactDOM from "react-dom";
import { VerticalBox } from "./VerticalBox";
import {InfoCard} from "./InfoCard";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <svg  width={400} height={400}>
        <VerticalBox
            width={200}
            q1={350}
            median={250}
            q3={220}
            min={400}
            max={0}
            stroke="black"
            fill={"navy"}
        />
    </svg>,

    rootElement);