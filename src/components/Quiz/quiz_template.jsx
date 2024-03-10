// #ffc107
//green
//#de00de80

import React, { useState } from "react";
import Sidebar from "./sidebar";
const questionsArray = [
    {
        qtitle: "Quiz Question 1",
        ques: "What is the capital of France?",
        options: [
            { index: 1, ans: "Paris" },
            { index: 2, ans: "Madrid" },
            { index: 3, ans: "Berlin" },
            { index: 4, ans: "Rome" },
        ],
        colour:"white",
correctOptionIndex:1

       
    },
//     {
//         qtitle: "Quiz Question 2",
//         ques: "What is the capital of Germany?",
//         options: [
//             { index: 1, ans: "Paris" },
//             { index: 2, ans: "Madrid" },
//             { index: 3, ans: "Berlin" },
//             { index: 4, ans: "Rome" },
//         ],
//         colour:"white",
// correctOptionIndex:1
//     },
//     {
//         qtitle: "Quiz Question 2",
//         ques: "What is the capital of Germany?",
//         options: [
//             { index: 1, ans: "Paris" },
//             { index: 2, ans: "Madrid" },
//             { index: 3, ans: "Berlin" },
//             { index: 4, ans: "Rome" },
//         ],
//         colour:"white",
// correctOptionIndex:1
//     },
//     {
//         qtitle: "Quiz Question 2",
//         ques: "What is the capital of Germany?",
//         options: [
//             { index: 1, ans: "Paris" },
//             { index: 2, ans: "Madrid" },
//             { index: 3, ans: "Berlin" },
//             { index: 4, ans: "Rome" },
//         ],
//         colour:"white",
// correctOptionIndex:1
//     },
//     {
//         qtitle: "Quiz Question 2",
//         ques: "What is the capital of Germany?",
//         options: [
//             { index: 1, ans: "Paris" },
//             { index: 2, ans: "Madrid" },
//             { index: 3, ans: "Berlin" },
//             { index: 4, ans: "Rome" },
//         ],
//         colour:"white",
// correctOptionIndex:1
//     },
//     {
//         qtitle: "Quiz Question 2",
//         ques: "What is the capital of Germany?",
//         options: [
//             { index: 1, ans: "Paris" },
//             { index: 2, ans: "Madrid" },
//             { index: 3, ans: "Berlin" },
//             { index: 4, ans: "Rome" },
//         ],
//         colour:"white",
// correctOptionIndex:1
//     },
//     {
//         qtitle: "Quiz Question 2",
//         ques: "What is the capital of Germany?",
//         options: [
//             { index: 1, ans: "Paris" },
//             { index: 2, ans: "Madrid" },
//             { index: 3, ans: "Berlin" },
//             { index: 4, ans: "Rome" },
//         ],
//         colour:"white",
// correctOptionIndex:1
//     },
//     {
//         qtitle: "Quiz Question 1",
//         ques: "What is the capital of France?",
//         options: [
//             { index: 1, ans: "Paris" },
//             { index: 2, ans: "Madrid" },
//             { index: 3, ans: "Berlin" },
//             { index: 4, ans: "Rome" },
//         ],
//         colour:"white",
// correctOptionIndex:1

       
//     },
//     {
//         qtitle: "Quiz Question 2",
//         ques: "What is the capital of Germany?",
//         options: [
//             { index: 1, ans: "Paris" },
//             { index: 2, ans: "Madrid" },
//             { index: 3, ans: "Berlin" },
//             { index: 4, ans: "Rome" },
//         ],
//         colour:"white",
// correctOptionIndex:1
//     },
//     {
//         qtitle: "Quiz Question 2",
//         ques: "What is the capital of Germany?",
//         options: [
//             { index: 1, ans: "Paris" },
//             { index: 2, ans: "Madrid" },
//             { index: 3, ans: "Berlin" },
//             { index: 4, ans: "Rome" },
//         ],
//         colour:"white",
// correctOptionIndex:1
//     },
//     {
//         qtitle: "Quiz Question 2",
//         ques: "What is the capital of Germany?",
//         options: [
//             { index: 1, ans: "Paris" },
//             { index: 2, ans: "Madrid" },
//             { index: 3, ans: "Berlin" },
//             { index: 4, ans: "Rome" },
//         ],
//         colour:"white",
// correctOptionIndex:1
//     },
//     {
//         qtitle: "Quiz Question 2",
//         ques: "What is the capital of Germany?",
//         options: [
//             { index: 1, ans: "Paris" },
//             { index: 2, ans: "Madrid" },
//             { index: 3, ans: "Berlin" },
//             { index: 4, ans: "Rome" },
//         ],
//         colour:"white",
// correctOptionIndex:1
//     },
//     {
//         qtitle: "Quiz Question 2",
//         ques: "What is the capital of Germany?",
//         options: [
//             { index: 1, ans: "Paris" },
//             { index: 2, ans: "Madrid" },
//             { index: 3, ans: "Berlin" },
//             { index: 4, ans: "Rome" },
//         ],
//         colour:"white",
// correctOptionIndex:1
//     },
    {
        qtitle: "Quiz Question 2",
        ques: "What is the capital of Germany?",
        options: [
            { index: 1, ans: "Paris" },
            { index: 2, ans: "Madrid" },
            { index: 3, ans: "Berlin" },
            { index: 4, ans: "Rome" },
        ],
        colour:"white",
correctOptionIndex:1
    },
    // Add more question objects here...
];




