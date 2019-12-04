import React , {useState , useRef} from 'react';

export const Timer = () => {
    const[seconds , setSeconds] = useState(0)
    const[minutes , setMinutes] = useState(0)
    const timeout = useRef(null)

const restart = () =>{
    clearTimeout(timeout.current)
    setSeconds(0)
    setMinutes(0)
}

timeout.current = setTimeout(() => {
    if(seconds == 59){
        setSeconds(0)
        setMinutes(minutes + 1)
    }
    else{
        setSeconds(seconds + 1)
}
 } , 100 )

return(
    <div style = {{margin: '20%'}}>
    <h2>timer:</h2>
    <h3>{minutes}:{seconds}</h3>
    <button onClick = {restart}> restart</button>
    </div>
)
}
