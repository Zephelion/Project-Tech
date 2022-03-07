const signIn = document.getElementById('secondary');
const section = document.querySelector('.options');

console.log(section);

signIn.addEventListener('click', () => {
    section.classList.add('fade');
    console.log("nu moet de section extenden");
})
