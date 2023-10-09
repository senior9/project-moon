
import { Outlet } from 'react-router-dom';
import Banner from '../../Shared/Banner/Banner';
import PopularItem from '../../Shared/PopularItem/PopularItem';

const Home = () => {
    return (
        <div>
            <Banner/>
            <PopularItem/>
            <Outlet/>
        </div>
    );
};

export default Home;