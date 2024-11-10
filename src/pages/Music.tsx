import { useEffect, useRef, useState } from "react";
import PianoFrame, { calEndY } from "../component/PianoFrame";
import lg from "../logger";
import "./Music.css";
import { Link } from "react-router-dom";
import { useWindowSize } from "../hooks/Window";

export interface MusicInfo {
  id: string;
  img: string;
  title: string;
  brief: string;
  link: string;
  type: "composition" | "performance" | "improvisation";
}

interface MusicProps {
  music: MusicInfo[];
}

const Music: React.FC<MusicProps> = ({ music }) => {
  const linePos = useWindowSize();
  const [filter, setFilter] = useState<string>("all");
  const [filteredMusic, setFilteredMusic] = useState<MusicInfo[]>(music);

  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  useEffect(() => {
    // Filter Music based on selected type
    if (filter === "all") {
      setFilteredMusic(music);
    } else {
      setFilteredMusic(music.filter((m) => m.type === filter));
    }
  }, [filter, music]);

  useEffect(() => {
    const updateFontSize = () => {
      if (cardRef.current) {
        const cardWidth = cardRef.current.offsetWidth;
        setFontSize(cardWidth * 0.04);
      }
    };
    const updateContainerSize = () => {
      if (containerRef.current) {
        const cHeight = containerRef.current.offsetHeight;
        setContainerHeight(cHeight);
      }
    };
    updateFontSize();
    updateContainerSize();
    window.addEventListener("resize", updateFontSize);
    window.addEventListener("resize", updateContainerSize);
    return () => {
      window.removeEventListener("resize", updateFontSize);
      window.removeEventListener("resize", updateContainerSize);
    };
  }, []);
  return (
    <PianoFrame
      maxScrollThres={window.innerHeight + containerHeight}
      title="Music"
      id="proj_frame"
      sectionVisibleThres={containerHeight / 1.7}
      disablePiano={
        containerHeight >
        calEndY(linePos, window.innerHeight + containerHeight) / 2
      }
    >
      {/* Filter Component */}
      <div
        className="filter-bar"
        style={{
          top: linePos.x2 / 4,
          left: linePos.x2 / 3.3,
        }}
      >
        <div
          className={`filter-item ${filter === "all" ? "active" : ""}`}
          style={{ fontSize: linePos.x2 / 60 }}
          onClick={() => setFilter("all")}
        >
          All
        </div>
        <div
          className={`filter-item ${filter === "composition" ? "active" : ""}`}
          style={{ fontSize: linePos.x2 / 60 }}
          onClick={() => setFilter("composition")}
        >
          Compositions
        </div>
        <div
          className={`filter-item ${filter === "performance" ? "active" : ""}`}
          style={{ fontSize: linePos.x2 / 60 }}
          onClick={() => setFilter("performance")}
        >
          Performances
        </div>
        <div
          className={`filter-item ${
            filter === "improvisation" ? "active" : ""
          }`}
          style={{ fontSize: linePos.x2 / 60 }}
          onClick={() => setFilter("improvisation")}
        >
          Improvisations
        </div>
      </div>

      {/* Music Cards */}
      <div className="music-container" ref={containerRef}>
        {filteredMusic.map((mur) => (
          <Link
            key={mur.id}
            to={mur.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="music-card" ref={cardRef}>
              <img src={mur.img} alt={mur.title} />
              <div className="music-card-content">
                <h2>{mur.title}</h2>
                <p style={{ fontSize: fontSize }}>{mur.brief}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </PianoFrame>
  );
};

export default Music;
