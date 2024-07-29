<script setup>

import liveCredit from '~/assets/LiveCredit.jpg';
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
            date: format(new Date(new Date(Date.now()).getUTCFullYear(), new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getDate() - 1) , 'MM/dd/yyyy').split('/').join('.')
        };
     } else {
        return {
            ...el,
            votes,
            date: format(new Date(new Date(Date.now()).getUTCFullYear(), new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getDate()), 'MM/dd/yyyy').split('/').join('.')
        };
     }
 })
</script>


<template>
    <section class="news">
        <h2 class="title is-3">ПОТОК НОВОСТЕЙ</h2>
        <div class="box box-news" v-for="item in newsDataNow" :key="item.title">
            <article class="media">
                <div class="media-content">
                    <div class="content">

                        <a class="fire-link" :href="item.link">
                            
                            <Icon name="mdi:fire" v-if="item.title.length < 50"></Icon> <h3 class="subtitle is-6" :class="[
                                {'fire-link-active': item.title.length < 50}
                            ]">{{ item.title }} </h3>
                        </a>

                        <div class="news-bottom">
                            <strong>{{ item.time }}, {{item.date}}</strong>
                            <div class="news-bottom news-bottom-right">
                                <strong>{{item.votes}}</strong>
                                <Icon name="mdi:eye"></Icon>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </article>
        </div>
           
        <a href="https://livecredit.com.ua/" target="_blank"><img class="banner" width="181" height="256" :src="liveCredit" alt="LiveCredit"></a>

        <big></big>
    </section>
</template>

<style>
.fire-link-active {
    font-weight: 700;
}
.banner {
  width: 181px;
  height: 256px;
  margin: 0 auto;
}
 .news {
    padding: 0 12px 12px;
    flex-basis: 45%;
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
    border-radius: 0;
    border-bottom: 1px solid rgba(29, 29, 29, 0.349);
    padding: 0 8px 2px 2px;
    background-color: transparent;

}

.fire-link-active {
    font-weight: 700;
}
.news-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    opacity: 0.8;
}
.news-bottom {
    gap: 12px;
}

.subtitle.is-6 {
    color: #262626;
    font-weight: 300;
    padding: 0;
}

.subtitle.is-6.fire-link-active {
    font-weight: 500;
}

.subtitle.is-6:hover {
    color: #570b0b;
}

.content strong {
    color: grey;
    opacity: 1;
    font-size: 12px;
    font-weight: 900;
}

@media screen and (max-width: 700) {


    .box.box-news {
        box-shadow: none;
        border-radius: 0;
        border-bottom: 1px solid rgba(128, 128, 128, 0.349);
        padding: 0;
        background-color: transparent;

    }

    .news {
        border-right: 0px solid rgba(255, 255, 255, 0);
        padding: 0;
    }

}
</style>