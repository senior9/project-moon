
import { Outlet } from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Outlet/>
        </div>
    );
};

export default Home;