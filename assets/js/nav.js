/* Navigation — hamburger toggle + mobile dropdown */

(function () {
    var hamburger = document.getElementById('nav-hamburger');
    var navList   = document.getElementById('nav-list');

    if (!hamburger || !navList) return;

    /* Hamburger opens/closes the whole nav on mobile */
    hamburger.addEventListener('click', function () {
        var isOpen = navList.classList.toggle('nav-open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* On mobile, parent links with dropdowns toggle their submenu */
    var parentLinks = navList.querySelectorAll('.has-dropdown > a');

    parentLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            /* Only intercept on mobile (hamburger visible) */
            if (window.getComputedStyle(hamburger).display === 'none') return;

            e.preventDefault();
            var dropdown = link.nextElementSibling;
            if (dropdown && dropdown.classList.contains('dropdown')) {
                dropdown.classList.toggle('submenu-open');
            }
        });
    });

    /* Close nav when clicking outside */
    document.addEventListener('click', function (e) {
        if (!navList.contains(e.target) && e.target !== hamburger) {
            navList.classList.remove('nav-open');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}());
