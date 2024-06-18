function Determinarnivel(xp){
    if (xp < 1000) {
        return "Ferro";
    }
    else if (xp <= 2000) {
        return "Bronze";
    }
    else if (xp <= 5000) {
        return "Prata";
    }
    else if (xp <= 7000) {
        return "Ouro";
    }
    else if (xp <= 8000) {
        return "Platina";
    }
    else if (xp <= 9000) {
        return "Ascendente";
    }
    else if (xp <= 10000) {
        return "Imortal";
    }
    else {
        return "Radiante";
    }
}

function ConsultarNivel(){
    let nomeHeroi = document.getElementById("user_name").value;
    let xpHeroi = document.getElementById("user_xp").value;

    let nivelHeroi = Determinarnivel(xpHeroi);
    let resultado = document.getElementById("result");
    
    const resultado_anterior = document.getElementById("resultado_heroi");
    if (resultado_anterior) {
        resultado_anterior.remove();
    }

    const texto = document.createElement("p");
    texto.textContent = `O Herói de nome ${nomeHeroi} está no nível ${nivelHeroi}`;
    texto.id = "resultado_heroi";

    resultado.append(texto);
}