import Home from "@/components/Home";
import { isMobile } from "react-device-detect";
import MobileHome from "./components/MobileComponents/MobileHome";

function App() {
  if (isMobile) {
    return <MobileHome />;
  }

  return (
    <div className="w-screen h-screen">
      <Home />
    </div>
  );
}

export default App;
