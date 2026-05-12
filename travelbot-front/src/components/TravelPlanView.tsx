import { useState } from "react";
import type { TravelPlan } from "../types/types";

interface props {
  plan: TravelPlan;
}

const TravelPlanView = (plan: props) => {

  const [activeDay, setActiveDay] = useState(0);
  const currentDay = plan.plan.activities[activeDay];

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">

      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="space-y-2">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-[#12302e]  leading-tight">
            {plan.plan.destination}
          </h2>

          <span className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 border-teal-500/20 
                            border text-sm font-medium">
            {`${plan.plan.activities.length} days`}
          </span>
        </div>

        <div className="w-full md:w-auto bg-teal-700/10 text-teal-700 border-teal-500/10 border rounded-2xl px-6 py-4 text-center">
          <p className="font-display text-2xl md:text-3xl font-bold">~{plan.plan.budgetEstimate} €</p>
          <p className="text-sm">Estimated Cost</p>
        </div>

      </div>

      <div className="flex gap-2 flex-wrap border-b border-[#5bbcb0]/10 pb-6">
        {plan.plan.activities.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveDay(i)}
            className={`px-5 py-2 rounded-full text-sm transition-all cursor-pointer
              ${activeDay === i
                ? "bg-[#12302e] text-white"
                : "bg-white-70 text-[#4a7a74] border border-[#5bbcb0]/20 hover:bg-white"
              }`}
          >
            Day{i + 1}
          </button>
        ))}
      </div>


      <div className="bg-white-80 border border-teal-500/10 rounded-3xl ">
        <div className="px-7 py-4 rounded-3xl bg-gradient-to-r from-teal-500/10 to-orange-500/6 border border-teal-500/10">
          <span className="font-display text-xl font-semibold italic text-[#12302e]">
            program of the day {currentDay.dayNumber}
          </span>
        </div>

        <div className="divide-y divide-teal-500/5">
          <TimeSlot
            icon="☀️"
            title="Morning"
            text={currentDay.morning}
          />

          <TimeSlot
            icon="🌞"
            title="Afternoon"
            text={currentDay.afternoon}
          />

          <TimeSlot
            icon="🌙"
            title="Evening"
            text={currentDay.evening}
          />


        </div>
      </div>

      {plan.plan.tips && plan.plan.tips.length > 0 && (
        <div className="space-y-4">
          <h3 className="font-display text-2xl font-semibold text-[#12302e]">
            Practical Tips :
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {plan.plan.tips.map((tip, index) => (
              <div key={index} className=" flex gap-3 p-4 bg-white/60 border border-teal-500/20 rounded-2xl">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e07030] shrink-0 mt-3" />
                <p className="text-sm text-text-[#12302e]">{tip}</p>
              </div>
            ))}
          </div>
        </div>

      )}

    </div>
  );

}

const TimeSlot = ({ icon, title, text }: { icon: string; title: string; text: string }) => (
  <div className="flex gap-4 px-7 py-6 ">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 bg-orange-100`}>
      {icon}
    </div>
    <div className="space-y-1">
      <p className="text-[10px] font-bold uppercase text-[#c07040]">{title}</p>
      <p className="text-sm text-[#2e5a54]">{text}</p>
    </div>
  </div>
);

export default TravelPlanView;