const QuizApp = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [optionColors, setOptionColors] = useState(Array(4).fill("white"));
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState(Array(questionsArray.length).fill(0)); // New state variable to store selected options
    const Option = ({ index, ans, toggleColor, color }) => {
        return (
            <div className="options">
                <label>{index}</label>
                <button
                    className="btn option"
                    onClick={toggleColor}
    
                    style={{ backgroundColor: color }}
                >
                    {ans}
                </button>
            </div>
        );
    };
    
    // const toggleColor = (optionIndex) => {
    //     setOptionColors((prevColors) => {
    //         const newColors = [...prevColors];
    //         newColors[optionIndex] = newColors[optionIndex] === "white" ? "green" : "white";
    //         return newColors;
    //     });
    //     setSelectedOption(optionIndex);

    // };
    const toggleColor = (optionIndex) => {
        // Reset all colors to white
        const newColors = Array(4).fill("white");
    
        // Set the selected option's color to green
        newColors[optionIndex] = "green";
    
        setOptionColors(newColors);
        setSelectedOption(optionIndex);
    };
    
    const handleSaveM = () => {
        const correctOptionIndexNumber = parseInt(questionsArray[currentQuestionIndex].correctOptionIndex);
        const isCorrect = correctOptionIndexNumber === selectedOption + 1;
        let a = selectedOptions;
        a[currentQuestionIndex] = selectedOption+1;
        setSelectedOptions(a);
        console.log(selectedOptions);
        if (currentQuestionIndex < questionsArray.length) {
            questionsArray[currentQuestionIndex].colour = "#ffc107";
        } else {
            console.log("Current question index is out of bounds");
        }
        if(currentQuestionIndex===questionsArray.length-1){
            setCurrentQuestionIndex(-1);
        }
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        console.log(questionsArray);
        if(questionsArray[currentQuestionIndex].colour=="green") {
            let a = Array(4).fill("white");
            a[selectedOptions[currentQuestionIndex]-1] = "green";
            setOptionColors(a);
        }
        else {
            setOptionColors(Array(4).fill("white"))
        }
    };
    
    const handleSave = () => {
        const correctOptionIndexNumber = parseInt(questionsArray[currentQuestionIndex].correctOptionIndex);
        const isCorrect = correctOptionIndexNumber === selectedOption + 1;
        console.log(`Answer is ${isCorrect ? 'correct' : 'incorrect'}`);
        // For simplicity, we'll just move to the next question
        console.log(`hello is it working`);
        let a = selectedOptions;
        a[currentQuestionIndex] = selectedOption+1;
        setSelectedOptions(a);
        console.log(selectedOptions);
        if (currentQuestionIndex < questionsArray.length) {
            questionsArray[currentQuestionIndex].colour = "green";
        } else {
            console.log("Current question index is out of bounds");
        }
        if(currentQuestionIndex===questionsArray.length-1){
            setCurrentQuestionIndex(-1);
        }
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        if(questionsArray[currentQuestionIndex].colour==="green") {
            let a = Array(4).fill("white");
            a[selectedOptions[currentQuestionIndex]-1] = "green";
            setOptionColors(a);
        }
        else {
            setOptionColors(Array(4).fill("white"))
        }      
    };
    
    const handleClear=()=>{
        setOptionColors(Array(4).fill("white"))

    }
    const handleMark=()=>{
        if (currentQuestionIndex < questionsArray.length) {
            questionsArray[currentQuestionIndex].colour = "#de00de80";
        } else {
            console.log("Current question index is out of bounds");
        }
        let a = selectedOptions;
        a[currentQuestionIndex] =0;
        setSelectedOptions(a);
        if(currentQuestionIndex===questionsArray.length-1){
            setCurrentQuestionIndex(-1);
        }
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        if(questionsArray[currentQuestionIndex].colour!="green"||questionsArray[currentQuestionIndex].colour!="#ffc107") setOptionColors(Array(4).fill("white"))
        else {
            let a = Array(4).fill("white");
            a[selectedOptions[currentQuestionIndex]-1] = "green";
            setOptionColors(a);
        }  
        
    }
    const currentQuestion = questionsArray[currentQuestionIndex];

    return (
        <div className="Questions" style={{backgroundImage:"url(studentprof.jpg)" , backgroundSize:"cover"}}>
            <div className="header">.</div>
            <Sidebar question = {questionsArray}/>
            <div className="quiz-app">
                <img src="logo192.png"/>
                <div>
                <h1>{currentQuestion.qtitle}</h1>

                <div className="quizs">
                    <h2 className="question">{currentQuestion.ques}</h2>
                    <div className="answer-buttons">
                        {currentQuestion.options.map((option, index) => (
                            <Option
                                key={option.index}
                                index={option.index}
                                ans={option.ans}
                                toggleColor={() => toggleColor(index)}
                                color={optionColors[index]}
                            />
                        ))}
                    </div>
                    <div className="operations">
                        <button className="btn btn-success" onClick={handleSave}>
                            Save
                        </button>
                        <button className="btn btn-light" onClick={handleClear}>Clear</button>
                        <button className="btn btn-warning " onClick={handleSaveM}>Save & Mark for Review</button>
                        <button className="btn btn-primary " onClick={handleMark}>Mark for Review & Next</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default QuizApp;
