/*
  This is your site JavaScript code - you can add interactivity!
*/

function drawWaveform() {
    const canvas = document.getElementById("signal-canvas");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      ctx.fillRect(25, 25, 100, 100);
      ctx.clearRect(45, 45, 60, 60);
      ctx.strokeRect(50, 50, 50, 50);
    }
  }
  
  const drawBtn = document.getElementById("signal-draw");
  if (drawBtn) {
    drawBtn.onclick = function () {
      console.log("drawing waveform onto canvas...");
      drawWaveform();
      drawBtn.classList.toggle("dipped");
    };
  }
  
  // Print a message in the browser's dev tools console each time the page loads
  // Use your menus or right-click / control-click and choose "Inspect" > "Console"
  console.log("Hello 🌎");
  
  // ----- GLITCH STARTER PROJECT HELPER CODE -----
  
  // Open file when the link in the preview is clicked
  let goto = (file, line) => {
    window.parent.postMessage(
      { type: "glitch/go-to-line", payload: { filePath: file, line: line } },
      "*"
    );
  };
  // Get the file opening button from its class name
  const filer = document.querySelectorAll(".fileopener");
  filer.forEach((f) => {
    f.onclick = () => {
      goto(f.dataset.file, f.dataset.line);
    };
  });
  