import PropTypes from 'prop-types'
const TesCard = ({testi}) => {
    const {image, person, comment} = testi
    return (
        <div className="px-3 hover:shadow-md bg-base-200 rounded-lg py-10  text-center">
            <img className="w-1/4 rounded-full mb-5 mx-auto" src={image} alt="" />
            <p className="text-3xl font-bold text-lime-400">{person}</p>
            <p>{comment}</p>
        </div>
    );
};

TesCard.propTypes ={
    testi: PropTypes.object
}

export default TesCard;