var c = document.getElementById('txtn')
var res = document.getElementById('tabuada')

function calcular() {
    if (c.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var g = Number(c.value)
        res.innerHTML = ''
    for (var d = 1;d<=10;d++) {
        res.innerHTML += `${d} x ${g} = ${g*d} <br>` 
      }
    }
}