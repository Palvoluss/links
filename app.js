const btnEl = document.querySelector('.btn');

const toggleOpts = () => {
  const wrapperEl = document.querySelector(".wrapper");

  const iconEl = document.querySelector("i");

  wrapperEl.classList.toggle("active");

  if (iconEl.classList.contains("ri-share-line")) {
    iconEl.classList.replace("ri-share-line", "ri-close-line");
  } else {
    iconEl.classList.replace("ri-close-line", "ri-share-line");
  }
};

if (btnEl) btnEl.addEventListener('click', toggleOpts);

console.log({
    version: '1.0',
    credits: {
        inspiration: 'https://www.craftz.dog',
        icons: 'https://icon8.it'
    },
    messageForHeker:'Ottimo, vuoi provare a fare l\'heker eh! Beh qui non troverai niente xoxo'
})
