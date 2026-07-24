import { useEffect, useState } from "react";

type SaleItem = {
  id: string;
  title: string;
  timer: number;
};

type Snackbar = {
  item: SaleItem;
  removeItem: (id: string) => void;
};

const Snackbar = ({ item, removeItem }: Snackbar) => {
  const [barTimer, setBarTimer] = useState(item.timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarTimer((prevTimerValue) => {
        if (prevTimerValue > 0) return prevTimerValue - 1;
        else {
          removeItem(item.id);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-between text-white border border-amber-500 p-2 my-4 rounded-md">
        <span>{item.title}</span>
        <span>{barTimer}</span>
        <button onClick={() => removeItem(item.id)}> x </button>
      </div>
    </>
  );
};

const LiveSaleSnackbar = () => {
  const [itemName, setItemName] = useState("");
  const [itemTimer, setItemTimer] = useState(0);
  const [saleItems, setSaleItems] = useState<SaleItem[]>([
    { id: "0101010101", title: "IEMs", timer: 80 },
  ]);

  const addItemHandler = () => {
    if (itemName.trim().length > 0 && itemTimer > 5) {
      const updatedSaleItems = [
        ...saleItems,
        { id: crypto.randomUUID(), title: itemName, timer: itemTimer },
      ];
      setSaleItems(updatedSaleItems);
      setItemName("");
      setItemTimer(0);
    }
  };

  const removeHandler = (id: string) => {
    setSaleItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="my-5 mx-10">
      <div>
        <input
          placeholder="Enter item's name"
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="border border-blue-300 rounded-md text-xl py-1 px-2 mr-5"
        />
        <input
          placeholder="Enter time in seconds"
          type="number"
          value={itemTimer}
          onChange={(e) => setItemTimer(Number(e.target.value))}
          className="border border-blue-300 rounded-md text-xl py-1 px-2 mr-5"
        />
        <button
          className="text-white bg-blue-500 rounded-md py-2 px-4 hover:bg-blue-800 cursor-pointer"
          onClick={addItemHandler}
        >
          Add item
        </button>
      </div>
      {saleItems
        .sort((a, b) => a.timer - b.timer)
        .map((item) => {
          return (
            <Snackbar
              key={item.id}
              removeItem={(id: string) => removeHandler(id)}
              item={{ id: item.id, timer: item.timer, title: item.title }}
            />
          );
        })}
    </div>
  );
};

export default LiveSaleSnackbar;
