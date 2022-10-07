
let reponse = document.getElementById("reponse")
let btn = document.getElementById("btn")


btn.addEventListener("click" ,()=>{
    let inputAge = document.getElementById("age").value
    
    /*verifier la presence d'un - a pousser pour la suite si l'on veut proposer les - ou /, car 
    pour l'instant nous sommes bloqué aux /
    var index = inputAge.indexOf("-");
    if (index !== -1) {
        console.log("ok") on pourrait rentrer dans la fonction splited
    }
    ou plus simple avec includes
    if(inputAge.includes("-")){
        console;log("ok"); puis entrer dans la fonction splited
    }
    encore une methode
     var index = inputAge.search(/-/i); 
    if(index !== -1){
        console.log("ok");
    */




  // petite fonction pour convertir en format US la date entrée en FR  
var splited = inputAge.split('/');
var formattedDate = [splited[2],splited[1],splited[0]].join("/");
console.log(formattedDate)



// fonction pour donner l'age de l'utilisateur grace a sa date
    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    console.log('age: ' + getAge(formattedDate));
    if (getAge(formattedDate)<18) {
        reponse.innerText ="tu as:"+ getAge(formattedDate)+ "ans, " + "Tu est mineur revient plus tard"
    } else{
        reponse.innerHTML = "tu as:"+ getAge(formattedDate)+ "ans, " +  "Entre si tu le desires vraiment"
    }

})
     
