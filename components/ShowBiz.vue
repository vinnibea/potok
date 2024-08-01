<script setup>
import {format} from 'date-fns';
import backgroundUr1 from '~/assets/shw.jpg';
import backgroundUr2 from '~/assets/shw1.jpg';
import backgroundUr3 from '~/assets/shw2.jpg';
import backgroundUr5 from '~/assets/s21.jpeg';
const active = ref(0);

const setActive = (i) => {
    active.value = i;
}

const data = [{
    link: "/shoybiz/115492-novosti-shou-biznesa-znamenitostej-poslednie-spletni-sluxi-2023.html",
    title: 'Новости шоу-бизнеса знаменитостей: последние сплетни, слухи 2024',
    img: backgroundUr1 ,
}, 
{
    link:"/shoybiz/115482-potap-razvelsya-s-zhenoj-irinoj.html" ,
    title: 'Потап развелся с женой Ириной',
    img: backgroundUr2,
},
{
    link: "/shoybiz/115480-xakery-vzlomali-telefon-olgi-buzovoj-otkrovennye-foto-i-perepiska.html",
    title: 'Хакеры взломали телефон Ольги Бузовой: откровенные фото и переписка',
    img: backgroundUr3,
}]

const newsDataNow = data.map((el, i) => {
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

    <div class="show-wrapper">
        <themes :start="0" :end="1"></themes>
        <div class="main_showbiz">
          
            <div>
                <h2 class="title">ШОУБИЗ</h2>
                <a
                    href="/shoybiz/115478-sofiya-2022-smotret-serial-onlajn-3-i-4-seriya-v-xoroshem-kachestve.html"></a><br>
                <a href="/shoybiz/115478-sofiya-2022-smotret-serial-onlajn-3-i-4-seriya-v-xoroshem-kachestve.html">
                    <div class="img-wrapper">
                        <img class="play" :src="backgroundUr5">
                        <Icon name="ri:play-circle-line" class="icon-play">

                        </Icon>
                    </div>
                </a>
                <h3 class="title"><a
                        href="/shoybiz/115478-sofiya-2022-smotret-serial-onlajn-3-i-4-seriya-v-xoroshem-kachestve.html">«София»
                        2024: смотреть сериал онлайн 3 и 4 серия в хорошем качестве</a></h3>
            </div>
            <div class="main_showbiz_block">
                <div class="navbar-content">
                    <span class="content-item subtitle" @click="setActive(0)" :class="[{
                        'is-active': active === 0,
                    }]">ПОСЛЕДНИЕ</span>
                    <span class="content-item subtitle" @click="setActive(1)" :class="[{
                        'is-active': active === 1,
                    }]">ПОПУЛЯРНОЕ</span>
                </div>
                
                <div v-for="item in newsDataNow" class="show" :key="item.link" :class="[
                        {
                            'show-translate': active === 1,
                        }
                    ]">
                    <a
                        :href="item.link"></a>
                    <a :href="item.link">
                        <img :src="item.img"></a><br>
                    <div class="show-content">
                        <h4 class="title is-6"><a
                            :href="item.link">{{item.title}}</a></h4>
                            <div class="news-bottom">
                                <strong>{{item.date}}</strong>
                                <div class="news-bottom news-bottom-right">
                                    <strong>{{item.votes}}</strong>
                                    <Icon name="mdi:eye"></Icon>
                                    
                                </div>
                            </div>
                    </div>
                </div>
                <button class="button">Показать больше</button>
            </div>
        </div>

        
       <themes :start="1" :end="6"></themes>
     
       
    </div>
</template>

<style>
.play {
    object-fit: cover;
}
.show-content .news-bottom, .show-content .news-bottom strong {
    color: white;
    font-size: 12px;
}
.show {
    min-height: 8rem;
}
.show-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;

}

