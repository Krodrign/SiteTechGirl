
// NAVBAR

function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("nav").classList.remove("fixed-top")

}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("nav").classList.add("fixed-top")
}



// QUIZ


var point = "";
function reponse(form) {
  for (var i = 0; i < form.length; i++) {
    if (form[i].checked) {
      break
    }
  }
  var answer = ""
  if (i < form.length) {
    answer = form[i].value
  }
  return answer;
}

function solution(form) {

  var points = ""; var rep = ""; var comment = ""

  if (reponse(form.question1) == "A") { points += "A" }
  if (reponse(form.question1) == "B") { points += "B" }
  if (reponse(form.question1) == "C") { points += "C" }
  if (reponse(form.question1) == "D") { points += "D" }
  if (reponse(form.question1) == "E") { points += "E" }
  if (reponse(form.question2) == "A") { points += "A" }
  if (reponse(form.question2) == "B") { points += "B" }
  if (reponse(form.question3) == "A") { points += "A" }
  if (reponse(form.question3) == "B") { points += "B" }
  if (reponse(form.question3) == "C") { points += "C" }
  if (reponse(form.question3) == "D") { points += "D" }
  if (reponse(form.question4) == "A") { points += "A" }
  if (reponse(form.question4) == "B") { points += "B" }
  if (reponse(form.question4) == "C") { points += "C" }
  if (reponse(form.question4) == "D") { points += "D" }
  if (reponse(form.question5) == "A") { points += "A" }
  if (reponse(form.question5) == "B") { points += "B" }
  if (reponse(form.question5) == "C") { points += "C" }
  if (reponse(form.question5) == "D") { points += "D" }
  if (reponse(form.question6) == "A") { points += "A" }
  if (reponse(form.question6) == "B") { points += "B" }
  if (reponse(form.question6) == "C") { points += "C" }
  if (reponse(form.question6) == "D") { points += "D" }

  if (points == "AAADCB" || points == "AABDCB" || points == "AADDCB") { comment = "Desenvolvedor de Jogos Digitais" }
  else if (points == "CBCCBA" || points == "ABCCBA") { comment = "Segurança da informação" }
  else if (points == "EBCCAD") { comment = "Infraestrutura Hardware/Redes" }
  else if (points == "DBAADC" || points == "DBABDC" || points == "DBADDC" || points == "DBBADC" || points == "DBBBDC" || points == "DBBDDC" || points == "DBDADC" || points == "DBDBDC" || points == "DBDDDC") { comment = "Desenvolvedor Mobile" }
  else if (points == "BABADC" || points == "BABBDC" || points == "BADADC" || points == "BADBDC") { comment = "Desenvolvedor Web" }
  else {comment = "inconclusiva, tente novamente e responda com atenção!"}
  alert('De acordo com a suas respostas, a carreira que combina com seu perfil é ' + comment);
  $('#quiz-carreira').each(function () {
    this.reset();
  });

  $("#valide").each(function(){
    $("#modal-mensagem").modal();
});
}


// }
// var a = "um";
// var b = "dois";
// var c = "tres";
// var resposta = a;


// if (resposta == a) {
//     console.log(a)
// } else if (resposta == b) {
//     console.log(b)

// } else if (resposta == c) {
//     console.log(c)
// }


// /**
//  * Botão Submit
//  */
// document.getElementById("btnSubmit").onclick = function () {
//     var radios = document.getElementsByName("teste");
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             console.log("Escolheu: " + radios[i].value);
//         }
//     }
// };

// /**
//  * Botão Load
//  */
// // document.getElementById("btnLoad").onclick = function() {
// //     var radios = document.getElementsByName("teste");

// //     for (var i = 0; i < radios.length; i++) {
// //         if (radios[i].value === "led-zeppelin") {
// //             radios[i].checked = true;
// //         }
// //     }
// // };


// var point = 0;
// function reponse(form) {
//     for (var i = 0; i < form.length; i++) {
//         if (form[i].checked) {
//             break
//         }
//     }
//     var answer = ""
//     if (i < form.length) {
//         answer = form[i].value
//     }
//     return answer;
// }


