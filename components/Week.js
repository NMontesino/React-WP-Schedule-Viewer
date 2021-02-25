import React from 'react'
import styled from 'styled-components'

import Day from './Day'


const Week = (props) => 
{

    const Week = styled.div`
        height: calc(100% / ${props.numWeeks});
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid black;
    `

    return (
        <Week>
            <Day events={ props.events } month={ props.month } day={ props.week[0] } />
            <Day events={ props.events } month={ props.month } day={ props.week[1] } />
            <Day events={ props.events } month={ props.month } day={ props.week[2] } />
            <Day events={ props.events } month={ props.month } day={ props.week[3] } />
            <Day events={ props.events } month={ props.month } day={ props.week[4] } />
            <Day events={ props.events } month={ props.month } day={ props.week[5] } />
            <Day events={ props.events } month={ props.month } day={ props.week[6] } />
        </Week>
    )

}

export default Week