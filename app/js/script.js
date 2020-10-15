document.addEventListener('click', function(e){
    const btn = e.target.closest('.header__burger');
    
    if(!btn) return false

    const   header = btn.closest('.header'),
            header__menuWrapper = header.querySelector('.header__menu-wrapper');

    header__menuWrapper.classList.toggle('header__menu-wrapper_show')
});

document.addEventListener('click', function(e){
    const btn = e.target.closest('.show-popup');
    
    if(!btn) return false

    e.preventDefault()
    alert("popup!")
});
