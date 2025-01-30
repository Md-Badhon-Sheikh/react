export default function Singer({singer}){
    console.log(singer);
    return (
        <div>
            <h1>Name: {singer.name}</h1>
            <p>Age : {singer.age}</p>
        </div>
    )
}