

const Friend = ({friend}) => {

    const {name, email} = friend;
    return (
        <div className="border-2 m-2 rounded-xl p-2 ">
            <h4>Name: {name} </h4>
            <h4>Email: {email} </h4>
        </div>
    );
};

export default Friend;