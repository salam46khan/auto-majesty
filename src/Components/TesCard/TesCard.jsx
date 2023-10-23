import PropTypes from 'prop-types'
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi'
const TesCard = ({ testi }) => {
    const { image, person, comment } = testi
    return (
        <div className="px-5 hover:shadow-md bg-base-100 border rounded-lg py-10  text-center">
            <img className="w-1/4 rounded-full mb-5 mx-auto" src={image} alt="" />
            <p className="text-3xl font-bold text-lime-400">{person}</p>
            <div className='text-center pt-5 pb-3'>
                <BiSolidQuoteLeft className='mx-auto text-2xl'></BiSolidQuoteLeft>
                <p className='py-2'>{comment}</p>
                <BiSolidQuoteRight  className='mx-auto text-2xl'></BiSolidQuoteRight>
            </div>
        </div>
    );
};

TesCard.propTypes = {
    testi: PropTypes.object
}

export default TesCard;