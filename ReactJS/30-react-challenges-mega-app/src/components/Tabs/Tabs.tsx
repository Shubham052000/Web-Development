// Can be passed as props or fetched from an API

import { useState } from "react";

// This is a placeholder for the Tabs array
const TabsProps = [
  { id: 1, title: "Tab 1", content: <p>Content Tab 1</p> },
  { id: 2, title: "Tab 2", content: <p>Content Tab 2</p> },
  { id: 3, title: "Tab 3", content: <p>Content Tab 3</p> },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div id="tabs-container" className="flex width-full justify-around mt-10">
        {TabsProps.map((tab, idx) => (
          <button
            onClick={() => setActiveTab(idx)}
            className="cursor-pointer"
            style={{
              borderBottom: activeTab === idx ? "1px solid white" : "none",
            }}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div
        id="content-container"
        className="w-full border border-gray-200 rounded-3xl p-4 text-center mt-20"
      >
        {TabsProps[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
