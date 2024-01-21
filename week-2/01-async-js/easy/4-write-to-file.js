/*Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/
const fs = require('fs');
const path = '/100xDev/trial.txt';

fs.readFile(path,'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
})

var newcontent = '\n new new new new added';

fs.appendFile(path,newcontent, (err)=>{
    if(err) throw err;
    console.log("\nData written");

});

