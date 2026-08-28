import React, { useState } from "react";
import TextInput from "./components/TextInput";
import StatsDisplay from "./components/StatsDisplay";


function App() {

  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState<number>(0);
  const [wordCount, setWordCount] = useState<number>(0);
  const [readingTime, setReadingTime] = useState<string>('0:00');
  const WPM = 320;

  function handleTextArea(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;
    setText(value);

    const chCount = value.length;
    const wdCount = value === '' ? 0 : value.split(/\s+/).filter(Boolean).length;
    const totalSeconds = Math.ceil((wdCount / WPM) * 60);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const rdTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    setCharCount(chCount);
    setWordCount(wdCount)
    setReadingTime(rdTime);

  }

  return (
    <div className="max-w-200 m-auto space-y-5">
      <h2
        className="tracking-tight text-slate-900 font-semibold
        target:animate-[fade-in_1.5s] mt-10 border-b
         pb-1 text-3xl nextra-border"
      >Character Counter</h2>

      <TextInput value={text} onTextAreaChange={handleTextArea} />
      <StatsDisplay charCount={charCount} wordCount={wordCount} readTime={readingTime} />

    </div>
  )
}

export default App;