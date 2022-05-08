const courseNav = document.querySelector('.all-courses')

document.querySelector('#arrow-right').addEventListener('click', () => {
    courseNav.scrollLeft += 300;
});

document.querySelector('#arrow-left').addEventListener('click', () => {
    courseNav.scrollLeft -= 300;
});