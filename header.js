const header = document.querySelector('.top-header');
const burger = document.querySelector('.header-links');
let lastScroll = 0;


/* Avoids lag */
/* https://daily-dev-tips.com/posts/show-and-hide-a-header-based-on-scroll-direction /*/
const throttle = (func, time = 100) => {
  let lastTime = 0;
  return () => {
    const now = new Date();
    if (now - lastTime >= time) {
      func();
      time = now;
    }
  };
};

const validateHeader = () => {
    const windowY = window.scrollY;
    const windowH = window.innerHeight;
    let burgerDisplay = window.getComputedStyle(burger,null).visibility;

    if (burgerDisplay === 'visible') {
        header.classList.add('scroll-up');
        if (windowY > windowH) {
            // We passed the first section, set a toggable class
            header.classList.add('is-fixed');
        } else {
            header.classList.remove('is-fixed', 'can-animate');
        }
        lastScroll = windowY;
        return
    } else if (burgerDisplay === 'none') {
        header.classList.add('scroll-up');
    }

    if (windowY > windowH) {
        // We passed the first section, set a toggable class
        header.classList.add('is-fixed');
    } else {
        header.classList.remove('is-fixed', 'can-animate');
    }

    if (windowY < lastScroll) {
        header.classList.add('scroll-up');
    } else {
        header.classList.remove('scroll-up');
    }

    // Determine is we ready to animate
    if (windowY > windowH + 40) {
        header.classList.add('can-animate');
    } else {
        header.classList.remove('scroll-up');
    }

    lastScroll = windowY;
}

window.addEventListener('scroll',throttle(validateHeader,100));
