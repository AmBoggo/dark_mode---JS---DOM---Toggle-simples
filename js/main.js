const btn = document.getElementById("btn")
const corpo = document.querySelector('body')
btn.addEventListener('click', (e) => {
    corpo.classList.toggle("dark-mode");
})

//resposta oficial:
// document.querySelector("#btn").addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode")
// })