import React, { useState } from "react";


function App() {


  const [charCount, setCharCount] = useState<number>(0);
  const [wordCount, setWordCount] = useState<number>(0);
  const [readingTime, setReadingTime] = useState<string>('0:00');
  const WPM = 200;



  function handleTextArea(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value.trim();

    const chCount = value.length;
    const wdCount = value.split(" ").length;
    const rdTime = (wdCount / WPM);
    setCharCount(chCount);
    setWordCount(wdCount)
    setReadingTime(`${rdTime}`);


  }

  return (
    <div className="max-w-200 m-auto space-y-5">
      <h2
        className="tracking-tight text-slate-900 font-semibold
        target:animate-[fade-in_1.5s] mt-10 border-b
         pb-1 text-3xl nextra-border"
      >Character Counter</h2>
      <div className="w-full">
        <textarea
          onChange={handleTextArea}
          className="w-full p-4 border border-gray-300 rounded-lg
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
          min-h-50 resize-y bg-white"
          placeholder="Start typing your content here..."></textarea>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-500">Characters</p>
            <p className="text-2xl font-semibold text-gray-700">{charCount}</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Words</p>
            <p className={`text-2xl font-semibold ${wordCount < 25 ? 'text-red-600' : 'text-green-600'}`}>{wordCount}</p>
            <p className="text-xs text-gray-500">Min: 25| Max: 100</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500">Reading Time</p>
            <p className="text-2xl font-semibold text-gray-700">{readingTime}</p>
          </div>
        </div>
      </div>
    </div>
  )


}

export default App;