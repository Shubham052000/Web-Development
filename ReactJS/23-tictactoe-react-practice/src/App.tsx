import Board from "./components/Board";

export default function App() {
  return (
    <>
      <Board tiles={3} />
      <Board tiles={4} />
      <Board tiles={5} />
    </>
  );
}
