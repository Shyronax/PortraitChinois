document.addEventListener("DOMContentLoaded", function () {
    var num;
    fetch('data.json').then(function (response) {
        response.json().then(function (data) {
            document.addEventListener("dragstart", function (event) {
                num = event.target.getAttribute("id")
            })
            document.addEventListener("drop", function (event) {
                console.log(data);
                document.querySelector(".analogie").innerHTML = data[num].analogie;
                document.querySelector(".valeur").innerHTML = data[num].valeur;
                document.querySelector(".desc").innerHTML = data[num].texte;
                document.querySelector(".visage").setAttribute("src", data[num].image)
            })
        })
    })
    document.querySelector('.btn').addEventListener("click", function (event) {
        document.querySelector(".analogie2").innerHTML = document.querySelector("[name=anaform]").value;
        document.querySelector(".valeur2").innerHTML = document.querySelector("[name=valform]").value;
        document.querySelector(".desc2").innerHTML = document.querySelector("[name=descform]").value;
        var urlVisitee = "https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=gambette&courriel=" + document.querySelector("[name=email]").value + "&message=Si j'étais ... " + document.querySelector("[name=anaform]").value + " je serais ... " + document.querySelector("[name=valform]").value;
        fetch(urlVisitee).then(function (response) {
            response.json().then(function (data) {
                console.log("Réponse reçue : ")
                console.log(data);
                if (data.status == "success") {
                    document.querySelector("#messageApresEnvoi").innerHTML = "Votre message a bien été reçu";
                } else {
                    document.querySelector("#messageApresEnvoi").innerHTML = "Problème : votre message n'a pas été reçu";
                }
            })
        })

    })
})