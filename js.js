

var nomeApi = "";
var emailApi = "";
let arrayItens = [];
let itemEditado = 0;
let posItemEdit = 0;
let arrayApi = [""];



function salvar() {
    let posArray = 0;

    captura = document.getElementById('listid').value
    /*condicao para verificar se esta salvando item editado 
    ou criando um novo item  */
    if (validaEntrada(captura) && itemEditado == 0) {
        arrayItens.push(captura)
        posArray = arrayItens[arrayItens.length - 1]
        escreveLista()
        document.getElementById('listid').value = ""

       
    } else {

        arrayItens.splice(posItemEdit, 1, captura)
        escreveLista()
        alert("Alteração Feita com Sucesso ! ")
    }
    itemEditado = 0;
}


function deletar(id) {

    /* essa condicao esta pq esta recebendo undefined como primeiro parametro  */
    if (id !== undefined) {
        alert("deletando " + id)
        arrayItens.splice(id, 1)
        escreveLista()
    }



}

function editar(indice) {
    if (indice !== undefined) {
        itemEditado = 1;
        let itemEditar = arrayItens[indice];
        document.getElementById("listid").value = itemEditar
    }
    return posItemEdit = indice

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
        td_foto.id = (`id${i}`)
        td_foto.innerText = (`${nomeApi} \n ${emailApi}`) 

        let td_nome = tr.insertCell();
        td_nome.innerHTML = arrayItens[i]
        let td_editar = tr.insertCell();
        td_editar.setAttribute("onclick", "editar(" + i + ")")
        td_editar.innerHTML = botaoEditar
        let td_deletar = tr.insertCell();

        td_deletar.setAttribute("onclick", "deletar(" + i + ")")
        td_deletar.innerHTML = botaoDeletar;

        td_id.classList.add('idLista')

        fetch('https://randomuser.me/api/?results=1')
        .then((resp) => resp.json())
        .then(function (data) {
            let authors = data.results;
            return authors.map(function (author) {
                   
               nomeApi = (author.name.first);

                emailApi = (author.email)
            })
        })
        .catch(function (error) {
            console.log(error);
        });

    }
}

function validaEntrada(entrada) {
    if (typeof entrada === Number || entrada == "") {
        return alert("Informe um Item \n ( Espaço vazio ou numeros nao são aceitos )")
    } else return true
}







