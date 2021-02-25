import React, { useEffect } from 'react'
import { getMonth, getDate } from 'date-fns'
import styled from 'styled-components'

const Day = (props) =>
{

    let Day = styled.div`
        width: calc(100% / 7);
        height: 100%;
        border-left: 1px solid black;
        border-right: 1px solid black;
    `
    const Event = styled.div`
        margin-top: 5%;
        width: 100%;
        text-align: center;
        font-size: medium;
    `
    const Hashtag = styled.div`
        width: 100%;
        text-align: center;
        font-size: small;
    `

    let dayFeatures = {}

    if (props.events[0])
    {
        props.events.forEach(event => 
        {

            if (getMonth(new Date(event.date)) === getMonth(props.month) && getDate(new Date(event.date)) === getDate(props.day))
            {
                dayFeatures.title = event.title.rendered
                dayFeatures.link = event.URL
                dayFeatures.hashtag = event["WordCamp Hashtag"]
                Day = styled.div`
                    width: calc(100% / 7);
                    height: 100%;
                    border: 3px solid red;
                    box-sizing: border-box;
                `
            }
            
        })
    }

    return (
        <Day>
            <div>{ getMonth(props.month) === getMonth(props.day) ? `${getDate(props.day)}` : null }</div>
            <Event>{ getMonth(props.month) === getMonth(props.day) ? dayFeatures.title ? <a href={ dayFeatures.link }>{ dayFeatures.title }</a> : 'No events' : null }</Event>
            <Hashtag>{ getMonth(props.month) === getMonth(props.day) ? dayFeatures.hashtag ? <i>{ dayFeatures.hashtag }</i> : null : null }</Hashtag>
        </Day>
    )

}

export default Day