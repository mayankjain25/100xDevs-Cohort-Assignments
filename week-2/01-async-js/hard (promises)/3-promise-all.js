function wait1(t) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, t*1000);
    });
  }
  
  function wait2(t) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, t*1000);
    });
  }
  
  function wait3(t) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, t*1000);
    });
  }
  
  function calculateTime(t1, t2, t3) {
    const start = performance.now();
  
    // Use Promise.all to wait for all three promises to resolve
    return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(() => {
      // Return the time taken in milliseconds
      return (performance.now() - start);
    });
  }
  
  module.exports = calculateTime;
  