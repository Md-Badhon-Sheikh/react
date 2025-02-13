import { useEffect, useState } from "react";
import Friend from "./Friend";

const Friends = () => {

    const [friends, setFriends] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setFriends(data))
        // console.log(friends);
    }, [])
    return (
        <div>
            <h1>Friends: {friends.length} </h1>

        {
            friends.map(friend => <Friend friend={friend}> </Friend> )
        }

        </div>
    );
};

export default Friends;