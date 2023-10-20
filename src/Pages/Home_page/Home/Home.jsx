
import Choose from "../Choose/Choose";
import Banner from "../Banner/Banner";
import Brand from "../Brand/Brand";

const Home = () => {
    
    return (
        <div>
            {/* banner section here  */}
            <Banner></Banner>

            {/* whoy choose us section */}
            <Choose></Choose>
            
            {/* brand section here */}
            <Brand></Brand>
        </div>
    );
};

export default Home;