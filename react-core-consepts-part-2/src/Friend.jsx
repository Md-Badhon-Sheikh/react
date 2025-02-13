

const Friend = ({friend}) => {
    const {name, email} = friend;
    return (
        <div style={{border:'2px solid tomato margin: 2px'}}>
            <h3>Name: {name} </h3>
            <h4>Email: {email} </h4>
        </div>
    );
};

export default Friend;