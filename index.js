const fs = require('fs');

fs.readFile('./data/data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  
  console.log('File content:', data);
});

const newData = 'first content';
fs.writeFile('data.txt', newData, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
});

fs.writeFile('data.txt', newData, 'utf8' , (err) => {
    if (err) throw err;
    console.log('second content');
  });


fs.appendFile('data.txt', newData, 'utf8', (err) => {
    if (err) throw err;
    console.log('final content');
  });