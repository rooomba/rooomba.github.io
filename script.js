const jstoggle = document.getElementById("jstoggle");
jstoggle.addEventListener('click', () => {
  const animations = document.querySelectorAll('[data-animation]');
  animations.forEach(animation => {
    const running = animation.style.animationDuration || '45s';
    animation.style.animationDuration = running === '45s' ? '0s' : '45s';
  })
});
