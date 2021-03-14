import React from 'react'
import "./YoutubeComp.css"
const YoutubeComp = (props)=>{
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="http://m.ayosemarang.com/images-semarang/post/articles/2020/01/14/50631/warteg.jpg" alt=""/>
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time: '00.00',
    title: 'Ini judul default',
    desc: 'Ini deskripsi default'
}

export default YoutubeComp;