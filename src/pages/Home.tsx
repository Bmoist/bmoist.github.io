import "./Home.css";
import PianoFrame from "../component/PianoFrame";
import Brief from "../component/Brief";

const maxScrollThres = 100;

function Home() {
  return (
    <>
      <Brief />
      <PianoFrame maxScrollThres={maxScrollThres} />
    </>
  );
}

export default Home;
