

const Album = ({album}) => {
    console.log(album)
    const {userId, id, title} = album;
    return (
        <div>
            <h2>userId: {userId} </h2>
            <h2>Id: {id} </h2>
            <h2>title: {title} </h2>
        </div>
    );
};

export default Album;