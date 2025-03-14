const dscc = require('@google/dscc');
const d3 = require('d3');

const drawViz = (data) => {
  const container = document.createElement("div");
  container.style.width = "100px";
  container.style.height = "100px";
  container.style.borderRadius = "50%";
  container.style.backgroundColor = "red";
  container.style.animation = "blink 1s infinite alternate";

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes blink {
      0% { background-color: red; }
      100% { background-color: transparent; }
    }
  `;

  document.body.appendChild(style);
  document.body.appendChild(container);
};

dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
