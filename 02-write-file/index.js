const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin, stdout } = process;

let writeableStream = fs.createWriteStream(
    path.join(__dirname, 'text.txt'), 'utf-8'
);
console.log('Введите текст: ');

const message = readline.createInterface({
    input: stdin,
    output: stdout,
});
message.on('line', (line) => {
    if (line === 'exit') {
        message.close();
    } else {
        writeableStream.write(line + '\n');
    }
});
message.on('SIGINT', () => {
    message.close();
});
message.on('close', () => {
    writeableStream.write(message.line);
    stdout.write('Ввод данных завершен.\n');
});