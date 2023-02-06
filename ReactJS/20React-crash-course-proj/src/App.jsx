import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostList from "./components/PostList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <>
      <MainHeader onCreatePost={() => setModalIsVisible(true)} />
      <main>
        <PostList
          modalIsVisible={modalIsVisible}
          onCloseModal={() => setModalIsVisible(false)}
        />
      </main>
    </>
  );
}

export default App;
