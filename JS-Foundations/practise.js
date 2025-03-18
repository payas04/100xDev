// Synchronous version
function calculateSumSync() {
    let sum = 0;
    for (let i = 0; i < 900000000; i++) {
      sum += i;
    }
    return sum;
  }
  
  // Asynchronous version using Promises
  function calculateSumAsync() {
    return new Promise((resolve) => {
      let sum = 0;
      for (let i = 0; i < 90000000000; i++) {
        sum += i;
      }
      resolve(sum);
    });
  }
    
  
  console.log('Synchronous sum calculation started');
  const syncSum = calculateSumSync();
  console.log('Synchronous sum:', syncSum);
  console.log('Synchronous sum calculation completed');
  
  console.log('Asynchronous sum calculation started');

  calculateSumAsync().then(result => {
    console.log('Asynchronous sum:', result);
    console.log('Asynchronous sum calculation completed');
  });
  console.log('Asynchronous sum calculation is ongoing');
  