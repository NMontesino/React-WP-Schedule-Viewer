import React, { useState, useEffect } from 'react'
import { format, subMonths, addMonths, getYear, getMonth, addDays, startOfWeek } from 'date-fns'
import styled from 'styled-components'

import Calendar from './Calendar'


const App = () => 
{

    const App = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `
    const SelectMonth = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 40%;
        font-weight: 700;
    `
    const Toggle = styled.span`
        font-weight: 900;
    `

    const [selectedMonth, setSelectedMonth] = useState(new Date())

    const [data, setData] = useState([])
    useEffect(() => 
    {

        fetch(`https://central.wordcamp.org/wp-json/wp/v2/wordcamps`)
        .then(res => res.json())
        .then((resData) => {setData(resData)})

    }, [])

    const lastMonth = () => 
    {
        setSelectedMonth(subMonths(selectedMonth, 1))
    }
    const nextMonth = () => 
    {
        setSelectedMonth(addMonths(selectedMonth, 1))
    }

    const createMatrix = ({ year, month, weekStartsOn } = 
    {
        year: getYear(selectedMonth),
        month: getMonth(selectedMonth),
        weekStartsOn: 0
    }) => 
    {
        const matrix = []
        const date = new Date(year, month)
        let currDate = startOfWeek(date, { weekStartsOn })
      
        for (let i = 0; i < 6; i++)
        {
          const week = []
          for (let j = 0; j < 7; j++) 
          {
            week.push(currDate)
            currDate = addDays(currDate, 1)
          }
      
          matrix.push(week)
        }
      
        return matrix
    }

    const dateFormat = 'MMMM yyyy'

    return (
        <App>
            <SelectMonth>
                <Toggle><b onClick={ lastMonth }>{'<'}</b></Toggle>
                <h1>{format(selectedMonth, dateFormat)}</h1>
                <Toggle><b onClick={ nextMonth }>{'>'}</b></Toggle>
            </SelectMonth>
            <Calendar month={ selectedMonth } matrix={ createMatrix() } events={ data } ></Calendar>
            <div></div>
        </App>
    )

}

export default App