.show-content .news-bottom:not(.news-bottom-right) {
    padding: 4px 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
}
.main_showbiz>div>h2.title {
    margin: 0;
    padding-bottom: 0;
    padding-top: 2px;
    line-height: 24px;
}
.button {
    margin: 0 auto;
    width: 100%;
    color: white;
    background-color: rgb(177 8 8);
    border: none;
    border-radius: 0;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.button:hover {
    opacity: 0.7;
}
.show {display: flex;}
.show-translate {
    transform: translateX(-120%);

}

div.img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 350px;
}

.icon-play {
    font-size: 196px;
    color: rgba(156, 156, 156, 0.589);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    cursor: pointer;
    font-weight: 300;
}

.icon-play:hover {
    color: #f0f0f0;;
}

.main_showbiz>div .img-wrapper img {
    width: 100%;
    position: relative;
    opacity: 1;
}

.main_showbiz>div {
    position: relative;
    background-color: rgb(46, 46, 46);
    border-right: 1px solid rgb(42, 42, 42);
    padding: 2px;
}

.show img {
    max-width: 100%;
    min-width: 180px;
    height: 120px;
    object-fit: cover;
}

.main_showbiz .show {
    border-bottom: 1px solid rgba(28, 28, 28, 0.326);
  
    display: flex;
    flex-direction: row;
    transition: all 0.3s ease;
    align-items: flex-start;

}

.main_showbiz .show:hover {
   
  background-color: rgba(105, 105, 105, 0.429);
}

.main_showbiz_block~div {
    display: flex;
}

.show-wrapper {
    display: flex;
    flex-direction: row;
    padding-right: 12px;
}
.show-wrapper div .title {
    color: #f0f0f0;
    padding: 12px;
}

.show-wrapper > .title {
    margin: 0;
    text-align: left;
    color: #f0f0f0;
    background-color: rgb(46, 46, 46);   
     
}

.navbar-content {
    
    display: flex;
    gap: 12px;
    box-shadow: none;
    justify-content: flex-start;
    align-items: flex-end;
    border-bottom: 1px solid rgba(126, 126, 126, 0.256);
}

;

.content-item {
    color: #333 !important;
    cursor: pointer;
    opacity: 1;
    border-bottom: px solid white;

}

.content-item.subtitle {
    margin: 0;
 color: #bababa;
    padding: 0 4px;
    opacity: 0.77;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-bottom: 2px solid transparent;
}

.content-item.subtitle.is-active {
    border-bottom: 2px solid rgb(243, 243, 243);
    color: white;
    opacity: 1;
}
 h3.title a {
    color: #fff7f7;
 }
.title.is-6>a {
    color: #f0f0f0;
}

.main_showbiz>.title {
    color: #f0f0f0;
    transform: rotate(-45%);
}


.main_showbiz_block {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
}


.main_showbiz {
    margin: 0;
    display: flex;
    background-color: rgb(46, 46, 46);
}

.show-wrapper {
    flex-direction: column;
    gap: 48px;
}

.main_showbiz_block .show, div.main_showbiz_block {
    background-color: rgb(46, 46, 46);
}

@media screen and (max-width: 1024px) {
    

    
    .main_showbiz {
        margin: 0;
        display: flex;
        flex-direction: column;
    }

    .main_showbiz_block {
        border: none;
    }

    .show img {
        max-width: 140px;
        min-width: 140px;
        height: 90px;
    }
}

@media screen and (max-width: 700px) {
 
    .show-wrapper > div .title {
        font-weight: 500;
        
    }
    .show-wrapper,
    .main_showbiz {
        padding: 0;
        padding-bottom: 12px;
    }

    .show-wrapper h3.title {
        padding: 8px 12px;
        font-size: 1.5rem;
        text-align: justify;
    }

    .main_showbiz_block {
        border: none;
    }

    .show img {
        max-width: 140px;
        min-width: 140px;
        height: 90px;
    }

    .show {
        flex-direction: row;
    }

    .main_showbiz > div > .title > a {
        color: rgb(255, 255, 255);
        text-align: left;
        font-size: 18px;
        display: block;
    }
    .navbar-content {
        justify-content: flex-end;
    }
}
</style>
