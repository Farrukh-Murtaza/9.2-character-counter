
interface CharacterCounter {
    label: string,
    value: number | string,
    children?: React.ReactNode;
    labelClass?: string
}



function CharacterCounter({ label, value, children, labelClass }: CharacterCounter) {

    return (
        <div className="text-center">
            <p className={`text-sm text-gray-500 ${labelClass}`}>{label}</p>
            <p className="text-2xl font-semibold text-gray-700">{value}</p>
            {children}
        </div>
    )
}

export default CharacterCounter;