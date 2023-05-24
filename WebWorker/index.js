function startComputation() {
  const worker = new Worker("worker.js");

  worker.addEventListener("message", event => {
    const result = event.data;
    document.getElementById("result").textContent = `Result: ${result}`;
  });
  
  worker.postMessage("start");
  console.log("======");
}
