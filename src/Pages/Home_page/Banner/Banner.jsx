import { Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'
import './Banner.css'
import { Fade} from 'react-slideshow-image';
const Banner = () => {
    return (
        <div className='bg-orange-100'>
            <div className='container mx-auto px-3 py-16 flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 md:pl-10 space-y-4'>
                    <h3 className='font-semibold text-2xl'>Hey there!</h3>
                    <h1 className='font-extrabold text-lime-400 text-5xl'>Welcome to <br /> AutoMajesty</h1>
                    <p className='text-xl text-gray-400'>
                        where the world of cars meets luxury, quality, and unmatched customer satisfaction.
                    </p>
                    <Link to={'/about'}><button className='btn bg-lime-400 hover:bg-lime-200' >About Us</button></Link>
                    
                </div>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    <div className='w-full'>
                    <Fade>
                        <div className="each-slide-effect">
                            <div>
                                <img className='w-full' src="https://i.ibb.co/S66nG4v/1-removebg-preview.png" alt="" />
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div >
                                <img className='w-full' src="https://i.ibb.co/4ZqN4Yv/2-removebg-preview.png" alt="" />
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div >
                                <img className='w-full' src="https://i.ibb.co/68m2PpL/3-removebg-preview.png" alt="" />
                            </div>
                        </div>
                    </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;