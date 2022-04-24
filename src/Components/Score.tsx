import React from "react";
import ReactSpeedometer from "react-d3-speedometer"

export default function Score (): JSX.Element {
    const value = 777
    return (
        <ReactSpeedometer
            maxValue={850}
            width={500}
            needleHeightRatio={0.7}
            value={value}
            currentValueText="Drive Score"
            customSegmentLabels={[
                {
                text: 'Very Bad',
                color: '#555',
                },
                {
                text: 'Bad',
                color: '#555',
                },
                {
                text: 'Ok',
                color: '#555',
                fontSize: '19px',
                },
                {
                text: 'Good',
                color: '#555',
                },
                {
                text: 'Very Good',
                color: '#555',
                },
            ]}
            ringWidth={47}
            needleTransitionDuration={1500}
            needleColor={'#000000'}
            textColor={'#000000'}
        />
    )
};