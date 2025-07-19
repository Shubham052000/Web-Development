import { type JSX } from "react";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";

const map = new Map<number, JSX.Element>([[1001, <ImageCarousel />]]);

export default function fetchComponentById(
  id: string | undefined
): JSX.Element {
  const component = map.get(Number(id));
  return component ?? <div>Component not found</div>;
}
