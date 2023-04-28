import { Link } from 'react-router-dom';
import './category-item.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, alt } = category;
  return (
    <div className='category-item'>
      <div
        className='background-image'
        style={{backgroundImage: `url(${imageUrl})`}}
        title={alt}
      />

      <div className='category-item__inner'>
        <Link to={`/shop/${title}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>


    </div>
  );
};

export default CategoryItem;
