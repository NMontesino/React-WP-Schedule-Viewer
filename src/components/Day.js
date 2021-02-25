import React from 'react'
import styled from 'styled-components'

const Day = (props) =>
{

    const Day = styled.div`
        width: auto;
        flex-grow: 1;
        height: 100%;
        border-left: 1px solid black;
        border-right: 1px solid black;
    `
    const Event = styled.div`
        margin-top: 5%;
        width: 100%;
        text-align: center;
        font-size: large;
    `
    const Location = styled.div`
        width: 100%;
        text-align: center;
        font-size: small;
    `

    return (
        <Day>
            <div>{ `${props.day}` }</div>
            <Event>Event name here</Event>
            <Location>Location, US</Location>
        </Day>
    )

}

export default Day