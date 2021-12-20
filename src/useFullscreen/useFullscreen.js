import React, {useRef} from 'react'


const useFullscreen = (callback) => {

    const element = useRef();

    const runCb = isFull => {
        if(callback && typeof callback === "function"){
            callback(isFull)
        }
    }

    const triggerFull = () => {
        if(element.current){
            if(element.current.requestFullscreen){
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullScreen){
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen){
                element.current.webkitRequestFullscreen();
            } else if (element.current.mozRequestFullScreen){
                element.current.mozRequestFullScreen();
            }
            runCb(true)
           
        }
    }
        
    

    const exitFull = () => {
        if(element.current){
            if(element.current.requestFullscreen){
                element.current.requestFullscreen();
            } else if (element.current.mozRequestFullScreen){
                element.current.mozRequestFullScreen();
            } else if (element.current.webkitRequestFullscreen){
                element.current.webkitRequestFullscreen();
            } else if (element.current.mozRequestFullScreen){
                element.current.mozRequestFullScreen();
            }
            runCb(false)
           
        }
    }

    return (
        <div style= {{ height : "1000vh"}}>
            <div  ref = {element}>
                <img src= {image} ></img>
                <button onClick = {triggerFull} >Make fullscreen </button>
            </div>
            <button onClick = {exitFull} >Make fullscreen </button>
        </div>
    )
}

export default useFullscreen
