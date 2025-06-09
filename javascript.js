const foguete = document.getElementById('foguete');
let seguir = false;

foguete.addEventListener('mouseenter', () => {
    seguir = true;
})

foguete.addEventListener('mouseleave', () => {
    seguindo = false ;
})

document.addEventListener('mousemove', (e) => {
    if (seguir) {
        const x = e.clientX  ;
        const y = e.clientY ;
        foguete.style.top = `${y}px`;
        foguete.style.left = `${x}px`;
    }
});