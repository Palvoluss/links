const btnEl = document.querySelector('.btn');
console.log(btnEl)

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
