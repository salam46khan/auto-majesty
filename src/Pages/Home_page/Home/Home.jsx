
import Choose from "../Choose/Choose";
import Banner from "../Banner/Banner";

const Home = () => {
    
    return (
        <div>
            {/* banner section here  */}
            <Banner></Banner>

            {/* whoy choose us section */}
            <div id="choose">

            <Choose></Choose>
            </div>
        </div>
    );
};

export default Home;