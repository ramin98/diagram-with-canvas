const canvas = document.getElementById("chartCanvas");
const context = canvas.getContext("2d");
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = Math.min(centerX, centerY) - 20;

const colors = [
  "#9B51E0",
  "#EB5757",
  "#F2C94C",
  "#219653",
  "#56CCF2",
  "#2F80ED",
  "#6FCF97",
  "#F2994A",
];

function drawChart(data) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  let startAngle = 0;
  data.forEach(([value, valueRadius], index) => {
    const endAngle = startAngle + value * Math.PI * 2;
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.arc(centerX, centerY, valueRadius * radius, startAngle, endAngle);
    context.closePath();

    context.fillStyle = index === 0 ? "#1E1E1E" : colors[index - 1];
    context.fill();

    startAngle = endAngle;
  });
}

canvas.addEventListener("click", () => {
  const chartData = Array.from(
    { length: Math.floor(Math.random() * 8) + 1 },
    () => [Math.random(), Math.random()]
  );
  drawChart(chartData);
});

const initialData = Array.from(
  { length: Math.floor(Math.random() * 8) + 1 },
  () => [Math.random(), Math.random()]
);
drawChart(initialData);
