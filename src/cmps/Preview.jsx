import React from 'react'
import moment from 'moment'


export function Preview({ day }) {

    const getImg = (iconNum) => {
            if (iconNum < 10) iconNum = '0' + iconNum
            return `https://developer.accuweather.com/sites/default/files/${iconNum}-s.png`
        }
        
    
    return (
        <div className="preview-container flex column">
            <div className="img-container">
            <img src={getImg(day.Day.Icon)} alt="" />
            </div>
            <div className="info-container">
            <h3>{moment(new Date(day.Date)).format('L')}</h3>
            <p className="description">{day.Day.IconPhrase}</p>
            <p>{day.Temperature.Minimum.Value}°-{day.Temperature.Maximum.Value}°</p>
            <a href={day.Link} target="_blank" rel="noopener noreferrer"> <i className="fas fa-info-circle"></i> Read More</a>
            </div>
        </div>
    )
}

