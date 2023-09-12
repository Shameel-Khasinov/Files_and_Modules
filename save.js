const fs = require('fs');
const text = 'lorem ipsum :)';

// тут должен быть код, который сохранит текст из переменной в файл lorem.txt 
function saveTextToFile() {
    fs.writeFile("./lorem.txt", text, (err) => {
      if (err) throw err;
      console.log("Файл успешно сохранён!");
    });
  }
  
  saveTextToFile();