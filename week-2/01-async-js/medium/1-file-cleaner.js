/*File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require('fs');

const path = '/100xDev/trial.txt';

fs.readFile(path,'utf8',(err,data)=>{
    if(err){
        console.error("Error reading file:",err);
        return;
    }
    
    console.log(data);

    const cleanedfile = data.replace(/\s+/g, ' ');

    fs.writeFile(path,cleanedfile,(err)=>{
        if(err) throw err;
    });
} );

