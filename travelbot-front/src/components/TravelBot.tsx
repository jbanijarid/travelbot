import { useState } from "react";
import type { Step, TravelPlan, TravelRequest } from "../types/types";
import TravelForm from "./TravelForm";
import { travelService } from "./Api";
import TravelPlanView from "./TravelPlanView";

const TravelBot = () => {
    const [step, setStep] = useState<Step>("form");
    const [plan, setPlan] = useState<TravelPlan | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleGenerate = async (formData: TravelRequest) => {
        setStep("loading");
        try {
            const data = await travelService.generateItinerary(formData);
            setPlan(data);
            setStep("result");
            console.log("Generated plan →", data);
        } catch (error) {
            setStep("form");
            setError("Une erreur est survenue. Veuillez réessayer.");
        }
    };

    return (
        <div className="min-h-screen px-4 py-8 md:py-12">
            {step === "form" && (
                <div className="w-full max-w-lg mx-auto">
                    <TravelForm onSubmit={handleGenerate} />
                </div>
            )}

            {step === "loading" && (
                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                    <div className="w-12 h-12 border-4 border-teal-500/20 border-t-teal-600 rounded-full animate-spin" />
                    <p className="text-[#12302e] font-medium animate-pulse">Loading...</p>
                </div>
            )}

            {step === "result" && plan && (
                <div className="w-full max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-500">
                    <TravelPlanView plan={plan} />

                    <button
                        onClick={() => setStep("form")}
                        className="mb-6 text-sm flex items-center gap-2 text-teal-700 hover:underline cursor-pointer"
                    >
                        ← Plan another trip
                    </button>
                </div>

            )}
        </div>
    )
}

export default TravelBot;