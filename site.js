/* Insere o cabeçalho e o rodapé do Controle Quebrado.
   Para mudar o menu em todas as páginas, edite só as listas abaixo. */
(function () {
  var MENU = [
    ["Vídeos", "index.html#videos"],
    ["Emulação", "index.html#emulacao"],
    ["Recompilados", "index.html#recompilados"],
    ["Linux", "index.html#linux"],
    ["Comandos", "comandos.html"],
    ["Quiz de driver", "quiz-driver.html"]
  ];
  var RODAPE = [
    ["Sobre", "sobre.html"],
    ["Comandos", "comandos.html"],
    ["Quiz de driver", "quiz-driver.html"],
    ["Contato", "contato.html"],
    ["Privacidade", "privacidade.html"],
    ["YouTube", "https://www.youtube.com/@controlequebrado_tv"]
  ];
  var YT = "https://www.youtube.com/@controlequebrado_tv";
  var atual = location.pathname.split("/").pop() || "index.html";

  function links(lista, marcar) {
    return lista.map(function (i) {
      var pagina = i[1].split("#")[0];
      var ativo = marcar && pagina === atual && i[1].indexOf("#") === -1;
      return '<a href="' + i[1] + '"' + (ativo ? ' aria-current="page"' : "") + ">" + i[0] + "</a>";
    }).join("");
  }

  function montar() {
    var h = document.createElement("header");
    h.className = "cq-header";
    h.innerHTML =
      '<div class="cq-wrap cq-bar">' +
      '<a class="cq-logo" href="index.html">Controle Quebrado</a>' +
      '<nav class="cq-nav" aria-label="Principal">' + links(MENU, true) + "</nav>" +
      '<a class="cq-sub" href="' + YT + '">Inscreva-se no canal</a></div>';

    var f = document.createElement("footer");
    f.className = "cq-footer";
    f.innerHTML =
      '<div class="cq-wrap"><span>© ' + new Date().getFullYear() + " Controle Quebrado</span>" +
      '<nav aria-label="Rodapé">' + links(RODAPE, false) + "</nav></div>";

    document.body.insertBefore(h, document.body.firstChild);
    document.body.appendChild(f);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", montar);
  } else {
    montar();
  }
})();
