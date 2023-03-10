// 0 - Adicionar evento em botão para executar contexto da função
async function executar(){

    // PEGANDO OS VALORES DOS INPUTS
    let total = 0
    const valor1 = document.getElementById("idPersonagem")

    // PASSANDO PARA NUMERO - TENDO CERTEZA QUE SÃO NUMEROS E NÃO TEXTO PARA CONCATENAR
    const value1 = Number(valor1.value)

    //VERIFICANDO SE É VALIDO
    if (isNaN(value1)) {
        alert("Você pode digitar apenas numeros!")   
    }
    
    else if ((value1 > 0) && (value1 < 827)) {
        //SE O VALOR ESTIVER ENTRE 1 E 826 SEGUE

        // PEGANDO O ID DO PERSONAGEM
        const id = valor1.value 

        //BUSCANDO O PERSONAGEM
        const personagem = await buscarPersonagemDaAPI(id)

        //PEGANDO ELEMENOTOS DO RETORNO CONFORME DOCUMENTAÇÃO
        const foto = document.getElementById("imgPersonagem")
        const nome = document.getElementById("nomePersonagem")
        const Perstatus = document.getElementById("Perstatus")
        const Perspecies = document.getElementById("Perspecies")
        const Pertipo = document.getElementById("Pertipo")
        const Pergenero = document.getElementById("Pergenero")
        const Perorigem = document.getElementById("Perorigem")
        const Perlocal = document.getElementById("Perlocal")





        //PASSANDO OS VALORES RECEBIDOS PARA OS COMPONENTES NA TELA
        foto.src = personagem.image
        nome.innerHTML = `Nome: ${personagem.name}`

            //traduzindo o Status
            if (personagem.status = 'Alive') {
                personagem.status = 'Vivo'
            } else if (personagem.status = 'Dead') {
                personagem.status = 'Morto'
            } else {
                personagem.status = 'Desconhecido'
            }

        Perstatus.innerHTML = `Status: ${personagem.status}`
        Perspecies.innerHTML = `Espécie: ${personagem.species}`
        Pertipo.innerHTML = `Tipo: ${personagem.type}`

            //traduzindo o genero
            if (personagem.gender === 'Female') {
                personagem.gender = 'Feminino'
            } else if (personagem.gender === 'Male') {
                personagem.gender = 'Masculino'
            } else if (personagem.gender === 'Genderless') {
                personagem.gender = 'Sem Gênero'
            } else {
                personagem.gender = 'Desconhecido'
            }


        Pergenero.innerHTML = `Genero: ${personagem.gender}`
        Perorigem.innerHTML = `Origem: ${personagem.origin.name}`
        Perlocal.innerHTML = `Localização: ${personagem.location.name}`

        
        //EXIBINDO A DIV QUE MOSTRA O PERSONAGEM RETORNADO
        pegadiv = document.getElementById("resultado")
        pegadiv.style.display = 'inline'         

    } else {
        alert("Lembre-se, um numero entre 1 e 826. Você digitou " + value1) 
    }

}


/* Função para fazer uma request GET para a API utilizando o JS 
   Veremos logo em seguida! Foquem na leitura do Objeto na função acima.
*/
async function buscarPersonagemDaAPI(id){
    const url = `https://rickandmortyapi.com/api/character/${id}`

    const response = await fetch(url)
    return response.json()
}