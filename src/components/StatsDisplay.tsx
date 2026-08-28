import CharacterCounter from "./CharacterCounter";

interface StatsDisplay {
    charCount: number,
    wordCount: number,
    readTime: string,
}

function StatsDisplay({ charCount, wordCount, readTime }: StatsDisplay) {

    const MIN = 25;
    const MAX = 100;
    const isUnderMin = wordCount < MIN;
    const isOverMax = wordCount > MAX;

    const progressPct = Math.min((wordCount / MAX) * 100, 100);
    const barColor = isUnderMin ? 'bg-red-500' : isOverMax ? 'bg-orange-500' : 'bg-green-500';
    const valueColor = isUnderMin ? 'text-red-600' : isOverMax ? 'text-orange-600' : 'text-green-600';

    return (
        <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <CharacterCounter
                    label={'Characters'}
                    value={charCount} />

                <CharacterCounter
                    valueClass={valueColor}
                    label={'Words'}
                    value={wordCount}
                >
                    <p className="text-xs text-gray-500">Min: 25| Max: 100</p>
                </CharacterCounter>

                <CharacterCounter
                    label={'Reading Time'}
                    value={readTime} />

            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden mt-3">
                <div
                    className={`h-2.5 rounded-full transition-all ${barColor}`}
                    style={{ width: `${progressPct}%` }}
                ></div>
            </div>
            {isOverMax && (
                <p className="text-xs text-orange-600 mt-1">Word count exceeds recommended max.</p>
            )}
        </div>
    )
}


export default StatsDisplay;