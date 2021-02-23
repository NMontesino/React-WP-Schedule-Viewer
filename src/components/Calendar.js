import React from 'react'
import styled from 'styled-components'

import WeeksLabel from './WeeksLabel'
import Week from './Week'

const Calendar = () => 
{

    const Calendar = styled.div`
        width: 70%;
        height: 70%;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid black;
    `
    const Weeks = styled.div`
        height: 95%;
        width: 100%;
    `

    return (
        <Calendar>

            <WeeksLabel />
            <Weeks>
                <Week />
                <Week />
                <Week />
                <Week />
                <Week />
            </Weeks>
            
        </Calendar>
    )

}

export default Calendar