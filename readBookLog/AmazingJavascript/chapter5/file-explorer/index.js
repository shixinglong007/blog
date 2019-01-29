const fs = require('fs');

fs.readdir(process.cwd(), (err, files) => {
  console.log('')
  if (!files.length) {
    return console.log('    " No files to show! "');
  }
  console.log(`   Select which file or directory you want to see \n`);
  const file = (i) => {
    var fileName = files[i];
    fs.stat(__dirname + '/' + fileName, (err, stat) => {
      if (stat.isDirectory()) {
        console.log(i + '    " \033[36m '+fileName+' \033[39m "');
      } else {
        console.log(i + '    " \033[90m '+fileName+' \033[39m "');
      }
      if (++i === files.length) {
        console.log(' ')
        process.stdout.write(' \033[33m Enter your choice: \033[39m ');
        process.stdin.resume();
        process.stdin.setEncoding('utf-8');
      } else {
        file(i);
      }
    })
  }
  file(0)
})
