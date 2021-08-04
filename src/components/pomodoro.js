import React, {useState, useEffect} from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export default function Pomodoro() {
    //initial state, function changing the state
    const[minutes, setMinutes] = useState(5);
    const[seconds, setSeconds] = useState(0);
    //const[session, setSession] = useState('focus');
    const[isIntervalActive, setIsIntervalActive] = useState(false)
    const[countdown, setCountdown] = useState(false)

    // const[session, setSession] = useState("focus");
    //const[displayMessage, setDisplayMessage] = useState(false);
      
    useEffect(() => {
        let interval = null;

        if(isIntervalActive){
         interval = setInterval(() => {
         console.log("interval triggered")
        
            if(seconds === 0) {
                if (minutes !== 0) {
                  setSeconds(59);
                  setMinutes(minutes - 1);
                } else {
        
                  setSeconds(seconds);
                  setMinutes(minutes);
                  //setDisplayMessage(!displayMessage);
                }
              } else {
                setSeconds(seconds - 1);
              }
              //stop countdown on 00:00
              if(isIntervalActive && countdown && minutes === 0 && seconds < 0) {
                setIsIntervalActive(false)
                setCountdown(false)
                clearInterval(interval)
                }
              
            }, 1000);} else {
                setIsIntervalActive(false)
            }

           
          
         return () => clearInterval(interval)

         
          }, [ isIntervalActive, minutes, seconds]);
        
        function handleClick() {
            console.log("Button Clicked")
            setIsIntervalActive(true)
            setCountdown(true);

            if(isIntervalActive && countdown){
                setIsIntervalActive(false)
                setCountdown(false)
            }
        
        }
        function formatTime() {
            let formatMin = minutes < 10 ? `0${minutes}` : minutes;
            let formatSec = seconds < 10 ? `0${seconds}` : seconds;
            return formatMin + ":" + formatSec;
        }

        function timeInSeconds() {
            console.log(`${minutes * 60}`)
            return `${minutes * 60}`
            
        }
         
        function resetTimer() {
            clearInterval()
            setMinutes(25)
        }

       
// //TODO: try those later once default shit works

    return (
    <section className="pomodoro-timer">
        <div className="timer-wrapper">
            <div className="timer">
                <CountdownCircleTimer
                isPlaying={countdown}
                strokeWidth={4}
                duration={timeInSeconds()}
                size={320}
                colors={'#ea00d9'}>
                    <p>{formatTime()}</p>
                </CountdownCircleTimer>
            </div>
        </div>
        <button className="play-btn" onClick={handleClick}></button>

    </section>
 )
}; 