const manageVideo1 = () => {
  const buttonVideo = document.querySelector('.feedback__button--1');
  const video = document.querySelector('.feedback__video--1');
  const iframeBlock = video.querySelector('[data-video-container1]');

  const createIframe = (block) => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', block.dataset.src);

    return iframe;
  };

  const playVideo1 = () => {
    if (video && iframeBlock) {
      buttonVideo.addEventListener('click', () => {
        buttonVideo.style.display = 'none';
        video.style.display = 'block';
        const newIframe = createIframe(iframeBlock);
        iframeBlock.append(newIframe);
      });
    }
  };
  playVideo1()
}
manageVideo1()

const manageVideo2 = () => {
  const buttonVideo = document.querySelector('.feedback__button--2');
  const video = document.querySelector('.feedback__video--2');
  const iframeBlock = video.querySelector('[data-video-container2]');

  const createIframe = (block) => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', block.dataset.src);

    return iframe;
  };

  const playVideo2 = () => {
    if (video && iframeBlock) {
      buttonVideo.addEventListener('click', () => {
        buttonVideo.style.display = 'none';
        video.style.display = 'block';
        const newIframe = createIframe(iframeBlock);
        iframeBlock.append(newIframe);
      });
    }
  };
  playVideo2()
}
manageVideo2()

const manageVideo3 = () => {
  const buttonVideo = document.querySelector('.feedback__button--3');
  const video = document.querySelector('.feedback__video--3');
  const iframeBlock = video.querySelector('[data-video-container3]');

  const createIframe = (block) => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', block.dataset.src);

    return iframe;
  };

  const playVideo3 = () => {
    if (video && iframeBlock) {
      buttonVideo.addEventListener('click', () => {
        buttonVideo.style.display = 'none';
        video.style.display = 'block';
        const newIframe = createIframe(iframeBlock);
        iframeBlock.append(newIframe);
      });
    }
  };
  playVideo3()
}
manageVideo3();

const manageVideo4 = () => {
  const buttonVideo = document.querySelector('.video__button');
  const video = document.querySelector('.video__track-container');
  const iframeBlock = video.querySelector('[data-video-container4]');

  const createIframe = (block) => {
    const iframe = document.createElement('iframe');
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', block.dataset.src);

    return iframe;
  };

  const playVideo4 = () => {
    if (video && iframeBlock) {
      buttonVideo.addEventListener('click', () => {
        buttonVideo.style.display = 'none';
        video.style.display = 'block';
        const newIframe = createIframe(iframeBlock);
        iframeBlock.append(newIframe);
      });
    }
  };
  playVideo4()
}
manageVideo4();

//Свайпер

const initsliderSwiper = () => {
  const sliderSwiper = new Swiper('.slider__swiper', {
    spaceBetween: 25,
    pagination: {
      el: '.swiper-pagination',
    },
  })
  return sliderSwiper
}

initsliderSwiper()

//аккордеон

const manageAnswer = () => {
  const question = document.querySelectorAll('.accordeon__question');
  const answer = document.querySelectorAll('.accordeon__answer');
  const questions = Array.from(question);
  const answers = Array.from(answer);
  const item = document.querySelectorAll('.accordeon__item');
  const list = Array.from(item);
  const block = document.querySelector('.accordeon__list');

  for (let i = 0; i < questions.length; i++) {

    const openAnswer = () => {
      answers[i].classList.remove('accordeon__answer--closed');
      answers[i].classList.add('accordeon__answer--opened');
      questions[i].removeEventListener('click', openAnswer);
      questions[i].addEventListener('click', closeAnswer);
      questions[i].classList.add('accordeon__question--active');
      questions[i].classList.remove('accordeon__question--closed');
      block.addEventListener('click', closeOnOpen);
    }

    function closeOnOpen(e) { //Закрытие ответа при открытии другого ответа
      if (!list[i].contains(e.target) && answers[i].classList.contains('accordeon__answer--opened')) {
        closeAnswer()
      }
    }

    const closeAnswer = () => {
      answers[i].classList.add('accordeon__answer--closed');
      answers[i].classList.remove('accordeon__answer--opened');
      questions[i].addEventListener('click', openAnswer);
      questions[i].removeEventListener('click', closeAnswer);
      block.removeEventListener('click', closeOnOpen);
      questions[i].classList.remove('accordeon__question--active');
      questions[i].classList.add('accordeon__question--closed');
    }
    questions[i].addEventListener('click', openAnswer);
  }
}

manageAnswer()

//текст

const ManageText = () => {
  const hiddenText = document.querySelector('.use__more');
  const buttonShowText = document.querySelector('.use__button-open');
  const buttonHideText = document.querySelector('.use__button-close');

  const showText = () => {
    hiddenText.classList.remove('use__more--hidden');
    hiddenText.classList.add('use__more--open');
    buttonShowText.removeEventListener('click', showText);
    buttonShowText.setAttribute('style', 'display:none');
    buttonHideText.addEventListener('click', HideText)
  }

  const HideText = () => {
    hiddenText.classList.add('use__more--hidden');
    hiddenText.classList.remove('use__more--open');
    buttonShowText.setAttribute('style', 'display:block');
    buttonHideText.removeEventListener('click', HideText);
    buttonShowText.addEventListener('click', showText)
  }

  buttonShowText.addEventListener('click', showText)
}

ManageText()

//меню
const handleMenu = () => {
  const buttonOpen = document.querySelector('.main-header__button');
  const buttonClose = document.querySelector('.main-header__button-close');
  const menu = document.querySelector('.main-header__nav');
  const menuContent = document.querySelector('.main-header__list');
  const breakpoint = window.matchMedia('(max-width: 767px)');
  const page = document.querySelector('body');

  const openMenu = () => {
    menu.classList.add('main-header__nav--opened');
    menu.classList.remove('main-header__nav--closed');
    buttonOpen.classList.remove('main-header__button--opened');
    buttonOpen.classList.add('main-header__button--closed');
    buttonClose.classList.add('main-header__button-close--opened');
    buttonClose.classList.remove('main-header__button-close--closed');
    buttonOpen.removeEventListener('click', openMenu);
    buttonClose.addEventListener('click', closeMenu);
    menu.addEventListener('click', closeOnoverflow);
    window.addEventListener('resize', changeSize);
    page.style.overflow = 'hidden';
  }

  const closeMenu = () => {
    menu.classList.remove('main-header__nav--opened');
    menu.classList.add('main-header__nav--closed');
    buttonOpen.classList.add('main-header__button--opened');
    buttonOpen.classList.remove('main-header__button--closed');
    buttonClose.classList.remove('main-header__button-close--opened');
    buttonClose.classList.add('main-header__button-close--closed');
    buttonOpen.addEventListener('click', openMenu);
    menu.removeEventListener('click', closeOnoverflow);
    page.style.overflow = 'auto';
  }

  const changeSize = () => {
    if (!breakpoint.matches) {
      closeMenu();
    }
  }

  function closeOnoverflow(e) {
    if (!menuContent.contains(e.target)) {
      closeMenu()
    }
  }

  buttonOpen.addEventListener('click', openMenu)
}

handleMenu()