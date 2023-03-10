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

        //PASSANDO OS VALORES RECEBIDOS PARA OS COMPONENTES NA TELA
        foto.src = personagem.image
        nome.innerHTML = personagem.name

        
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