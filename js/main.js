// ============ Abram Associates SARL — site scripts ============

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var burger = document.querySelector('.hamburger');
  var links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', function (e) {
      e.stopPropagation();
      links.classList.toggle('open');
      burger.classList.toggle('active');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        burger.classList.remove('active');
      });
    });
    // Close the drawer when clicking anywhere outside it
    document.addEventListener('click', function (e) {
      if (links.classList.contains('open') &&
          !links.contains(e.target) &&
          !burger.contains(e.target)) {
        links.classList.remove('open');
        burger.classList.remove('active');
      }
    });
    // Close the drawer on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        links.classList.remove('open');
        burger.classList.remove('active');
      }
    });
  }

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Simple client-side check on contact form (real send handled by FormSubmit)
  var form = document.getElementById('quote-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var required = form.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function (field) {
        if (!field.value.trim()) valid = false;
      });
      if (!valid) {
        e.preventDefault();
        alert('Please fill in all required fields before submitting.');
      }
    });
  }
});

/**
 * Image fallback: if an image file has not been uploaded yet (404),
 * swap it for a labelled placeholder showing the exact dimensions
 * to design in Canva. Once real images are uploaded to /images/,
 * this placeholder disappears automatically.
 */
function imgFallback(img, label, w, h) {
  var div = document.createElement('div');
  div.className = 'img-placeholder';
  div.style.aspectRatio = w + '/' + h;
  div.innerHTML = '<span>' + label + '<span class="dim">' + w + ' × ' + h + ' px</span></span>';
  img.replaceWith(div);
}
