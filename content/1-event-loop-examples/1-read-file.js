const { readFile } = require('fs');
console.log('started a first tast');
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('completed first tast');
});
console.log('starting next task');