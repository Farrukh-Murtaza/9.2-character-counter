import CharacterCounter from "./CharacterCounter";

interface StatsDisplay {
    charCount: number,
    wordCount: number,
    readTime: string,
}


function StatsDisplay({ charCount, wordCount, readTime }: StatsDisplay) {

    return (
        <div className="bg-white rounded-lg shadow-sm p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <CharacterCounter
                    label={'Characters'}
                    value={charCount} />

                <CharacterCounter
                    labelClass={wordCount < 25 ? 'text-red-600' : 'text-green-600'}
                    label={'Words'}
                    value={wordCount}
                >
                    <p className="text-xs text-gray-500">Min: 25| Max: 100</p>
                </CharacterCounter>

                <CharacterCounter
                    label={'Reading Time'}
                    value={readTime} />

            </div>
        </div>
    )
}


export default StatsDisplay;