import './Country.css';

const Country = ({country}) => {
    const {name, flags} = country;
    return (
        <div className='  grid grid-cols-3 max-w-6xl mx-auto'>
            <div className='border-2 m-5 p-4 max-w-6xl rounded-2xl'>
            <h3 className='font-bold mb-3 text-red-400'>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            </div>
            <div className='border-2 m-5 p-4 max-w-6xl rounded-2xl'>
            <h3 className='font-bold mb-3 text-red-400'>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            </div>
            <div className='border-2 m-5 p-4 max-w-6xl rounded-2xl'>
            <h3 className='font-bold mb-3 text-red-400'>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            </div>
        </div>
    );
};

export default Country;