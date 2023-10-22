import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BrandItem = ({brand}) => {
    
    return (
        <Link to={`product/${brand.brand}`} className='hover:shadow-lg shadow-inner cursor-pointer rounded-lg text-center p-5'>   
            <img className='w-2/4 mx-auto' src={brand.image} alt="" />
            <h4 className='text-2xl uppercase font-semibold'>{brand.brand}</h4>
        </Link>
    );
};
BrandItem.propTypes = {
    brand: PropTypes.object
}

export default BrandItem;