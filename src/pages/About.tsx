import PianoFrame from "../component/PianoFrame";
import "./About.css";
import photo from "../assets/photo_life_circle.png";
import { useWindowSize } from "../hooks/Window";

const About = () => {
  const linePos = useWindowSize();
  return (
    <>
      <img
        src={photo}
        style={{
          width: linePos.x2 / 6,
          left: linePos.x2 / 4.5,
          top: linePos.x2 / 10,
          borderWidth: linePos.x2 / 300,
        }}
        className="profile-img"
      />
      <p
        className="bio"
        style={{
          left: linePos.x2 / 3,
          top: linePos.x2 / 2.7,
          fontSize: linePos.x2 / 70,
          width: linePos.x2 / 2,
        }}
      >
        My name is Linzan Ye. I hold dual bachelor's degrees in Data Science and
        Music from the University of Rochester. As a music ethusiast, I am
        fascinated by how music helps us express ourselves and connect with
        others. I aim to contribute to developing AI companions that minimize
        the barriers to expressing ourselves.
      </p>
      <PianoFrame id="aboutframe" maxScrollThres={0} />
    </>
  );
};
export default About;
