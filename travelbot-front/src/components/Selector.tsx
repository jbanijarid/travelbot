interface SelectorOption {
    value: string;
    label: string;
}

interface SelectorProps {
    items: SelectorOption[];
    selectedValue: string;
    onSelect: (val: string) => void;
}


const Selector = ({ items, selectedValue, onSelect }: SelectorProps) => {

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 mb-3">
            {items.map((item) => {
                const isSelected = selectedValue === item.value;
                return (
                    <button
                        key={item.value}
                        type="button"
                        onClick={() => onSelect(item.value)}
                        className={`flex flex-col items-center justify-center
                            p-3 md:p-4 text-sm font-medium border items-center rounded-3xl transition-all duration-200 cursor-pointer 
                            ${isSelected
                                ? "bg-[#5bbcb0] text-white border-[#5bbcb0]"
                                : "bg-white/65 text-[#5a8a84] border-[#5bbcb0]/20"
                            }`}
                    >
                        {item.label}
                    </button>
                );
            })}
        </div>
    )
}

export default Selector; 