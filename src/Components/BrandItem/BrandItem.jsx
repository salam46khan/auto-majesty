import PropTypes from 'prop-types';
const BrandItem = ({brand}) => {
    console.log(brand);

    const handleBrand =(id) =>{
        console.log(id);
    }
    
    return (
        <div onClick={()=>handleBrand(`${brand.id}`)} className='hover:shadow-lg shadow-inner  rounded-lg text-center p-5'>   
            <img className='w-2/4 mx-auto' src={brand.image} alt="" />
            <h4 className='text-2xl uppercase font-semibold'>{brand.brand}</h4>
        </div>
    );
};
BrandItem.propTypes = {
    brand: PropTypes.object
}

export default BrandItem;