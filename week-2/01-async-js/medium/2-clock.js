/*Using `counter.md',  create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/
const fs = require('fs');
const path = 'counter.md'; // Corrected path to the file

function getTime() {
    let now = new Date();
    // Get hours, minutes, seconds, AM/PM
    var hh = String(now.getHours()).padStart(2, '0');
    var mm = String(now.getMinutes()).padStart(2, '0');
    var ss = String(now.getSeconds()).padStart(2, '0');
    return { hh, mm, ss };
}

setInterval(() => {
    var currTime = getTime();
    var formattedTime = `${currTime.hh}:${currTime.mm}:${currTime.ss}`;

    // Write the formatted time to the file
    fs.writeFile(path, formattedTime, (err) => {
        if (err) {
            console.error(`Error writing to file: ${err}`);
            return;
        }
        console.log(`Time updated: ${formattedTime}`);
        
        // Read the file to verify the content (optional)
        fs.readFile(path, 'utf8', (readErr, data) => {
            if (readErr) {
                console.error(`Error reading file: ${readErr}`);
                return;
            }
            console.log(`File content: ${data}`);
        });
    });
}, 1000);
