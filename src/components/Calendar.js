import React from 'react'
import { getMonth } from 'date-fns'
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

    const hasFiveWeeks = (getMonth(props.month) !== getMonth(props.matrix[5][0]) && getMonth(props.month) !== getMonth(props.matrix[5][6]))
    const hasFourWeeks = (getMonth(props.month) !== getMonth(props.matrix[4][0]) && getMonth(props.month) !== getMonth(props.matrix[4][6]))
    const numOfWeeks = hasFourWeeks ? 4 : hasFiveWeeks ? 5 : 6

    return (
        <Calendar>
            <WeeksLabel />
            <Weeks>
                <Week events={ props.events } month={ props.month } week={ props.matrix[0] } numWeeks={ numOfWeeks } />
                <Week events={ props.events } month={ props.month } week={ props.matrix[1] } numWeeks={ numOfWeeks } />
                <Week events={ props.events } month={ props.month } week={ props.matrix[2] } numWeeks={ numOfWeeks } />
                <Week events={ props.events } month={ props.month } week={ props.matrix[3] } numWeeks={ numOfWeeks } />
                {!hasFourWeeks ? <Week events={ props.events } month={ props.month } week={ props.matrix[4] } numWeeks={ numOfWeeks } /> : null}
                {!(hasFourWeeks || hasFiveWeeks) ? <Week events={ props.events } month={ props.month } week={ props.matrix[5] } numWeeks={ numOfWeeks } /> : null}
            </Weeks>
        </Calendar>
    )

}

export default Calendar