const courseNav = document.querySelector('.all-courses')

document.querySelector('#arrow-right').addEventListener('click', () => {
    courseNav.scrollLeft += 150;
});

document.querySelector('#arrow-left').addEventListener('click', () => {
    courseNav.scrollLeft -= 150;
});