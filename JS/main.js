import {dictionaryWords,temp2} from './dict.js';

let words = ['Утро', '12321', 'День', 'Завод', 'Лом', 'Рак', 'Енот', 'Соболь','Рыба', 'Кот', 'Мышка', 'Дом'];


let word = words[Math.floor(Math.random() * words.length)] + "!";

document.getElementById('word').innerHTML = word;

console.log(dictionaryWords,temp2,word);