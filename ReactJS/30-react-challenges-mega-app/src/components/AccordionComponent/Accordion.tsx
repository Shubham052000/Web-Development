import { useState } from "react";

//this sample data can be passed as props or fetched from an API
const data = {
  accordionHeader: "Accordion Header",
  accordionContent:
    "This is the content of the accordion. It can be expanded or collapsed.",
  accordionFooter: "Footer content here",
  expanded: false,
};

const Accordion = () => {
  const { accordionHeader, accordionContent, accordionFooter, expanded } = data;
  const [isOpen, setIsOpen] = useState(expanded);
  return (
    <>
      <div className="bg-white mx-auto max-w-xl shadow-lg my-4 text-black rounded-lg transition-transform duration-400">
        <header className="p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">{accordionHeader}</h2>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Collapse" : "Expand"}
          </button>
        </header>
        <div
          className={`transition-all duration-500 overflow-hidden`}
          style={{
            maxHeight: isOpen ? "500px" : "0px",
            opacity: isOpen ? 1 : 0,
          }}
        >
          <main className="p-4">
            <p>{accordionContent}</p>
          </main>
          <footer className="bg-gray-200 p-4 rounded-b-xl">
            <p>{accordionFooter}</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Accordion;
