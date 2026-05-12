import { useState } from "react";
import type { TravelRequest } from "../types/types";
import { DEFAULT_FORM, BUDGET_OPTIONS, TRAVEL_TYPE, DESTINATIONS} from "../types/constants";
import Selector from "./Selector";


interface TravelFormProps {
    onSubmit: (formData: TravelRequest) => void;
}

const TravelForm = ({ onSubmit }: TravelFormProps) => {

    const [form, setForm] = useState<TravelRequest>(DEFAULT_FORM);
    const DESTINATION_OPTIONS = DESTINATIONS.map(d => ({ value: d, label: d }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };
    

    return (
        <form onSubmit={handleSubmit} className="w-full mx-auto max-w-lg bg-white/70 border border-white/80 
        rounded-3xl animate-in fade-in zoom-in duration-500 p-6 md:p-10 space-y-8 shadow-2xl">
            <section className="space-y-4">
                <label className="text-xs md:text-sm font-bold tracking-wide uppercase text-[#E07030] mb-4 block">
                    Destination
                </label>
                <Selector
                    items={DESTINATION_OPTIONS}
                    selectedValue={form.destination}
                    onSelect={(value) => setForm({...form, destination:value})}
                />

                <input 
                    placeholder="Or enter a city..."
                    value = {form.destination}
                    onChange={(e) => setForm({...form, destination: e.target.value})} 
                    className="bg-white/60 border border-[#5bbcb0]/20 rounded-2xl px-4 md:px6 py-3 w-full"   
                />
            </section>

            <section>
                <label className="text-[#E07030] text-xs md:text-sm font-bold tracking-wide uppercase mb-4 block">
                    Duration of stay
                </label>

                <div className="flex items-center justify-center md:justify-start gap-5">
                    <button 
                            type="button"
                            className="w-12 h-12 bg-white/65 border border-[#5bbcb0]/20 rounded-full 
                            text-[#5bbcb0] text-xl flex items-center justify-center cursor-pointer"
                            onClick={() => setForm({...form, days: Math.max(1, form.days-1)})}>
                        -
                    </button>

                    <div className="flex items-baseline gap-3 justify-center">
                        <span className="font-display font-bold text-4xl md:text-5xl" style={{lineHeight: 1, color: "#e07030"}}>
                            {form.days}
                        </span>
                        <span className="text-sm" style={{ color: "#5a8a84" }}>
                            day{form.days > 1 ? "s" : ""}
                        </span>
                    </div>

                    <button type="button"
                            className="w-12 h-12 bg-white/65 border border-[#5bbcb0]/20 rounded-full 
                            text-[#5bbcb0] text-xl flex items-center justify-center cursor-pointer"
                            onClick={() => setForm({...form, days: form.days+1})}>
                        +
                    </button>
                </div>

            </section>

            <section>
                <label className="text-[#E07030] text-xs md:text-sm font-bold tracking-wide uppercase mb-4 block">
                    Budget Range
                </label>

                <Selector
                    items={BUDGET_OPTIONS}
                    selectedValue={form.budgetLevel}
                    onSelect={(value) => setForm({...form, budgetLevel:value})}
                />

            </section>
            
            <section>
                <label className="text-[#E07030] text-xs md:text-sm font-bold tracking-wide uppercase mb-4 block">
                    Travel Style
                </label>

                <Selector
                    items={TRAVEL_TYPE}
                    selectedValue={form.travelType}
                    onSelect={(value) => setForm({...form, travelType:value})}
                />
            </section>
            
            <button 
            type="submit"
            className="w-full bg-gradient-to-r from-[#d86020] to-[#f4a040]
            text-white py-4 rounded-2xl font-bold shadow-xl shadow-orange-600/20
             hover:from-[#e07030] hover:to-[#f4a040]/90 transition-colors">
                Generate My Itinerary -&gt;
            </button>

        </form>
    );
}

export default TravelForm;