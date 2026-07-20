import { useEffect, useState } from "react";

type CartProducts = { productId: number; quantity: number }[];
type ProductDetail = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type CartItem = { id: number; title: string; desc: string; img: string };

const FetchProducts = () => {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchProductDetails = async (id: number) => {
      const resp = await fetch("https://fakestoreapi.com/products/" + id);
      if (resp.ok) {
        const data: ProductDetail = await resp.json();
        return data;
      }
    };

    const fetchProductsFromCart = async () => {
      const resp = await fetch("https://fakestoreapi.com/carts/2");
      if (resp.ok) {
        const data: {
          id: number;
          products: CartProducts;
        } = await resp.json();
        const promiseArray = data.products.map((product) =>
          fetchProductDetails(product.productId),
        );
        const fetchedProductDetails = await Promise.allSettled(promiseArray);

        const items = fetchedProductDetails
          .map((product) => {
            if (product.status === "fulfilled" && product.value) {
              return {
                id: product.value.id,
                title: product.value.title,
                desc: product.value.description,
                img: product.value.image,
              } as CartItem;
            }
            return null;
          })
          .filter((i): i is CartItem => i !== null)
          .sort((a, b) => a.id - b.id);

        setCartProducts(items);
      }
    };

    fetchProductsFromCart();
  }, []);

  return (
    <ul className="flex flex-wrap gap-4">
      {cartProducts.map((item: any) => (
        <li key={item.id} className="border-2 border-amber-50 flex flex-col">
          <img src={item.img} alt={item.title} className="w-28" />
          <h2 className="text-lg">{item.title}</h2>
          <p className="text-sm">{item.desc}</p>
        </li>
      ))}
    </ul>
  );
};

export default FetchProducts;
