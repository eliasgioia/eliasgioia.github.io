  window.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineLine = document.getElementById('timeline-line');

    const totalItems = timelineItems.length;

    timelineItems.forEach((item, index) => {
      setTimeout(() => {
        const dot = item.querySelector('.timeline-dot');
        dot.classList.add('visible');

        const itemOffset = item.offsetTop + item.offsetHeight / 2;
        timelineLine.style.height = `${itemOffset}px`;
      }, index * 500); // animación secuencial
    });
  });
