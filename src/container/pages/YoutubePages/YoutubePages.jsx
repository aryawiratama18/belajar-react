import React, {Component,Fragment} from 'react';
import YoutubeComp from '../../../component/YoutubeComponent/YoutubeComp'
class YoutubePages extends Component{
    render(){
        return(
            <Fragment>
             <div>
                <p>Youtube Component</p>
                <hr/>
                <YoutubeComp 
                    time="7.12" 
                    title="Ayo makan di gubuk" 
                    desc="20k ditonton. 1 jam yang lalu"/>
                <YoutubeComp 
                    time="10.20" 
                    title="Berenang di sawah" 
                    desc="500M ditonton. 3 hari yang lalu"/>
                <YoutubeComp 
                    time="45.01" 
                    title="Lari pagiku" 
                    desc="20x ditonton. 10 hari yang lalu"/>
                <YoutubeComp 
                    time="6.23" 
                    title="Bersepeda minggu" 
                    desc="6k ditonton. 12 hari yang lalu"/>
                <YoutubeComp />
            </div> 
            </Fragment>
        )
    }
}

export default YoutubePages;