let captura="";
let arrayItens = [];
let posArray = 0;
let retornoApi = "";
let posicao = 0;

function salvar(){
    captura = document.getElementById('listid').value 
    if(validaEntrada(captura)){
    arrayItens.push(captura)
    console.log(arrayItens)
    posArray = arrayItens[arrayItens.length-1]
    escreveLista(captura)
    document.getElementById('listid').value =""
    }
}


function deletar(){
   /* splice primeiro e elemento depois e a quantidade a ser removido  */
   arrayItens.splice(posicao,1)
   alert("deletando "+posicao)

    
}

function editar(){

}

function apagarLista(){
    let tabelaId = document.getElementById('areaLista');
    decisao = confirm('Deseja realmente limpar a lista de itens ?')
    if (decisao){
        arrayItens.splice(0,arrayItens.length)
        tabelaId.innerHTML =""
    }
    
}

function escreveLista(item){
    let areaLista = document.getElementById('areaLista');
    let botaoEditar = `<td><i class="fas fa-edit btnedit"></i></td>`
    let botaoDeletar = `<td><i class="fas fa-trash-alt btndelete" onclick=deletar()></i></td>`
        areaLista.innerHTML =""
        for (let i=0; i < arrayItens.length; i++){
            let tr = areaLista.insertRow();

            let td_id = tr.insertCell();
            td_id.innerText = i
            let td_foto = tr.insertCell();
            let td_nome = tr.insertCell();
            td_nome.innerText = arrayItens[i]
            let td_editar = tr.insertCell();
            td_editar.setAttribute("onclick","editar("+i+")")
            td_editar.innerHTML = botaoEditar
            let td_deletar = tr.insertCell();
            
            td_deletar.innerHTML = botaoDeletar
            td_deletar.setAttribute("onclick","deletar("+i+")")
            posicao = i;
            td_id.classList.add('idLista')
        }
}

function validaEntrada(entrada){
    if(entrada == typeof Number || entrada == ""){
       return alert("Informe um Item \n ( Espaço vazio ou numeros nao são aceitos )")
    }else return true
}

/* Funcao que recebe o item e o insere na listagem de itens  
function escreveLista(item){
    return document.getElementById('tabela-item').innerHTML += `<tr>
    <th scope="row">1</th>
    <td><img class="imgtabela" src="testes.length-1"]}</td>
    <td class="linha-tabela">Pao</td>
    
    
    
  </tr>`;
}
*/
