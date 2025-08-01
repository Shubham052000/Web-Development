import { type JSX } from "react";
import ImageCarousel from "../components/ImageCarousel/ImageCarousel";
import OverlayModal from "../components/OverlayModal/OverlayModal";
import UseFetchComponent from "../components/UseFetchComponent/UseFetchComponent";
import Accordion from "../components/AccordionComponent/Accordion";
import Tabs from "../components/Tabs/Tabs";
import ToastNotification from "../components/ToastNotification/ToastNotification";
import { ToastProvider } from "../components/ToastNotification/ToastContext";

const map = new Map<number, JSX.Element>([
  [1001, <ImageCarousel />],
  [1002, <OverlayModal />],
  [1003, <Accordion />],
  [1004, <Tabs />],
  [
    1005,
    <ToastProvider>
      <ToastNotification />
    </ToastProvider>,
  ],
  [2001, <UseFetchComponent />],
]);

export default function fetchComponentById(
  id: string | undefined
): JSX.Element {
  const component = map.get(Number(id));
  return component ?? <div>Component not found</div>;
}
