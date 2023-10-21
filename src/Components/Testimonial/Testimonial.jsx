import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import TesCard from "../TesCard/TesCard";

const Testimonial = () => {
    const {testimonial} = useContext(AuthContext)
    console.log(testimonial);
    return (
        <div className="">
            <div className="container mx-auto px-3 py-10">
                <div className="pb-4 text-center">
                    <h2 className="text-4xl text-lime-400 font-bold">Testimonial</h2>
                    <p className="w-full mx-auto md:w-2/5  my-2">
                        Automajesty was founded with a vision to create a platform that offers more than just a transaction
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    {
                        testimonial.map(testi => <TesCard key={testi.id} testi={testi}></TesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonial;