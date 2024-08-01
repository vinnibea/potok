<script setup>

import liveCredit from '~/assets/LiveCredit.png';
import {format} from 'date-fns';

const newsData = [{
    title: "ЕС ужесточил въезд для туристов из-за штаммов COVID-19",
    time: "14:45",
    link: "/es-uzhestochil-vezd-dlya-turistov-iz-za-shtammov-covid-19.html",
},
{
    title: "Новости шоу-бизнеса знаменитостей: последние сплетни, слухи",
    time: "13:21",
    link: "/2023/05/05/novosti-shou-biznesa-znamenitostej-poslednie-spletni-sluxi-2023.html",
},
{
    title: "8 марта 2024 года: как отдыхаем",
    time: "12:42",
    link: "/2023/03/04/8-marta-2023-goda-kak-otdyxaem.html",
},
{
    title: "Гороскоп на сегодня",
    time: "11:23",
    link: "/2023/03/03/goroskop-na-segodnya-3-marta-2023.html",
},
{
    title: "Какой сегодня праздник: Всемирный день писателя",
    time: "11:00",
    link: "/2023/03/03/kakoj-segodnya-prazdnik-3-marta-2023-vsemirnyj-den-pisatelya.html",
},
{
    title: "Вербное воскресенье: какого числа, традиции и приметы",
    time: "10:42",
    link: "/2023/03/02/verbnoe-voskresene-v-2023-godu-kakogo-chisla-tradicii-i-primety.html",
},
{
    title: "Потап развелся с женой Ириной",
    time: "10:34",
    link: "/2022/12/03/potap-razvelsya-s-zhenoj-irinoj.html",
},
{
    title: "Хакеры взломали телефон Ольги Бузовой: откровенные фото и переписка",
    time: "09:53",
    link: "/2022/12/03/xakery-vzlomali-telefon-olgi-buzovoj-otkrovennye-foto-i-perepiska.html",
},
{
    title: "«София» 2024: смотреть сериал онлайн 3 и 4 серия в хорошем качестве",
    time: "09:14",
    link: "/2022/11/30/sofiya-2022-smotret-serial-onlajn-3-i-4-seriya-v-xoroshem-kachestve.html",
},
{
    title: "Развод Бузовой и Тарасова: в Инстаграм обсуждают Ольгу и Дмитрия",
    time: "08:39",
    link: "/2022/11/29/razvod-buzovoj-i-tarasova-2022-v-instagram-obsuzhdayut-olgu-i-dmitriya.html",
}]
 const newsDataNow = newsData.map((el, i) => {
    const votes = Math.floor((Math.random() * 350) + 50);
     if(i > 5) {
        return  {
            ...el,
            votes,
            date: format(new Date(new Date(Date.now()).getUTCFullYear(), new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getDate() - 1) , 'dd/MM/yyyy').split('/').join('.')
        };
     } else {
        return {
            ...el,
            votes,
            date: format(new Date(new Date(Date.now()).getUTCFullYear(), new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getDate()), 'dd/MM/yyyy').split('/').join('.')
        };
     }
 })
</script>


<template>
   <div>
    <section class="news">
        <h2 class="title is-3">ПОТОК НОВОСТЕЙ</h2>
        <div class="box box-news" v-for="item in newsDataNow" :key="item.title">
            <article class="media">
                <div class="media-content">
                    <div class="content">

                        <a class="fire-link" :href="item.link">
                            
                             <h3 class="subtitle is-6" :class="[
                                {'fire-link-active': item.title.length < 50}
                            ]">
                            <Icon name="mdi:fire" class="news-fire" v-if="item.title.length < 50"></Icon>
                            {{ item.title }} 
                        </h3>
                        </a>

                        <div class="news-bottom news-stream-bottom">
                            <strong>{{ item.time }}, {{item.date}}</strong>
                            <div class="news-bottom news-bottom-right">
                                <Icon name="mdi:eye"></Icon>
                                <strong>{{item.votes}}</strong>
                            </div>
                        </div>
                    </div>

                </div>
            </article>
            
        </div>
        <button class="button" data-v-inspector="components/ShowBiz.vue:101:17">Больше новостей</button>
        <a href="https://livecredit.com.ua/" target="_blank"><img class="banner" width="481" height="556" :src="liveCredit" alt="LiveCredit"></a>
        
    </section>
    <trend :start="0" :end="3"></trend>
    
    <div class="card-content card-holiday">
       <p class="title">
       Какой сегодня праздник:
      </p>
      <p class="title is-4"> 
        <a href="/main/115486-kakoj-segodnya-prazdnik-3-marta-2023-vsemirnyj-den-pisatelya.html">Всемирный день писателя</a>
      </p>
    
    </div>
    <trend :start="3" :end="7"></trend>
    <big></big>
    
    
</div>
        

       
    
</template>

<style>

.card-holiday {
    margin: 48px;

   position: relative;
}

.card-holiday a:hover {
    color: rgb(122, 122, 122);
}

.card-holiday a {
    padding: 2px;
}
.card-holiday p:nth-child(2) {
    text-align: right;
    font-size: 18px;
}
.card-holiday p a:nth-child(1) {
    color: rgb(165, 10, 10);
   text-align: right;
}

.card-holiday span {
    font-size: 3rem;
    font-style: italic;
    padding: 0;
    line-height: 1;
    position: relative;
}






.news-fire {
    color: orange;
}
.news-stream-bottom .news-bottom-right {
    gap: 2px;
}

.news-stream-bottom .news-bottom-right strong {
    color: rgb(77, 77, 77);
    opacity: 1;
    font-size: 12px;
    font-weight: 700;
}
.fire-link-active {
    font-weight: 700;
}
.banner {
    display: block;
    width: 100%;
    height: 100%;
    margin-top: 64px;
    
}
 .news {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 24px 48px;
    flex-basis: 42%;
 }
.fire-link {
    display: flex;
    align-items: baseline;
    gap: 2px;
}

.fire-link > span {
    color: orange;
}
.box.box-news {
    box-shadow: none;
    margin: 0;
    border-radius: 0;
    border-bottom: 1px solid rgba(29, 29, 29, 0.131);
    padding: 0 0 8px 0;
    background-color: transparent;

}

.box.box-news:nth-last-child(3){
    border-bottom: none;
    padding-bottom: 24px;
}

.fire-link-active {
    font-weight: 700;
}
.news-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 0.5;
}
.news-bottom {
    gap: 12px;
}


.news-stream-bottom {
    justify-content: flex-start;
    gap: 8px;
}

.subtitle.is-6 {
    color: #000000;
    font-weight: 400;
    padding: 8px 8px 8px 0;
    font-size: 18px;
    margin: 0;
}

.subtitle.is-6.fire-link-active {
    font-weight: 500;
}

.subtitle.is-6:hover {
    color: #c80606;
}

.content strong {
    color: grey;
    opacity: 1;
    font-size: 12px;
    font-weight: 700;
}

@media screen and (max-width: 700px) {


    .box.box-news {
        box-shadow: none;
        border-radius: 0;
        border-bottom: 1px solid rgba(128, 128, 128, 0.349);
        padding: 0;
        background-color: transparent;

    }

    .news {
        border-right: none;
        padding: 4px 8px;
    }
   
}


</style>