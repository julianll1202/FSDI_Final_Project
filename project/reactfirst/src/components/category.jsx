import './category.css'

function CategoryCard (props) {
    return (
        <div className='category'>
            <img src={"/img/"+props.data.image} alt="" />
            <h4>{props.data.name}</h4>
        </div>
    )
};

export default CategoryCard;