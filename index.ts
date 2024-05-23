#! /usr/bin/env node

import inquirer from "inquirer";

const quiz :{
    question_1 : string;
    question_2 : string;
    question_3 : string;
    question_4 : string;
    question_5 : string;
} = await inquirer.prompt(
    [
        {
            name: "question_1",
            type: "list",
            message: "Q1: what is Variable?",
            choices: ["used to store data", "used to maupulate", "used to execute"] 
        },
        {
            name: "question_2",
            type: "list",
            message: "Q2: which type in typescript.",
            choices: ["weak typing", "strong typing", "normal typing"] 
        },
        {
            name: "question_3",
            type: "list",
            message: "Q3: comments code in typescript.",
            choices: ["single line", "multi line", "both"] 
        },
        {
            name: "question_4",
            type: "list",
            message: "Q4: understanding type error and typescript type system helps",
            choices: ["help expert", "hover your mouse", "solve geniously"] 
        },
        {
            name: "question_5",
            type: "list",
            message: "Q5: what is operator?",
            choices: ["operation perform on variable", "operation perform on value", "both value and variable"] 
        }
    ]
);

let score: number = 0;
switch(quiz.question_1){
    case "used to store data":
        console.log(`1. Correct!`);
        ++score;
        break;
        default:
            console.log(`1. Incorrect!`);
}

switch(quiz.question_2){
    case "strong typing":
        console.log(`2. Correct!`);
        ++score;
        break;
        default:
            console.log(`2. Incorrect!`);
}

switch(quiz.question_3){
    case "both":
        console.log(`3. Correct!`);
        ++score;
        break;
        default:
            console.log(`3. Incorrect!`);
}

switch(quiz.question_4){
    case "hover your mouse":
        console.log(`4. Correct!`);
        ++score;
        break;
        default:
            console.log(`4. Incorrect!`);
}

switch(quiz.question_5){
    case "both value and variable":
        console.log(`5. Correct!`);
        ++score;
        break;
        default:
            console.log(`5. Incorrect!`);
}

console.log(`\n Score: ${score}`);