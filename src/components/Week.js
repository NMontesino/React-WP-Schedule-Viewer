import React from 'react'
import styled from 'styled-components'

import Day from './Day'


const Week = (props) => 
{

    const Week = styled.div`
        height: calc(100% / 6);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid black;
    `

    return (
        <Week>
            <Day day={ props.week[0] } />
            <Day day={ props.week[1] } />
            <Day day={ props.week[2] } />
            <Day day={ props.week[3] } />
            <Day day={ props.week[4] } />
            <Day day={ props.week[5] } />
            <Day day={ props.week[6] } />
        </Week>
    )

}

export default Week