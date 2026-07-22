import { useState } from "react";

const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setItem = (newValue: T) => {
    try {
      setLocalStorageValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  const getItem = (): T => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  };

  const removeItem = () => {
    try {
      localStorage.removeItem(key);
      setLocalStorageValue(initialValue);
    } catch (error) {
      console.error("Error removing from localStorage:", error);
    }
  };

  return {
    value: localStorageValue,
    getItem,
    removeItem,
    setItem,
  };
};

const UseLocalStorageExample = () => {
  const { value, setItem } = useLocalStorage("theme", "dark");

  const changeTheme = () => {
    setItem(value === "dark" ? "light" : "dark");
  };

  return (
    <>
      <h1>Theme is</h1>
      <p>{value}</p>
      <button onClick={changeTheme}>Switch Theme</button>
    </>
  );
};

export default UseLocalStorageExample;
