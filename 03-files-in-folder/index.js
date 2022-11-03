const fs = require('fs');
const path = require('path');
 
const filePath = path.resolve(__dirname, 'secret-folder');
 
fs.readdir(filePath, function(err, items) {
  for (const item of items) {
    const itemInfo = path.parse(item);
    let itemResult = `${itemInfo.name} - ${(itemInfo.ext).slice(1)} - `;

    fs.stat(`${filePath}\\${item}`, (err, stats) => {
      if (stats.isFile()) {
        itemResult += `${stats.size}kb`;
        console.log(itemResult);
      }
    });   
  }
});