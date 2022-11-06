function creatGame(player1, hour, player2){
  return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
     </li>
  `
}

let delay = -0.4;

function creatCard(date, day, games){
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
   </div>
  `
}

document.querySelector("#app").innerHTML = `
    <header>
          <img src="./assets/logo.svg" alt="Logo NLW">
    </header>
       
       <main id="cards">
          ${creatCard(
            "20/11",
            "domingo",
            creatGame("qatar", "13:00", "ecuador")
          )}
           
          ${creatCard(
            "21/11",
            "segunda",
            creatGame("england", "10:00", "iran") +
              creatGame("senegal", "13:00", "holanda") +
              creatGame("eua", "16:00", "gales")
          )}

          ${creatCard(
            "22/12",
            "Terça",
            creatGame("argentina", "07:00", "arabia") +
              creatGame("dinamarca", "10:00", "tunisia") +
              creatGame("mexico", "13:00", "polonia") +
              creatGame("franca", "16:00", "australia")
          )}

          ${creatCard(
            "23/12",
            "quarta",
            creatGame("marrocos", "07:00", "croacia") +
              creatGame("alemanha", "10:00", "japao") +
              creatGame("espanha", "13:00", "costaRica") +
              creatGame("belgica", "16:00", "canada")
          )}

          ${creatCard(
            "24/11",
            "quinta",
            creatGame("suica", "07:00", "camaroon") +
            creatGame("uruguai", "10:00", "coreia") +
            creatGame("portugal", "13:00", "gana") +
            creatGame("brazil", "16:00", "serbia")
          )}

          ${creatCard(
            "25/11",
            "sexta",
            creatGame("gales", "07:00", "iran") +
            creatGame("qatar", "10:00", "senegal") +
            creatGame("holanda", "13:00", "ecuador") +
            creatGame("england", "16:00", "eua")
          )}

          ${creatCard(
            "26/11",
            "sabado",
            creatGame("tunisia", "07:00", "australia") +
            creatGame("polonia", "10:00", "arabia") +
            creatGame("franca", "13:00", "dinamarca") +
            creatGame("argentina", "16:00", "mexico")
          )}

          ${creatCard(
            "27/11",
            "domingo",
            creatGame("japao", "07:00", "costaRica") +
            creatGame("belgica", "10:00", "marrocos") +
            creatGame("croacia", "13:00", "canada") +
            creatGame("espanha", "16:00", "alemanha")
          )}

          ${creatCard(
            "28/11",
            "Segunda",
            creatGame("camaroon", "07:00", "serbia") +
            creatGame("coreia", "10:00", "gana") +
            creatGame("brazil", "13:00", "suica") +
            creatGame("portugal", "16:00", "uruguai")
          )}

          ${creatCard(
            "29/11",
            "terça",
            creatGame("ecuador", "12:00", "senegal") +
            creatGame("holanda", "12:00", "qatar") +
            creatGame("iran", "16:00", "eua") +
            creatGame("gales", "16:00", "england")
          )}

          ${creatCard(
            "30/11",
            "quarta",
            creatGame("tunisia", "12:00", "franca") +
            creatGame("australia", "12:00", "dinamarca") +
            creatGame("polonia", "16:00", "argentina") +
            creatGame("arabia", "16:00", "mexico")
          )}

          ${creatCard(
            "01/11",
            "quinta",
            creatGame("croacia", "12:00", "belgica") +
            creatGame("canada", "12:00", "marrocos") +
            creatGame("japao", "16:00", "espanha") +
            creatGame("costaRica", "16:00", "alemanha")
          )}

          ${creatCard(
            "02/12",
            "Sexta",
            creatGame("coreia", "12:00", "portugal") +
            creatGame("gana", "12:00", "uruguai") +
            creatGame("serbia", "16:00", "suica") +
            creatGame("brazil", "16:00", "camaroon")
          )}
       </main>
`
