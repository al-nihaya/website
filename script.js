document.querySelectorAll('a').forEach(function(link) {
link.addEventListener('click', function(e) {
var href = link.getAttribute('href');
if (href.startsWith('#')) {
e.preventDefault();
// Handle main nav active states
if (link.closest('#nav')) {
document.querySelectorAll('#nav a').forEach(function(l) { l.classList.remove('active'); });
link.classList.add('active');
}
// Hide all pages and show target
document.querySelectorAll('.page').forEach(function(page) { page.classList.remove('active'); });
var target = href.substring(1);
document.getElementById(target).classList.add('active');
window.scrollTo(0,0);
}
});
});