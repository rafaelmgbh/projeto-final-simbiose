let captura = "";
let arrayItens = [];
let posArray = 0;
let retornoApi = "";
let posicao = 0;
let itemEditado
let id = null;
arrayItens.splice(0, arrayItens.length)

function salvar() {
    captura = document.getElementById('listid').value
    if (validaEntrada(captura) && itemEditado == null) {
        arrayItens.push(captura)
        posArray = arrayItens[arrayItens.length - 1]
        escreveLista()
        document.getElementById('listid').value = ""
    }else {
        arrayItens.splice(id,1,captura)
        escreveLista()
        document.getElementById('listid').value = ""
    }
    itemEditado = null;
}


function deletar(id) {

    /* essa condicao esta pq esta recebendo undefined como primeiro parametro  */
    if (id !== undefined) {
        alert("deletando " + id)
        arrayItens.splice(id, 1)
        escreveLista()
    }
    


}

function editar(id) {
    if (id !== undefined) {
        itemEditado = 1;
        let itemEditar = arrayItens[id];
        document.getElementById("listid").value = itemEditar

    }
   
   
}

function apagarLista() {
    let tabelaId = document.getElementById('areaLista');
    decisao = confirm('Deseja realmente limpar a lista de itens ?')
    if (decisao) {
        arrayItens.splice(0, arrayItens.length)
        tabelaId.innerHTML = ""
    }

}

function escreveLista() {
    let areaLista = document.getElementById('areaLista');
    let botaoEditar = `<td><i class="fas fa-edit btnedit"></i></td>`
    let botaoDeletar = `<td><i class="fas fa-trash-alt btndelete" onclick=deletar()></i></td>`
    areaLista.innerHTML = ""
    for (let i = 0; i < arrayItens.length; i++) {
        let tr = areaLista.insertRow();

        let td_id = tr.insertCell();
        td_id.classList.add("idLista")
        td_id.innerText = i
        let td_foto = tr.insertCell();
        let td_nome = tr.insertCell();
        td_nome.innerText = arrayItens[i]
        let td_editar = tr.insertCell();
        td_editar.setAttribute("onclick", "editar(" + i + ")")
        td_editar.innerHTML = botaoEditar
        let td_deletar = tr.insertCell();

        td_deletar.setAttribute("onclick", "deletar(" + i + ")")
        td_deletar.innerHTML = botaoDeletar;

        td_id.classList.add('idLista')
    }
}

function validaEntrada(entrada) {
    if (entrada == typeof Number || entrada == "") {
        return alert("Informe um Item \n ( Espaço vazio ou numeros nao são aceitos )")
    } else return true
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
