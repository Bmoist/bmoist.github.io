import "./Home.css";
import PianoFrame from "../components/PianoRim";
import HomeNav from "../components/HomeNavBar";

function Home() {
  return (
    <>
      <HomeNav />
      <PianoFrame maxScrollThres={100} />
    </>
  );
}

export default Home;
