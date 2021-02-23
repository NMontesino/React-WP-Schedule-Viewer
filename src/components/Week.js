import React from 'react'
import styled from 'styled-components'

import Day from './Day'


const Week = () => 
{

    const Week = styled.div`
        height: 20%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid black;
    `

    return (
        <Week>
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
            <Day />
        </Week>
    )

}

export default Week