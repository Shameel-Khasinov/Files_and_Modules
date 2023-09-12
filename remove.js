// тут код, который удалит файл lorem.txt
const { unlink } = require("fs");

unlink("lorem.txt", (err) => {
  if (err) console.error(err);
  else console.log("Файл удалён!");
});