import LumaButton from "./LumaButton";
import SpotlightText from "./SpotlightText";

export default function App() {
  return (
    <div className="  max-h-screen  h-full " style={{ padding: "20px" }}>
      <div className="w-full  items-center justify-center flex ">
        <LumaButton onClick={() => alert("Clicked!")}>Get Started</LumaButton>
      </div>
      <div className="mt-10" style={{marginTop:'50px'}}>
        <SpotlightText />
      </div>
    </div>
  );
}
