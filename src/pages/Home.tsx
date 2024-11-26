import "./Home.css";
import Brief from "../component/Brief";
import HomeNav from "../component/HomeNavBar";
import PianoFrame from "../component/PianoFrame";
import { useEffect, useState } from "react";
import { UnderDevelopment } from "./UD";

type DeviceType = "mobile" | "tablet" | "desktop";

function Home() {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 780) {
        setDeviceType("mobile");
      } else if (width < 1024) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };
    // Initial check
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {(deviceType === "desktop" || deviceType === "tablet") && (
        <>
          <HomeNav />
          <Brief />
          <PianoFrame maxScrollThres={0} id="homeframe" />
        </>
      )}
      {deviceType === "mobile" && <UnderDevelopment />}
    </>
  );
}

export default Home;
