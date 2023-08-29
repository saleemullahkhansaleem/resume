

// transition('.home-out', 'home-in');
transition('.hide', 'show');
transition('.hideLeft', 'show');
transition('.hidden', 'show');
  function transition(oldClass, newClass) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
        //   console.log(entry);
          if (entry.isIntersecting) {
            entry.target.classList.add(newClass);
          } else {
            entry.target.classList.remove(newClass);
          }
        });
      });
    
      const hiddenElement = document.querySelectorAll(oldClass);
    
      hiddenElement.forEach((element) => {
        observer.observe(element);
      });
  }

const addpoint = document.getElementById('about');
const profile = document.getElementById('profile');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 300;
    if (scrollPosition >= addpoint.offsetTop){
        profile.classList.add('pro-show');
        profile.classList.remove('pro-hide');
    }
    else if (scrollPosition < addpoint.offsetTop){
        profile.classList.add('pro-hide');
        profile.classList.remove('pro-show');
    }
});
const home = document.getElementById('home');
const pro = document.querySelectorAll('.home-in');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY - 300;
    pro.forEach((pr)=> {
        if (scrollPosition >= home.offsetTop){
            pr.classList.add('home-out');
            pr.classList.remove('home-in');
        }
        else if (scrollPosition < home.offsetTop){
            pr.classList.add('home-in');
            pr.classList.remove('home-out');
        }
    })
});