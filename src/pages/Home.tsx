import "./Home.css";
import Brief from "../component/Brief";
import HomeNav from "../component/HomeNavBar";
import PianoFrame from "../component/PianoFrame";

function Home() {
  return (
    <>
      <HomeNav />
      <Brief />
      <PianoFrame maxScrollThres={window.innerHeight / 2} id="homeframe" />
    </>
  );
}

export default Home;
