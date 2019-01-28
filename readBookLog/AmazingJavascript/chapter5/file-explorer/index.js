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
        console.log(i + '    " '+fileName+' "');
      } else {
        console.log(i + '    " '+fileName+' "');
      }
      if (++i === files.length) {
        console.log(' ')
        process.stdout.write(`    " Enter your choice:  "`);
        process.stdin.resume();
        process.stdin.setEncoding('utf-8');
      } else {
        file(i);
      }
    })
  }
  file(0)
})
