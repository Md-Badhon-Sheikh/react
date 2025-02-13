import { useState } from "react";


const Team = () => {
    const [team, setTeam] = useState(11);

    const handleAdd =() => {

        const newTeam = team + 1;
        setTeam (newTeam);
    }

    const handleRemove =() => {
        const newTeam = team -1;
        setTeam (newTeam);
    }

    
    

    return (
        <div className="border-2 border-red-400 py-4 px-3 rounded-2xl">
            <h3 className="text-2xl">Players: {team} </h3>

            <button className="border-2 p-2 rounded-xl" onClick={handleAdd}>Add</button>

            <button className="border-2 p-2 rounded-xl" onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default Team;