import { useState, useCallback } from "react";
import { List, AutoSizer } from "react-virtualized";

function generateList(size) {
  return Array.from({ length: size }, (_, i) => `Item ${i + 1}`);
}

const VirtualizedList = () => {
  const [item, setItems] = useState([]);
  const [triggerRender, setTriggerRender] = useState(false);

  const handleGenerateList = () => {
    setItems(generateList(1000000)); // Generates 10,000 items
    setTimeout(() => {
      setTriggerRender(!triggerRender); // Trigger a re-render after 1 second
    }, 1000);
  };

  const rowRenderer = useCallback(
    ({ key, index, style }) => {
      return (
        <div key={key} style={style}>
          {item[index]}
        </div>
      );
    },
    [item]
  );
  return (
    <div>
      <button onClick={handleGenerateList}>Generate List</button>
      <div style={{ width: "100%", height: "100vh" }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowCount={item.length}
              rowHeight={30}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default VirtualizedList;
