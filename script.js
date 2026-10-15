const header = document.getElementById("header")
header.classList.add("header")
header.innerHTML = `
   <div class="container">

      <a href="#inicio" class="logo">
         <img src="assets/logo_sem_fundo_256_256px.png.png" alt="">
      </a>

      <nav class="navbar" aria-label="Navegação principal">
         <ul class="menu">
               <li class="menu-item"><a href="#inicio">Início</a></li>
               <li class="menu-item"><a href="#servicos">Serviços</a></li>
               <li class="menu-item"><a href="#eventos">Eventos</a></li>
               <li class="menu-item"><a href="#sobre">Sobre</a></li>
               <li class="menu-item"><a href="#contato">Contato</a></li>
               <li class="menu-item idiomas">
                  <a href="#pt">PT</a>
                  <a href="#es">ES</a>
                  <a href="#en">EN</a>
               </li>
         </ul>
      </nav>
   </div>
`
