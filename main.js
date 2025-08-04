(function () {
  "use strict";

  const $body = document.querySelector("body");

  // Remove a classe 'is-preload' após o carregamento da página
  window.addEventListener("load", function () {
    setTimeout(function () {
      $body.classList.remove("is-preload");
    }, 100);
  });

  // Slideshow de fundo animado
  (function () {
    const settings = {
      images: {
        "images/bg01.jpg": "center",
        "images/bg02.jpg": "center",
        "images/bg03.jpg": "center",
      },
      delay: 6000, // Tempo entre os fundos (em ms)
    };

    let pos = 0;
    let lastPos = 0;
    let $wrapper;
    const $bgs = [];

    // Cria o container do slideshow
    $wrapper = document.createElement("div");
    $wrapper.id = "bg";
    $body.appendChild($wrapper);

    // Cria cada slide com imagem de fundo
    for (const url in settings.images) {
      const $bg = document.createElement("div");
      $bg.style.backgroundImage = `url("${url}")`;
      $bg.style.backgroundPosition = settings.images[url];
      $wrapper.appendChild($bg);
      $bgs.push($bg);
    }

    // Inicializa com o primeiro visível
    $bgs[pos].classList.add("visible", "top");

    // Inicia o loop do slideshow
    setInterval(() => {
      lastPos = pos;
      pos = (pos + 1) % $bgs.length;

      $bgs[lastPos].classList.remove("top");
      $bgs[pos].classList.add("visible", "top");

      // Esconde o slide anterior após metade do tempo
      setTimeout(() => {
        $bgs[lastPos].classList.remove("visible");
      }, settings.delay / 2);
    }, settings.delay);
  })();
})();
