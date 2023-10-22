
const About = () => {
    return (
        <div className="bg-orange-100">
            <div className="container mx-auto px-3 py-10 flex flex-col md:flex-row justify-around items-center">
                <div className="w-full md:w-2/5">
                    <h2 className="text-4xl font-bold">About Us</h2>
                    <hr className="w-1/2 my-2 border-lime-400" />
                    <p className="text-gray-400 py-3">
                        At Automajesty, we believe that a car is more than just a mode of transportation; it's an expression of your individuality, a symbol of your aspirations, and a source of sheer driving pleasure. We are more than a car selling company; we are the gateway to a world where luxury, quality, and personalized service converge to elevate your automotive experience.
                    </p>
                </div>
                <div className="w-full md:w-2/5">
                    <img className="w-full" src='https://i.ibb.co/mtH1VP3/2023-10-23-00-46-22-removebg-preview.png' alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;