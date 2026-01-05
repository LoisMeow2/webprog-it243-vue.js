document.addEventListener('DOMContentLoaded', () => {
  const decals = document.querySelectorAll('.decal');
  let activeDecal = null;

  decals.forEach(decal => {
    decal.addEventListener('dragstart', () => {
      activeDecal = decal;
      decal.classList.add('dragging');
    });

    decal.addEventListener('dragend', () => {
      decal.classList.remove('dragging');
      activeDecal = null;
    });
  });

  document.addEventListener('dragover', e => {
    e.preventDefault();
  });

  document.addEventListener('drop', e => {
    e.preventDefault();
    if (!activeDecal) return;

    activeDecal.style.position = 'fixed';
    activeDecal.style.left = `${e.clientX - activeDecal.offsetWidth / 2}px`;
    activeDecal.style.top = `${e.clientY - activeDecal.offsetHeight / 2}px`;
  });
});
