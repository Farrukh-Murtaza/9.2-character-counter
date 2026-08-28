import type React from "react";


interface TextInputProps {
    className?: string,
    onTextAreaChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}


function TextInput({ className, onTextAreaChange }: TextInputProps) {

    return (
        <div className="w-full">
            <textarea
                onChange={onTextAreaChange}
                className={`w-full p-4 border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
            min-h-50 resize-y bg-white ${className}`}
                placeholder="Start typing your content here..."></textarea>
        </div>
    )

}

export default TextInput;