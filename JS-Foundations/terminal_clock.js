// Create a terminal Clock HH:MM:SS

function clock() {
    let datenow = new Date();
    let hours = String(datenow.getHours()).padStart(2, '0');
    let minutes = String(datenow.getMinutes()).padStart(2, '0');
    let seconds = String(datenow.getSeconds()).padStart(2, '0');
  
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  
  setInterval(clock, 1000);
  