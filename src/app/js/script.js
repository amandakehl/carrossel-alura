const courseNav = document.querySelector('.all-courses')

document.querySelector('#arrow-right').addEventListener('click', () => {
    if (courseNav) {
        courseNav.scrollLeft += 300;
    }
});

document.querySelector('#arrow-left').addEventListener('click', () => {
    if (courseNav) {
        courseNav.scrollLeft -= 300;
    }
});