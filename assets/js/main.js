

/**------------------User Sub------------------ */
const userSub = document.querySelector('.header__right-user-sub');
const user = document.querySelector('.header__right-user');
user.onclick = function () {
    if (userSub.classList.contains('display')) {
        userSub.classList.remove('display');
    } else {
        userSub.classList.add('display');
    }
}
