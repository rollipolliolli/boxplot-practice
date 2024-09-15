

// A reusable component that builds a vertical box shape using svg
// Note: numbers here are px, not the real values in the dataset.

type InfoCardProps = {
    min: number;
    q1: number;
    median: number;
    q3: number;
    max: number;

};

export const InfoCard = ({
                                min,
                                q1,
                                median,
                                q3,
                                max,

                            }: InfoCardProps) => {
    return (
        <div>
            <h1>InfoCard</h1>
        </div>
);
};
