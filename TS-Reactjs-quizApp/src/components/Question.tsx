import React from "react";

interface Props {
    question: string;
    choices: string[];
    answer: string;
    onAnswer: (answer: string) => void;
}

const Question: React.FC<Props> = (
    { question, choices, answer, onAnswer }) => {
    return (
        <div className="d-flex 
                        justify-content-center
                        align-center
                        text-center
                        flex-column">
            <h2 className="">{question}</h2>
            <div className="div">
                {choices.map((choice) => (
                    <button className="btn btn-success m-2"
                        onClick={() => onAnswer(choice)}>
                        {choice}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Question;