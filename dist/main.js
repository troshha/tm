const iconToggle = document.querySelectorAll('#faq .card-link');
const icon = document.querySelectorAll('#accordion i');
const cards = document.querySelectorAll('#faq .collapse');
const scrollTop = document.getElementById('scrollTop');

window.onscroll = function() {
  scrollFunction();
};

scrollTop.addEventListener('click', topFunction);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = 'block';
  } else {
    scrollTop.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

iconToggle.forEach(toggler => {
  toggler.addEventListener('click', e => {
    const i = e.target.nextElementSibling;

    let ariaAtr = e.target.getAttribute('aria-expanded');

    if (ariaAtr == 'false') {
      i.classList.remove('material-icons-add_circle');
      i.classList.add('material-icons-remove_circle');
    } else {
      i.className = 'material-icons-add_circle md-24 ml-3 ';
    }
  });
});
