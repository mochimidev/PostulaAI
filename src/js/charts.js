export function drawRadarChart(canvas, points, theme) {
  const context = canvas.getContext("2d");
  const rect = canvas.getBoundingClientRect();
  const pixelRatio = window.devicePixelRatio || 1;
  canvas.width = rect.width * pixelRatio;
  canvas.height = rect.height * pixelRatio;
  context.scale(pixelRatio, pixelRatio);

  const width = rect.width;
  const height = rect.height;
  const centerX = width / 2;
  const centerY = height / 2 + 8;
  const radius = Math.min(width, height) * 0.31;
  const sides = points.length;

  context.clearRect(0, 0, width, height);
  context.lineWidth = 1;
  context.font = "600 12px Inter, sans-serif";

  for (let level = 1; level <= 4; level += 1) {
    const levelRadius = (radius / 4) * level;
    context.beginPath();
    for (let index = 0; index < sides; index += 1) {
      const angle = getAngle(index, sides);
      const x = centerX + Math.cos(angle) * levelRadius;
      const y = centerY + Math.sin(angle) * levelRadius;
      index === 0 ? context.moveTo(x, y) : context.lineTo(x, y);
    }
    context.closePath();
    context.strokeStyle = theme.grid;
    context.stroke();
  }

  points.forEach((point, index) => {
    const angle = getAngle(index, sides);
    const x = centerX + Math.cos(angle) * (radius + 28);
    const y = centerY + Math.sin(angle) * (radius + 28);
    context.fillStyle = theme.text;
    context.textAlign = x < centerX - 8 ? "right" : x > centerX + 8 ? "left" : "center";
    context.fillText(point.label, x, y);
  });

  context.beginPath();
  points.forEach((point, index) => {
    const angle = getAngle(index, sides);
    const valueRadius = radius * (point.value / 100);
    const x = centerX + Math.cos(angle) * valueRadius;
    const y = centerY + Math.sin(angle) * valueRadius;
    index === 0 ? context.moveTo(x, y) : context.lineTo(x, y);
  });
  context.closePath();
  context.fillStyle = theme.fill;
  context.strokeStyle = theme.stroke;
  context.lineWidth = 2;
  context.fill();
  context.stroke();
}

function getAngle(index, sides) {
  return -Math.PI / 2 + (Math.PI * 2 * index) / sides;
}
