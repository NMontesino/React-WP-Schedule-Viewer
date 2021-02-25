import React from 'react'
import styled from 'styled-components'


const WeeksLabel = () => 
{

    const WeeksLabel = styled.div`
        height: 5%;
        width: 100%;
        display: flex;
    `
    const Label = styled.div`
        height: 100%;
        width: calc(100% / 7);
        text-align: center;
    `

    return (
        <WeeksLabel>
            <Label>Sunday</Label>
            <Label>Monday</Label>
            <Label>Tuesday</Label>
            <Label>Wednesday</Label>
            <Label>Thursday</Label>
            <Label>Friday</Label>
            <Label>Saturday</Label>
        </WeeksLabel>
    )

}

export default WeeksLabel