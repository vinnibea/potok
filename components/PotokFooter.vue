<script setup>

const socialButtons = [{
  alt: 'facebook',
  icon: 'mdi:facebook',
},
{
  alt: 'youtube',
  icon: 'mdi:youtube',
},
{
  alt: 'telegram',
  icon: 'mdi:telegram',
},
]

</script>

<template>

  <footer class="footer">
    <div class="footer-top">


      <div class="footer-top-right">

        <div class="footer-column">
          <a href="/index.php">Главная страница</a>
          <a href="/index.php?do=register">Регистрация</a>
          <a href="/index.php?do=feedback">Обратная связь</a>
          <a href="/sitemap.xml">Карта сайта</a>
        </div>


        <div class="footer-column">
          <a href="#"
            onclick="this.style.behavior='url(#default#homepage)';this.setHomePage('https://potok.ua/');">Сделать
            стартовой</a>
          <a href="javascript:window.external.AddFavorite('https://potok.ua/',%20'Potok.ua')">Добавить в избранное</a>
         

          <a href="/o%20nas.html">О нас</a>
          <a href="/index.php?do=feedback">Обратная связь</a>
        </div>
      </div>
      <div class="footer-row">
        <div class="header-end is-flex is-justify-content-space-between is-align-items-center">
          <Icon class="icon-social" v-for="icon in socialButtons" :name="icon.icon" :key="icon.alt" :alt="icon.alt" />


        </div>
      </div>
    

    </div>
    <hr>
    <span> <a href="/">Интернет-издание "Поток"</a> </span>
    <div class="footer-bottom">

      <span>
        При любом использовании материалов и новостей сайта прямая гиперссылка на <a href="/index.php">potok.ua</a>
        обязательна.
      </span>
    </div>
    <span>© 2015-2024</span>
  </footer>
</template>
<style>
.footer-row span {
  font-size: 24px;
  color: #333;
}
.footer-row span:first-child:hover {
 color: blue;
}

.footer-row span:nth-child(2):hover {
  color: red;
 }

 .footer-row span:nth-child(3):hover {
  color: lightblue;
 }
.footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  border-top: 1px solid whitesmoke;
  margin-top: 42px;
}

.footer-top,
.footer-top-right {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 12px 48px;
  font-size: 16px;
  gap: 48px;
}

.footer-top-right {
  gap: 96px;
}

.footer-top a {
  color: rgb(187, 187, 187);
  font-weight: 400;
}

.footer-top a:hover {
  color: #910303;
}

.footer-bottom {
  display: flex;
  justify-content: center;
  gap: 12px;
  font-size: 12px;
  color: rgb(148, 148, 148);
}

.footer span {
  margin: 0 auto;
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}

@media screen and (max-width: 700px) {
  .footer-top-right {
    gap: 24px;
  }
  .footer-top, .footer-top-right {
    gap: 12px;
    padding: 4px;
  }
  .footer span {
    margin: 0 auto;
    padding: 4px;
  }

  .footer-bottom span {
    text-align: center;
  }

  .footer-row span {
    font-size: 18px;
    color: #333;
  }
}
</style>