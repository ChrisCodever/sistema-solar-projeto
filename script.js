document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a');

  links.forEach(function (link) {
    link.addEventListener('mouseenter', function () {
      this.classList.add('rocket-cursor');
    });

    link.addEventListener('mouseleave', function () {
      this.classList.remove('rocket-cursor');
    });
  });
});
