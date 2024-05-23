import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  {
    id: 110,
    price: 6,
    title: "Music",
    description: "Music Book to learn instruments"
  },
  {
    id: 210,
    price: 10,
    title: "Sport",
    description: "Sport book to start with your passion"
  }
]

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((obj) => {
          return <ProductItem
            id={obj.id}
            key={obj.id}
            {...obj}
          />
        })}
      </ul>
    </section>
  );
};

export default Products;
