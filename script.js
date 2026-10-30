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

const footer = document.getElementById("footer")
footer.classList.add("footer")
footer.innerHTML = `
   <div class="container">
      <div class="footer-grid">
            <div class="footer-col">
               <h3>SAUER FOOD</h3>
               <p>Gastronomia de alta performance. Sabor, excelência e experiências criadas para transformar o seu evento.</p>
            </div>

            <div class="footer-col">
               <h3>NAVEGAÇÃO</h3>
               <ul>
                  <li><a href="#">Início</a></li>
                  <li><a href="#">Serviços</a></li>
                  <li><a href="#">Eventos</a></li>
                  <li><a href="#">Cardápio</a></li>
               </ul>
            </div>

            <div class="footer-col">
               <h3>CONTATO</h3>
               <ul>
                  <li><img src="" alt="icone telefone"> +55 45 9822-5170</li>
                  <li><img src="" alt="icone email"> contato@sauerfood.com</li>
                  <li><img src="" alt="icone localizacao"> Foz do Iguaçu, Paraná</li>
               </ul>
            </div>

            <div class="footer-col">
               <h3>SOCIAL</h3>
               <div class="social-icons">
                  <a href="#"><img src="" alt="instagram"></a>
                  <a href="#"><img src="" alt="facebook"></a>
               </div>
               <br>
               <a href="#" class="btn btn-gold">Solicitar Orçamento &rarr;</a>
            </div>
      </div>
      <hr>
      <div class="footer-bottom">
            <div class="copyright">
               <p>&copy; 2026 Sauer Food. Todos os direitos reservados.</p>
            </div>
            <div class="legal-links">
               <a href="#">Política de Privacidade</a>
               <a href="#">Termos de Uso</a>
            </div>
      </div>
   </div>
`