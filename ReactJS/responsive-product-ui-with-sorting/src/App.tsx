import { useEffect, useState } from "react";
import classes from "./App.module.css";

const App = () => {
  const [products, setProducts] = useState<
    { id: number; title: string; price: number }[] | null
  >(null);
  const [error, setError] = useState(false);
  const [sortType, setSortType] = useState(1); // 1: Ascending, 2: Descending

  useEffect(() => {
    async function fetchProducts() {
      setError(false);
      const res = await fetch("https://dummyjson.com/products");
      if (res.ok) {
        const data = await res.json();
        setProducts(data.products);
      } else {
        setError(true);
      }
    }

    fetchProducts();
  }, []);

  const sortTypeChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = +event.target.value;
    setSortType(value);
    if (products) {
      let sortedProducts = [...products];
      if (value === 1) {
        // Ascending
        sortedProducts.sort((a, b) => a.price - b.price);
      } else {
        // Descending
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      setProducts(sortedProducts);
    }
  };

  const sortChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = +event.target.value;
    if (products) {
      let sortedProducts = [...products];
      if (value === 2) {
        // Alphabetically
        sortedProducts.sort((a, b) => {
          if (sortType === 1) {
            return a.title.split(" ")[0].localeCompare(b.title.split(" ")[0]);
          } else {
            return b.title.split(" ")[0].localeCompare(a.title.split(" ")[0]);
          }
        });
      } else if (value === 3) {
        // Price
        sortedProducts.sort((a, b) => {
          if (sortType === 1) {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });
      } else {
        // No sorting
        sortedProducts = [...products];
      }
      setProducts(sortedProducts);
    }
  };

  return (
    <>
      {error && <div>Something went wrong!!!</div>}
      {!error && products && products.length > 0 && (
        <div className={classes.container}>
          <label htmlFor="sort">Select sorting</label>
          <select name="sort" onChange={sortChangeHandler}>
            <option value={1}>No sorting</option>
            <option value={2}>Alphabetically</option>
            <option value={3}>Price</option>
          </select>
          <label htmlFor="sort-type">sorting type</label>
          <select
            name="sort-type"
            onChange={sortTypeChangeHandler}
            value={sortType}
          >
            <option value={1}>Ascending</option>
            <option value={2}>Descending order</option>
          </select>

          {products.map((product) => (
            <li className={classes.item} key={product.id}>
              {product.title} - ${product.price}
            </li>
          ))}
        </div>
      )}
    </>
  );
};

export default App;
