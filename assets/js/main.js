

/**------------------User Sub------------------ */
const userSub = document.querySelector('.header__weblang-sub');
const user = document.querySelector('.header__weblang-menu');
user.onclick = function () {
    if (userSub.classList.contains('display')) {
        userSub.classList.remove('display');
    } else {
        userSub.classList.add('display');
    }
}

const searchResult = document.querySelector('.header__search-result');
const searchButton = document.querySelector('.header__search__btn');
searchButton.onclick = function () {
    if (searchResult.classList.contains('display')) {
        searchResult.classList.remove('display');
    } else {
        searchResult.classList.add('display');
    }
}