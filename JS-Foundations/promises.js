function fetchData(isSuccess) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isSuccess) {
          console.log("Data fetched successfully");
          resolve("Data processing completed");
        } else {
          reject("Failed to fetch data");
        }
      }, 2000);
    });
  }
  
  function processData(message) {
    console.log("Processing data...");
    console.log(message);
  }
  
  // Example of successful data fetching
  fetchData(true)
    .then(processData)
    .catch(error => console.error(error));
  
  // Example of failed data fetching
  fetchData(false)
    .then(processData)
    .catch(error => console.error(error));
  