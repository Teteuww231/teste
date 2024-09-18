document.getElementById("consultar").addEventListener("click", function() {
    const cep = document.getElementById("cep").value;
    const loading = document.getElementById("loading");
    const resultado = document.getElementById("resultado");
    const logradouro = document.getElementById("logradouro");
    const bairro = document.getElementById("bairro");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");
    
    if (!cep) {
        alert("Por favor, digite um CEP.");
        return;
    }

    loading.classList.remove("hidden");
    resultado.classList.add("hidden");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            loading.classList.add("hidden");
            if (data.erro) {
                alert("CEP não encontrado.");
                return;
            }

            logradouro.textContent = data.logradouro;
            bairro.textContent = data.bairro;
            cidade.textContent = data.localidade;
            estado.textContent = data.uf;

            resultado.classList.remove("hidden");
        })
        .catch(error => {
            loading.classList.add("hidden");
            alert("Erro ao consultar o CEP.");
        });
});
