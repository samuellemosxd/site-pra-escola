
emailjs.init("z0BfZnlgQGZDZkNEa");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 


    emailjs.sendForm("escola", "template_av1ytoj", this)
        .then(function(response) {
           
            document.querySelector("main").innerHTML = `
                <h2>O e-mail foi enviado com sucesso (não que eu vá ler)</h2>
                <button onclick="location.href='index.html'">Voltar para a Página Inicial</button>
            `;
        }, function(error) {
            alert("Ocorreu um erro ao enviar a mensagem.");
        });
});
