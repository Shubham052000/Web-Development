import { type JSX } from "react";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import OverlayModal from "../components/OverlayModal/OverlayModal";

const map = new Map<number, JSX.Element>([
  [1001, <ImageCarousel />],
  [1002, <OverlayModal />],
]);

export default function fetchComponentById(
  id: string | undefined
): JSX.Element {
  const component = map.get(Number(id));
  return component ?? <div>Component not found</div>;
}
