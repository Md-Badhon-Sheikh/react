import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(10);

    const handelAdd = () =>{
        const newTeam = team +1;
        setTeam(newTeam);
    }

    const teamStyle ={
        border: '2px solid purple',
        margin: '12px',
        borderRadius: '12px',
        padding: '15px'
    }
    return(
        <div style={teamStyle}>
            <h2>Players: {team} </h2>
            <button onClick={handelAdd} >Add</button>
        </div>
    )
}