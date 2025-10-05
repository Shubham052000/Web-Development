import { useEffect, useState } from "react";
import TypeAheadDropdown from "./components/TypeAheadDropdown";

const optionsOne = [
  "Apple",
  "Application",
  "Banana",
  "Bandana",
  "Cherry",
  "Character",
  "Dog",
  "Dogma",
];

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("https://fakestoreapi.com/products?sort=asc");
      if (resp.ok) {
        const data = await resp.json();
        setData(
          data.map((item: any) => ({
            label: item.title,
            value: item.id,
          }))
        );
      } else {
        console.error("Failed to fetch data");
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <TypeAheadDropdown options={optionsOne} />
      <br />
      <br />
      <br />
      <br />
      <br />

      <TypeAheadDropdown options={data} />
    </>
  );
}
