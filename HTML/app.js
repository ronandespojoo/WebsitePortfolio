// for hovering in navbar 
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu') 

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}); 

// Wave Animation for P Main Content
const animatedTexts = document.querySelectorAll('.main__content p'); 
animatedTexts.forEach(animatedText => {
    if (animatedText) {
        const text = animatedText.textContent; 
        animatedText.innerHTML = text
            .split(' ')
            .map((word, i) => `<span style="animation-delay: ${i * 0.01}s">${word}</span>`)
            .join(' ');
            
        animatedText.addEventListener('mouseenter', () => {
            animatedText.classList.add('wave-active');
        });


    }
});

// For 'Development Experience' h1
const animatedText = document.querySelector('.languages h1');
if (animatedText) {
    const text= animatedText.textContent; 
    animatedText.innerHTML = text 
    .split(' ')
    .map((word, i) => `<span style="animation-delay: ${i * 0.1}s">${word}</span>`)
    .join(' ');

    animatedText.addEventListener('mouseenter', () => {
        animatedText.classList.add('wave-active');
    })

 
}

/* Perfect Wave Animation
const animatedText = document.querySelector('.main__content p'); 
if (animatedText) {
    const text = animatedText.textContent; 
    animatedText.innerHTML = text
    .split(' ')
    .map((word, i) =>  `<span style="animation-delay: ${i * 0.2}s">${word}</span>`)
    .join(' ');
    
    animatedText.addEventListener('mouseenter', () => {
        animatedText.classList.add('wave-active');
    });

    animatedText.addEventListener('mouseleave', () => {
        animatedText.classList.remove('wave-active');
    })
    } */

    /* Super Wavy Animation
    // Split by words first, then characters
animatedText.innerHTML = text
    .split(' ')
    .map(word => {
        return word.split('').map((char, i) => 
            `<span style="animation-delay: ${i * 0.1}s">${char}</span>`
        ).join('');
    })
    .join(' '); */