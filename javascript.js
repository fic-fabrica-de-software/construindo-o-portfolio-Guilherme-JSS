const foguete = document.getElementById('foguete');

let seguir = false;

foguete.addEventListener('mouseenter', () => {
    seguir = true;
})

foguete.addEventListener('mouseleave', () => {
    seguindo = false
})

document.addEventListener('mousemove', (e) => {
    if (seguindo) {
        const x = e.clientX 
        const y = e.clientY
        foguete.style.transform = `translate(${x}px, ${y}px)`;
    }
})