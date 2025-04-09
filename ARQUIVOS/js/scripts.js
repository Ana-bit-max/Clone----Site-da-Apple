const buttons = document.querySelectorAll("#image-picker li"); // Corrigido o ID
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e); // Agora mostra o evento, não uma string

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.currentTarget; // Garante que estamos pegando o <li>

        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    });
});