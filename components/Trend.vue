<script setup>
import { format } from 'date-fns';
import l1 from '~/assets/l1.jpg';
import l2 from '~/assets/l2.jpg';
import l3 from '~/assets/l3.webp';
import l4 from '~/assets/l4.jpg';

import l5 from '~/assets/l5.jpg';
import l6 from '~/assets/l6.jpg';
import l7 from '~/assets/l7.jpg';


const props = defineProps({
    start: {
        type: Number,
        default: 0,
    },

    end: {
        type: Number,
        default: 7,
    }
})
const images= [l1, l2, l3, l4, l5, l6, l7];
const trends = [
 {   link: "/zdravochranenie/37065-kak-zavarivat-lechebnye-travy.html",
    img: '',
    title: 'Как заваривать лечебные травы',
},
{   link: "/trudoustroistvo/27544-poleznye-sovety-po-trudoustrojstvu-v-italii.html",
    img: '',
    title: 'Полезные советы по трудоустройству в Италии',
},
{   link: "/sport/15886-u-sbornoj-brazilii-novyj-trener.html",
    img: '',
    title: 'У сборной Бразилии новый тренер',
},
{   link:"/ukraine/64574-nikolaev-paren-iznasiloval-16-letnyuyu-devushku-pri-pomoshhi-podrug.html",
    img: '',
    title: 'Николаев: парень изнасиловал 16-летнюю девушку при помощи подруг',
},
{   link: "/main/66272-v-moskovskom-metro-ukrainec-upal-na-relsy.html",
    img: '',
    title: 'В московском метро украинец упал на рельсы',
},
{   link: "/2013/12/25/dinamo-mozhet-otkazatsya-uchastvovat-v-chempionate-ukrainy-surkis.html" ,
    img: '',
    title: '«Динамо» может отказаться участвовать в чемпионате Украины',
},

{   link: "/ukraine/67269-goloseevskij-sud-opravdal-pilipishina.html",
    img: '',
    title: 'Голосеевский суд оправдал Пилипишина',
},
];

const trendsNow = trends.map((el, i) => {
    const votes = Math.floor((Math.random() * 350) + 50);
     if(i > 5) {
        return  {
            ...el,
            votes,
            date: format(new Date(new Date(Date.now()).getUTCFullYear(), new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getDate() - 1) , 'dd/MM/yyyy').split('/').join('.'),
            img: images[i]
        };
     } else {
        return {
            ...el,
            votes,
            date: format(new Date(new Date(Date.now()).getUTCFullYear(), new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getDate()), 'dd/MM/yyyy').split('/').join('.'),
            img: images[i]
        };
     }
 })
</script>

<template>
   <div class="trends-left">
    <h2 v-if="start === 0" class="title is-3"><Icon name="mdi:fire" class="news-fire"></Icon>В ТРЕНДЕ</h2>
    <article class="card article-card" v-for="(article, i) in trendsNow.slice(start, end)"
    :key="article.link">

    <div class="img-holder img-holder-trends">
        <img width="240" height="240" :src="article.img">

    </div>
    <h2 class="big-title" >
        <a :href="article.link" class="link-trends">
            {{ article.title }}

        </a>
    </h2>
    <div class="news-bottom news-theme-bottom">

        <strong>{{ article.date }}</strong>
        <div class="news-bottom news-bottom-right">
            <strong>{{ article.votes }}</strong>
            <Icon name="mdi:eye"> </Icon>
        </div>
      
    </div>
   
 </article>

 <button class="button" v-if="end === 7">Больше новостей</button>
   </div>

</template>

<style>
 .trends-left {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    gap: 32px;
    padding: 24px;
 }

 .trend-left .news-bottom.news-theme-bottom {
    background-color: black;
 }

 .trends-left h2.big-title {
    height: 320px;
    max-width: 180px;
    padding: 4px;
 }

 .trends-left .is-3 {
    font-weight: 900;
    display: flex;
    align-items: center;
 }


 .trends-left .card.article-card h2 a.link-trends{
    width: 100%;
    color: #1c1c1c;
    font-size: 1.5rem;
    border-left: 4px solid white;
    padding: 12px 8px;
 }

 .trends-left .card.article-card h2 a.link-trends:hover {
    color: orange;
 }

 .img-holder-trends {
    min-height: 320px;
    max-width: 100%;
 }

 .img-holder-trends img {
    min-height: 320px;
    opacity: 0.6;
 }
 @media screen and (max-width: 700px) {
    .trends-left {
        gap: 8px;
        padding: 36px 0px;
     }
    
    .img-holder-trends {
        min-height: 240px;
        max-width: 100%;
     }
    
     .img-holder-trends img {
        min-height: 240px;
        opacity: 0.7;
     }

     .trends-left h2.big-title {
        height: 240px;
        max-width: 100%;
        padding: 4px;
     }
 }
</style>