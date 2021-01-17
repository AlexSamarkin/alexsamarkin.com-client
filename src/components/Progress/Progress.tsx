import React from 'react';

export interface ProgressProps {
    min: number;
    max: number;
    value: number;
    title: string;
}

export const Progress: React.FC<ProgressProps> = (props) => {
    const { min, max, value, title } = props;

    return (
        <div className="progress">
            <div
                style={{ width: `${value}%`, zIndex: 2 }}
                className="progress-bar"
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={min}
                aria-valuemax={max}
            >
                <div className="progress-text">
                    <span>{title}</span>
                    <span>{value}%</span>
                </div>
            </div>
            <div className="progress-text">
                <span>{title}</span>
            </div>
        </div>
    );
};

export default Progress;
