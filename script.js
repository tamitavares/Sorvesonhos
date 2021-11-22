function alertar(){
    alert("Vocâ será redirecionado ao WhatsApp da empresa! Faça seu pedido!");
}

function soma(){
    var selecionados = document.getElementsByName('OptSorvete');
    for (var i = 0; i < selecionados.length; i++){
        if (selecionados[i].checked) {
            if(selecionados[i].value == "Morango"){
                document.getElementById("txt").innerHTML= "Pote de Morango";
            }else if (selecionados[i].value == "Chocolate") {
                document.getElementById("txt").innerHTML= "Pote de Chocolate";
            }else if (selecionados[i].value == "Creme") {
                document.getElementById("txt").innerHTML= "Pote de Creme";
            }
        }
    }
}


function mostrar(){
    var selecionados = document.getElementsByName('OptSorvete');
    for (var i = 0; i < selecionados.length; i++){
        if (selecionados[i].checked) {
            if(selecionados[i].value == Opt1){
                document.getElementById("txt").innerHTML= "Morango";
            }else if (selecionados[i].value == "Chocolate") {
                var Opt2 = "Chocolate";
                alert(Opt2);
            }else if (selecionados[i].value == "Creme") {
                var Opt3 = "Creme";
                alert(Opt3);
            }
        }
    }
    
}