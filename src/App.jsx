import Random from "./components/Random";
import Text from "./components/Text";

export default function App() {
  return (
    <div className="w-full h-screen background flex flex-col items-center "> 
      <h1 className="w-11/12 text-black font-bold p-3  bg-slate-50 text-4xl text-center rounded-2xl mt-4">  Random Gif</h1>
      <div className="flex flex-row gap-4 w-full items-center">
        <Random />
        <Text />
      </div>
    </div>
  );
}
