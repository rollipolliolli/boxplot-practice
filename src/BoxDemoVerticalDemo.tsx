import { VerticalBox } from "./VerticalBox";

export const BoxDemoVerticalDemo = ({ width = 700, height = 400 }) => (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
        <VerticalBox
            min={10}
            q1={200}
            median={150}
            q3={50}
            max={100}
            width={100}
            stroke="#cb1dd1"
            fill={"#ead4f5"}
        />
    </svg>
);