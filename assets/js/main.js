/* Display Web Language */

const weblang = document.querySelector('.header__weblang-sub');
const menu = document.querySelector('.header__weblang-menu');
menu.onclick = function () {
    if (weblang.classList.contains('display')) {
        weblang.classList.remove('display');
    } else {
        weblang.classList.add('display');
        regSection.classList.remove('display');
    }
}

/* Exchange Dictionary Language */

function SwapDivsWithClick() {
    $('#header__dictlang-en, #header__dictlang-vn').first().before(function(){
    	return $(this).next();
    });
}

/* Display Suggestion Result */

const searchSuggest = document.querySelector('.header__search-result');
const searchBtn = document.querySelector('.header__search__btn');
const searchMobile = document.querySelector('.search-mobile');
const searchCloseMobile = document.querySelector('.search-mobile-head-icon');
const searchMobileBtn = document.querySelector('.search-mobile-head-input');
const mobileSuggest = document.querySelector('.search-mobile-suggest');
var x = window.matchMedia("(max-width: 739px)")

searchBtn.onclick = function () {
    if (x.matches) {
        /* Search-mobile */
        searchMobile.classList.add('display');
        // document.querySelector('body').classList.add('disabled-scroll'); 
    } else {
        if (searchSuggest.classList.contains('display')) {
            searchSuggest.classList.remove('display');
        } else {
            searchSuggest.classList.add('display');
        }
    }
}

searchMobileBtn.onclick = function () {
    mobileSuggest.classList.add('display');
}

searchCloseMobile.onclick = function () {
    searchMobile.classList.remove('display');
    // document.querySelector('body').classList.remove('disabled-scroll'); 
} 


/* Display Search Result */

// const searchResult = document.querySelector('.section-search-result');
// const suggestTerm = document.querySelector('.header__search-result');
// suggestTerm.onclick = function () {
//     searchResult.classList.add('display');
// }

const suggestTerm = document.querySelectorAll('.header__search-result-suggest')
const modal = document.querySelector('.modal_result')
const modalClose = document.querySelector(".modal_result-close")
const modalContainer = document.querySelector(".modal_result-container")
// const img = document.querySelector('.result-img');
// const imgBtn = document.querySelector('.result-img-btn');

function removeSearchResult() {
    modal.classList.remove('open');
}

// function showImg() {
//     if (img.classList.contains('display')) {
//         img.classList.remove('display');
//         imgBtn.innerHTML = "Display Image";
//     } else {
//         img.classList.add('display');
//         imgBtn.innerHTML = "Hide Image";
//     }
// }

for (const term of suggestTerm) {
    term.addEventListener('click', showSearchResult);
}

function showSearchResult() {
    modal.classList.add('open');
    searchSuggest.classList.remove('display');
    mobileSuggest.classList.remove('display');
}

// imgBtn.addEventListener('click', showImg)
modalClose.addEventListener('click', removeSearchResult)
modal.addEventListener('click', removeSearchResult)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
})

/*Expan Word Meaning*/

// const meaning = document.querySelector('.history-item-meaning');
// const expandBtn = document.querySelector('.history-item-expand');
// expandBtn.onclick = function () {
//     if (meaning.classList.contains('display')) {
//         meaning.classList.remove('display');
//     } else {
//         meaning.classList.add('display');
//     }
// }

/*Registration Form*/
const regButton = document.querySelector('.header__weblang-user');
const regSection = document.querySelector('.reg_section')
const regModal = document.querySelector('.reg_form')
const signUpButton = document.querySelector('#signUp');
const signInButton = document.querySelector('#signIn');
const signUpButtonMB = document.querySelector('.signUp-mobile');
const signInButtonMB = document.querySelector('.signIn-mobile');

regButton.onclick = function () {
    if (regSection.classList.contains('display')) {
        regSection.classList.remove('display');
    } else {
        regSection.classList.add('display');
        weblang.classList.remove('display');
    }
}

regSection.addEventListener('click', (event) => {
    if (!event.target.closest('.reg_form')) {
      regSection.classList.remove('display');
    }
  });

signUpButton.onclick = function () {
	regModal.classList.add('right-panel-active');
}

signInButton.onclick = function () {
	regModal.classList.remove('right-panel-active');
}

signUpButtonMB.onclick = function () {
	regModal.classList.add('right-panel-active');
}

signInButtonMB.onclick = function () {
	regModal.classList.remove('right-panel-active');
}

/* Add/ Edit term*/
const addSection = document.querySelector('.add-term_section');
const addButton = document.querySelector('.header_user-add-button');
const submitButton = document.querySelector('.form-submit')

addButton.onclick = function () {
    regSection.classList.remove('display');
	addSection.classList.add('display');
}

addSection.addEventListener('click', (event) => {
    if (!event.target.closest('.reg_form')) {
        addSection.classList.remove('display');
    }
});

const editButton = document.querySelector('.result-edit-btn')

editButton.onclick = function () {
    modal.classList.remove('open');
	addSection.classList.add('display');
}

submitButton.onclick = function () {
	addSection.classList.remove('display');
}

/* Display Guideline Mobile*/
const guideMobile = document.querySelector('.guideline_mobile');
const guideClose = document.querySelector('.modal_guide-close');
var x = window.matchMedia("(max-width: 739px)")
if (x.matches) {
    guideMobile.classList.add('display');
}

guideClose.onclick = function () {
    guideMobile.classList.remove('display');
}


