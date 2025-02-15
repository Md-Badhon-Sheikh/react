

const Watch = ({watch}) => {
    const{brand, price} = watch;
    return (
        <div>
            <h2 className="text-xl font-semibold">Brand: {brand} </h2>
            <h3>Price: {price} </h3>
        </div>
    );
};

export default Watch;