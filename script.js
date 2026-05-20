(function () {
  'use strict';

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Seoul clock ----------
  function tick() {
    try {
      var fmt = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Seoul',
      });
      var parts = fmt.format(new Date()).split(':');
      var el = document.getElementById('clock');
      if (el) el.innerHTML = parts[0] + '<span class="sep">:</span>' + parts[1];
    } catch (e) {}
  }
  tick();
  setInterval(tick, 1000 * 30);

  // ---------- Staggered reveal on scroll ----------
  var revealables = document.querySelectorAll('.tile, .section-head');
  if (reduce) {
    revealables.forEach(function (t) { t.classList.add('in'); });
  } else if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      var visible = entries.filter(function (e) { return e.isIntersecting; });
      visible.sort(function (a, b) {
        return a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top;
      });
      visible.forEach(function (e, i) {
        var t = e.target;
        setTimeout(function () { t.classList.add('in'); }, i * 40);
        io.unobserve(t);
      });
    }, { threshold: 0, rootMargin: '300px 0px 300px 0px' });
    revealables.forEach(function (t) { io.observe(t); });
  } else {
    revealables.forEach(function (t) { t.classList.add('in'); });
  }

  // Failsafe: ensure every tile is visible within ~1s of page load,
  // even if the observer is delayed (e.g. heavy fonts, headless screenshots).
  window.addEventListener('load', function () {
    setTimeout(function () {
      document.querySelectorAll('.tile:not(.in), .section-head:not(.in)')
        .forEach(function (t) { t.classList.add('in'); });
    }, 900);
  });

})();
