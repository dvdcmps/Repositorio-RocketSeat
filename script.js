function toggleMode() {
   const html = document.documentElement
   const img = document.querySelector("#profile img")

   // A linha abaixo produz a inversão da página (light e not light)
   html.classList.toggle("light")
   // As linha comentadas abaixo produzem o mesmo efeito da linha acima
   // if (html.classList.contains("light")) {
   //    html.classList.remove("light")
   // } else {
   //    html.classList.add("light")
   // }

   // substituindo a imagem na tela
   if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/avatar-light.png")
   } else {
      img.setAttribute("src", "./assets/avatar.png")
   }
}
