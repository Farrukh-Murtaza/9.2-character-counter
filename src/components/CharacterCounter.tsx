
interface CharacterCounter {
    label: string,
    value: number | string,
    children?: React.ReactNode;
    valueClass?: string
}

function CharacterCounter({ label, value, children, valueClass }: CharacterCounter) {

    return (
        <div className="text-center">
            <p className={`text-sm text-gray-500 `}>{label}</p>
            <p className={`text-2xl font-semibold text-gray-700 ${valueClass}`}>{value}</p>
            {children}
        </div>
    )
}

export default CharacterCounter;