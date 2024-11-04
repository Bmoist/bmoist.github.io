import "./Notfound.css";
import PianoFrame from "../component/PianoFrame";
import { useWindowSize } from "../hooks/WindowSize";
import HomeNavWrap from "../component/HomeNavWrap";

function Notfound() {
  const linePos = useWindowSize();
  return (
    <HomeNavWrap>
      <PianoFrame title="404 Not Found" />
      <div className="info" >
        <span>Oops, this website does not exist.</span>
      </div>
    </HomeNavWrap>
  );
}

export default Notfound;
