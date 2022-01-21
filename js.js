let pessoas = [
    {}
];
pessoas.shift()
apiConsumo()

let nomeApi = "";
let emailApi = "";
let retornoApi = "";
let bbb = "";

let arrayItens = [];
let itemEditado = 0;

let posItemEdit = 0;
let arrayApi = [""];
let contadorId = 0;



function salvar() {
    let posArray = 0;
    captura = document.getElementById('listid').value
    if (validaEntrada(captura) && itemEditado == 0) {
        arrayItens.push(captura)
        posArray = arrayItens[arrayItens.length - 1]

        apiConsumo()

        escreveLista()
        document.getElementById('listid').value = ""
        itemEditado = 0;
    } else if (validaEntrada(captura)) {
        arrayItens.splice(posItemEdit, 1, captura)
        escreveLista()
        alert("Alteração Feita com Sucesso ! ")
        itemEditado = 0;
        limpaCampo()
    }
    else {
        alert("Digite um item válido ")
    }
}

function detectaEnter() {
    $('#listid').keydown(function (e) {
        if (e.which == 13) {
            salvar()
        }
    })
}


/* essa condicao esta pq esta recebendo undefined como primeiro parametro  */
function deletar(id) {
    if (id !== undefined) {
        alert("deletando " + id)
        arrayItens.splice(id, 1)
        pessoas.splice(id, 1)
        escreveLista()
        limpaCampo()
    }
}

/*
function editar(indice) {
    if (indice !== undefined) {
        itemEditado = 1;
       let itemEditar = arrayItens[indice]

        document.getElementById("listid").innerHTML = itemEditar
    }
    return posItemEdit = indice

}
*/


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
        pessoas.splice(0,pessoas.length)
        tabelaId.innerHTML = ""
        apiConsumo()
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
        td_foto.innerHTML = (`${pessoas[i].nomeAp} <br> E: ${pessoas[i].emailAp}`)
        let td_nome = tr.insertCell();
        td_nome.innerHTML = arrayItens[i]
        let td_editar = tr.insertCell();
        td_editar.setAttribute("onclick", "editar(" + i + ")")
        td_editar.innerHTML = botaoEditar
        let td_deletar = tr.insertCell();
        td_deletar.setAttribute("onclick", "deletar(" + i + ")")
        td_deletar.innerHTML = botaoDeletar;
        td_id.classList.add('idLista')

    }

}

/* A validacao para vazio esta funcionando porem a validacao para numero nao esta */
function validaEntrada(entrada) {
    if (entrada == "") {
        return false
        /* alert("Informe um Item \n ( Espaço vazio ou numeros nao são aceitos )") */
    } else return true
}


function apiConsumo() {
    fetch('https://randomuser.me/api/?results=1')
        .then((resp) => resp.json())
        .then(function (data) {
            let authors = data.results;
            return authors.map(function (author) {
                let nomeAp = (author.name.first);
                let emailAp = (author.email)           
                pessoas.push({ emailAp, nomeAp });
                console.log(pessoas)
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

function limpaCampo() {
    document.getElementById("listid").value = ""
}