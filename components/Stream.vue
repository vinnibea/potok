<script setup>
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
    link:"/2022/12/03/xakery-vzlomali-telefon-olgi-buzovoj-otkrovennye-foto-i-perepiska.html",
},
{
    title: "«София» 2024: смотреть сериал онлайн 3 и 4 серия в хорошем качестве",
    time: "09:14",
    link:"/2022/11/30/sofiya-2022-smotret-serial-onlajn-3-i-4-seriya-v-xoroshem-kachestve.html",
},
{
    title: "Развод Бузовой и Тарасова: в Инстаграм обсуждают Ольгу и Дмитрия",
    time: "08:39",
    link:"/2022/11/29/razvod-buzovoj-i-tarasova-2022-v-instagram-obsuzhdayut-olgu-i-dmitriya.html",
}]

</script>


<template>
    <section class="news">
        <h2 class="title is-3">ПОТОК НОВОСТЕЙ</h2>
        <div class="box box-news" v-for="item in newsData" :key="item.title">
            <article class="media">
                <div class="media-content">
                    <div class="content">

                        <a :href="item.link">
                            <h3 class="subtitle is-6">{{ item.title }} </h3>
                        </a>
                        <strong>{{item.time}}</strong>
                        <br />


                    </div>

                </div>
            </article>
        </div>
    </section>
</template>

<style>
.box.box-news {
    box-shadow: none;
    border-radius: 0;
    border-bottom: 1px solid rgba(128, 128, 128, 0.349);
    padding: 0 12px 14px 12px;
    background-color:  transparent;
    
}

.subtitle.is-6 {
    color: #333;
}

.content strong {
    color: grey;
    opacity: 1;
}

@media screen and (max-width: 700) {
   

    .box.box-news {
        box-shadow: none;
        border-radius: 0;
        border-bottom: 1px solid rgba(128, 128, 128, 0.349);
        padding: 0;
        background-color:  transparent;
        
    }

    .news {
        border-right: 0px solid rgba(255, 255, 255, 0);
        padding: 0;
    }
    
}
</style>