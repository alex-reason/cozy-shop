import './category-item.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, alt } = category;
  return (
    <div className='category-item'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
        title={alt}
      />
      <div className='category-item__inner'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
