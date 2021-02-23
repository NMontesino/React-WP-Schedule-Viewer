import React, { useState, useEffect } from 'react'
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

    const [data, setData] = useState({})
    useEffect(() => 
    {

        fetch(`https://central.wordcamp.org/wp-json/wp/v2/wordcamps`)
        .then(res => res.json())
        .then((resData) => {setData(resData)})

    }, [])

    return (
        <App>
            <div><h1>February</h1></div>
            <Calendar></Calendar>
            <div></div>
        </App>
    )

}

export default App
