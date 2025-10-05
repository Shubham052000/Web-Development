import { useEffect, useState } from "react";

async function fetchProducts(productIds: number[]) {
  const fetchPromises = productIds.map(async (id) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);

    return resp.ok ? resp.json() : null;
  });

  const results = await Promise.all(fetchPromises);

  return results;
}

export default function App() {
  const [cartData, setCartData] = useState<any>([]);
  const [displayData, setDisplayData] = useState<any>([]);

  useEffect(() => {
    async function fetchCart() {
      const resp = await fetch("https://fakestoreapi.com/carts/1");
      if (resp.ok) {
        const cartData = await resp.json();
        setCartData(cartData.products);
      }
    }
    fetchCart();
  }, []);

  useEffect(() => {
    fetchProducts(cartData.map((item: any) => item.productId)).then(
      (result) => {
        console.log(result);
        setDisplayData(result);
      }
    );
  }, [cartData]);
  return (
    <div>
      {displayData.map((item: any) => (
        <li key={item.productId}>
          {`Item: ${item.title}, Price: ${item.price}`}
          <img src={item.image} alt={item.title} width={50} />
        </li>
      ))}
    </div>
  );
}
