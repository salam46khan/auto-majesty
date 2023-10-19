import { FaRegGem, } from 'react-icons/fa';
import { RiServiceLine, RiVipCrownLine } from 'react-icons/ri'
const Choose = () => {
    return (
        <div className="">
            <div className="container mx-auto px-3 py-10">
                <div className="pb-4 text-center">
                    <h2 className="text-4xl text-lime-400 font-bold">Why Choose Us</h2>
                    <p className="w-full mx-auto md:w-2/5  my-2">
                        Automajesty was founded with a vision to create a platform that offers more than just a transaction
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 py-3 gap-3">
                    <div className="px-2 text-center bg-base-100 hover:drop-shadow-md py-5 border rounded">
                        <div className='h-24 w-24 mx-auto rounded-full flex border-lime-400 justify-center items-center text-lime-400 border-4'>
                            <FaRegGem className='text-6xl'></FaRegGem>
                        </div>
                        <h3 className='font-semibold text-2xl'>Quality</h3>
                        <p className='text-gray-400'>We pride ourselves on curating a selection of vehicles that exude quality, luxury, and performance</p>
                    </div>
                    <div className="px-2 text-center bg-base-100 hover:drop-shadow-md py-5 border rounded">
                        <div className='h-24 w-24 mx-auto rounded-full flex border-lime-400 justify-center items-center text-lime-400 border-4'>
                            
                            <RiVipCrownLine className='text-6xl'></RiVipCrownLine>
                        </div>
                        <h3 className='font-semibold text-2xl'>Luxury</h3>
                        <p className='text-gray-400'>We specialize in luxury and high-end vehicles that showcase the epitome of automotive engineering</p>
                    </div>
                    <div className="px-2 text-center bg-base-100 hover:drop-shadow-md py-5 border rounded">
                        <div className='h-24 w-24 mx-auto rounded-full flex border-lime-400 justify-center items-center text-lime-400 border-4'>
                            
                            <RiServiceLine className='text-6xl'></RiServiceLine>
                        </div>
                        <h3 className='font-semibold text-2xl'>Personalized Service</h3>
                        <p className='text-gray-400'>We understand that every customer is unique, and your automotive aspirations are distinct.</p>
                    </div>
                    <div className="px-2 text-center bg-base-100 hover:drop-shadow-md py-5 border rounded">
                        <div className='h-24 w-24 mx-auto rounded-full flex border-lime-400 justify-center items-center text-lime-400 border-4'>
                            
                            <RiServiceLine className='text-6xl'></RiServiceLine>
                        </div>
                        <h3 className='font-semibold text-2xl'>Transparency</h3>
                        <p className='text-gray-400'> At Automajesty, transparency is our policy.</p>
                    </div>
                    
                    

                </div>
            </div>
        </div>
    );
};

export default Choose;