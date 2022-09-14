//convert into EsModules
import greet from './greet.js';
import chalk from 'chalk';
import fun from 'everyday-fun';
import figlet from 'figlet';


//console.log(greet('David'));
//console.log(greet('Molatodi'));
//console.log(chalk.yellow.bgBlue.bold(greet('David')));

figlet('Joe The Riddler..', function(err, result){
console.log(chalk.yellow.bgBlue.bold(result));
const riddle = fun.getRandomRiddle();

console.log(chalk.yellow.bgBlue.bold(riddle.riddle));

setTimeout(function() {
    console.log(chalk.black.bgYellow.bold(riddle.answer));
}, 7000);

});

