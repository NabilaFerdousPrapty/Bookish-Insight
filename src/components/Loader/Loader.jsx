import {CircleLoader} from 'react-spinners'

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <CircleLoader size={100} color='#23BE0A'/>
        </div>
    );
};

export default Loader;