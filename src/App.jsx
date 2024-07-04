import Random from "./components/Random"
import Tag from "./components/Tag"

export default function App() {
  return (
     <div className="w-full h-screen flex flex-col background relative">
      <h1 className="bg-white rounded-lg w-full text-center mt-[40px] mr-[25px] items-center
      px-10 py-2 text-4xl font-bold overflow-x-hidden">RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
     </div>
  );
}
