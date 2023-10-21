import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ProductItem = ({ product }) => {
    const { name, image, brand, price, type, rating, _id } = product
    return (
        <div className='bg-base-100 overflow-hidden hover:bg-base-200 duration-150 hover:shadow-lg p-4 relative rounded-lg'>
            <div className=''>
                <img className='w-full  rounded-t-lg' src={image ? image : 'https://i.ibb.co/Dr8cBC7/not.png'} alt="" />
            </div>
            <div className='space-y-3 mb-16 mt-4'>
                <h2 className='font-bold text-3xl capitalize text-lime-400'>{name}</h2>
                <p className='font-thin text-4xl text-orange-400'><span className='font-semibold'>Price :</span> {price} tk</p>
                <div className='flex justify-between'>
                    <p className='capitalize'><span className='font-semibold'>Brand :</span> {brand}</p>
                    <p>{rating}</p>
                </div>
                <p><span className='font-semibold'>Type :</span> {type}</p>
            </div>
            <div className='border absolute bottom-0 w-full flex left-0 p-3 justify-between bg-orange-400'>

                <Link to={`/details/${_id}`}>
                    <button className='btn bg-lime-400 hover:bg-lime-200'>Details</button>
                </Link>
                <Link to={`/update/${_id}`}>
                    <button className='btn btn-md bg-lime-400 hover:bg-lime-200'>Update</button>
                </Link>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object
}

export default ProductItem;