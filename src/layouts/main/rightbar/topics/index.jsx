import { topics } from "../../../../Utils/consts";
import Topic from "./topic";

export default function Topics() {
   return (
      <section className="bg-[#16181c] text-[#e7e9ea] mb-4 rounded-2xl border border-[#16181c]">
         <h5 className=" py-3 px-4 text-xl text-[#e7e9ea] leading-6 font-extrabold flex items-center">Trends for you</h5>
         <div className="grid">
            {topics.map((topic, index) => <Topic item={topic} key={index} />)}
         </div>
      </section>
   )
}