(function () {
  function drawPlaceholder() {
    var canvas = document.getElementById('unity-canvas');
    if (!canvas) {
      return;
    }

    var context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    var width = canvas.width;
    var height = canvas.height;

    context.clearRect(0, 0, width, height);

    var gradient = context.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#1e3a8a');
    gradient.addColorStop(1, '#0f172a');
    context.fillStyle = gradient;
    context.fillRect(0, 0, width, height);

    context.fillStyle = '#f8fafc';
    context.font = '48px Inter, Arial, sans-serif';
    context.textAlign = 'center';
    context.fillText('Unity WebGL Build Placeholder', width / 2, height / 2 - 20);

    context.font = '24px Inter, Arial, sans-serif';
    context.fillText('Replace with the exported build files from Unity.', width / 2, height / 2 + 30);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', drawPlaceholder);
  } else {
    drawPlaceholder();
  }
})();
