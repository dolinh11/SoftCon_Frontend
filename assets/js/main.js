/* Display Web Language */

const userSub = document.querySelector('.header__weblang-sub');
const user = document.querySelector('.header__weblang-menu');
user.onclick = function () {
    if (userSub.classList.contains('display')) {
        userSub.classList.remove('display');
    } else {
        userSub.classList.add('display');
    }
}

/* Exchange Dictionary Language */

function SwapDivsWithClick() {
    $('#header__dictlang-en, #header__dictlang-vn').first().before(function(){
    	return $(this).next();
    });
}

/* Display Search Result */

const searchResult = document.querySelector('.header__search-result');
const searchBtn = document.querySelector('.header__search__btn');
searchBtn.onclick = function () {
    if (searchResult.classList.contains('display')) {
        searchResult.classList.remove('display');
    } else {
        searchResult.classList.add('display');
    }
}

/*Expan Word Meaning*/

const meaning = document.querySelector('.history-item-meaning');
const expandBtn = document.querySelector('.history-item-expand');
expandBtn.onclick = function () {
    if (meaning.classList.contains('display')) {
        meaning.classList.remove('display');
    } else {
        meaning.classList.add('display');
    }
}