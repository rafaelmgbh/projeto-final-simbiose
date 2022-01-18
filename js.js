let captura="";
arrayItens = "";
function salvar(){
    captura = document.getElementById('listid').value 
    arrayItens +=captura
    console.log(arrayItens)
    escreveLista(captura)
}

function escreveLista(item){
    return document.getElementById('tabela-item').innerHTML += `<tr>
    <th scope="row">1</th>
    <td><img class="imgtabela" src="https://tse3.mm.bing.net/th?id=OIP.5-hjugBZmquJKnC2H0brpgHaE8&amp"></i></td>>
    <td class="linha-tabela">${item}</td>
    <td><i class="fas fa-edit btnedit"></i></td>
    <td><i class="fas fa-trash-alt btndelete"></i></td>
    
  </tr>`;
}