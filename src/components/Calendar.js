import React from 'react'
import styled from 'styled-components'

import WeeksLabel from './WeeksLabel'
import Week from './Week'

const Calendar = (props) => 
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
                <Week week={ props.matrix[0] } />
                <Week week={ props.matrix[1] } />
                <Week week={ props.matrix[2] } />
                <Week week={ props.matrix[3] } />
                <Week week={ props.matrix[4] } />
                <Week week={ props.matrix[5] } />
            </Weeks>
        </Calendar>
    )

}

export default Calendar