function toggleMode(){
  const html = document.documentElement

  html.classList.toggle("light")

  /** 
  if(html.classList.contains('light')){
    html.classList.remove('light')
  }else{
    html.classList.add('light')
  }
  */

  /** 
  //PEGAR A TAG IMG
  const image = document.querySelector("#profile img")

  //SUBSTITUIR A IMAGEM
  if (html.classList.contains("light")) {
    //SE TIVER LIGHT MODE, ADD A IMAGEM LIGHT
    image.setAttribute('src', '#' //VALOR/ENDEREÇO DA NOVA IMAGEM
    )
  } else {
    //SE TIVER SEM LIGHT MODE, MANTER A IMAGEM NORMAL
    imagemage.setAttribute(
      "src", "#" //VALOR/ENDEREÇO DA NOVA IMAGEM
    )
  }
  */
}