#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
figlet.defaults({ fontPath: "assets/fonts" });
function ready() {
    console.log(figlet.textSync("The Word Counter"));
}
ready();
async function askquestion() {
    let que = await inquirer.prompt([
        {
            type: "input",
            name: "str",
            message: chalk.greenBright("write your complete sentence:")
        }
    ]);
    const word_arr = que.str.split(" ");
    // console.log(word_arr);
    console.log('words in paragraph:-' + (word_arr.length));
    const with_out = que.str.replace(/ /g, "");
    console.log("characters in sentence:-" + (with_out.length));
}
// askquestion()
async function startAgain() {
    do {
        await askquestion();
        var playAgain = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: chalk.green("Do you want to restart?Press Y or N:")
        });
    } while (playAgain.restart === "y" || playAgain.restart === "Y" || playAgain.restart === "Yes" ||
        playAgain.restart === "yes" || playAgain.restart === "YES");
}
startAgain();
