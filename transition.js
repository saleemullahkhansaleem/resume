

// transition('.home-out', 'home-in');
transition('.hide', 'show');
transition('.hidden-left', 'show');
transition('.hidden-right', 'show');
transition('.skill-progress-bar', 'skill-animation');
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
const proBtn = document.getElementById('pro-ball');

window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY + 300;
    if (scrollPosition >= addpoint.offsetTop){
        profile.classList.add('pro-show');
        proBtn.classList.add('pro-show');
        profile.classList.remove('pro-hide');
        proBtn.classList.remove('pro-hide');
    }
    else if (scrollPosition < addpoint.offsetTop){
        profile.classList.add('pro-hide');
        proBtn.classList.add('pro-hide');
        profile.classList.remove('pro-show');
        proBtn.classList.remove('pro-show');
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