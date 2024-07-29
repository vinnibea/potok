<script setup>
import backgroundUrl2 from '~/assets/s2.jpg';
import t1 from '~/assets/t1.jpg';
import t2 from '~/assets/t2.webp';
import t3 from '~/assets/t3.jpeg';
import t4 from '~/assets/t4.webp';
import t5 from '~/assets/t5.jpg';
import t6 from '~/assets/t6.jpg';
import t7 from '~/assets/t7.webp';
import t8 from '~/assets/t8.jpg';
import t9 from '~/assets/t9.jpg';
import t10 from '~/assets/t10.jpg';
import t11 from '~/assets/t11.jpg';
import t12 from '~/assets/t12.jpg';
import t13 from '~/assets/t13.jpg';
import t14 from '~/assets/t14.jpg';
import t15 from '~/assets/t15.jpg';
import t16 from '~/assets/t16.webp';
import t17 from '~/assets/t17.png';
import t18 from '~/assets/t18.webp';
import t19 from '~/assets/t19.png';
import t20 from '~/assets/t20.jpg';
import t21 from '~/assets/t21.jpg';
import t22 from '~/assets/t22.jpg';
import t23 from '~/assets/t23.jpg';
import t24 from '~/assets/t24.jpg';
import t25 from '~/assets/t25.jpg';
import t26 from '~/assets/t26.jpeg';
import t27 from '~/assets/t27.webp';
import t28 from '~/assets/t28.jpg';
import t29 from '~/assets/t29.jpeg';
import t30 from '~/assets/t30.jpeg';
import t31 from '~/assets/t31.jpg';
import t32 from '~/assets/t32.jpg';
import t33 from '~/assets/t33.jpg';
import t34 from '~/assets/t34.webp';
import t35 from '~/assets/t35.webp';
import t36 from '~/assets/t36.jpg';
import { format } from 'date-fns';

const images = [t6, t5, t4, t3, t2, t1, t7, t8, t9, t10, t11, t12, t18, t17, t16, t15, t14, t13, t24, t23, t22, t21, t20, t19, t30, t29, t28, t27, t26, t25, t32, t33, t34, t35, t36]
const props = defineProps({
    start: {
        type: Number,
        default: 0,
    },
    end: {
        type: Number,
        default: 0,
    },
})
const dataAll = [{
    href: "/index.php", theme: 'Главные новости', content: [

        {
            link: "/main/115488-goroskop-na-segodnya-3-marta-2023.html",
            title: 'Гороскоп на сегодня'
        },
        {
            link: "/main/115486-kakoj-segodnya-prazdnik-3-marta-2023-vsemirnyj-den-pisatelya.html",
            title: 'Какой сегодня праздник: Всемирный день писателя'
        },
        {
            link: "/main/115484-verbnoe-voskresene-v-2023-godu-kakogo-chisla-tradicii-i-primety.html",
            title: 'Вербное воскресенье в 2024 году: какого числа, традиции и приметы'
        },
        {
            link: "/main/114998-god-ognennoj-obezyany-kak-vstrechat.html",
            title: 'Год Огненной Обезьяны: как встречать'
        },
        {
            link: "/main/114928-viktor-yanukovich-nameren-vernutsya-v-politiku.html",
            title: 'Виктор Янукович намерен вернуться в политику'
        },
        { text: "В 2024 году многие украинцы задаются вопросом, останется ли 8 марта выходным днем.Еще с советских времен многие привыкли в этот день чествовать и поздравлять женщин, и, конечно же, 8 марта уже многие десятилетия остается выходным днем.Однако, в 2024…", link: "/main/115490-8-marta-2023-goda-kak-otdyxaem.html", tag1: ["/main/", "Главная"], tag2: ["/srochno", "Калейдоскоп новостей"], title: "8 марта 2024 года: как отдыхаем" }]
},
{
    href: '/buznes-ekonomuka', theme: 'Бизнес и экономика', content: [
        {
            link: "/buznes-ekonomuka/115472-otkrytie-torgov-na-mezhbanke-27-yanvarya-2022.html",
            title: "Открытие торгов на межбанке",
        },
        {
            link: "/buznes-ekonomuka/115470-27-yanvarya-2022-ceny-na-neft-padayut-posle-vesomogo-rosta-nakanune.html",
            title: "27 января 2022: цены на нефть падают после весомого роста накануне",
        },
        {
            link: "/buznes-ekonomuka/115468-kursy-valyut-nbu-27-yanvarya-2022.html",
            title: "Курсы валют НБУ",
        },
        {
            link: "/buznes-ekonomuka/115460-26-yanvarya-2022-neft-vnov-opustilas-nizhe-30-doll.html",
            title: "Нефть вновь опустилась ниже 30 долл",
        },
        {
            link: "/buznes-ekonomuka/115466-stavki-bankovskix-metallov-nbu-27-yanvarya-2022.html",
            title: "Ставки банковских металлов НБУ"
        },
        { text: "Сегодня коммерческие банки Украины покупают:Доллар США по 37,00 - 38,20, продают - 38,87 - 39,00 грн/долл.Евро по 39,20 - 40,50 грн./евро, а продают - по 39,40 - 40,60…", link: "/buznes-ekonomuka/115474-kursy-nalichnyx-valyut-v-bankax-ukrainy-27-yanvarya-2022.html", tag1: ["/buznes-ekonomuka/", "Бизнес и экономика"], tag2: ["/mirovie-novoti/", "Мировые новости"], title: "Курсы наличных валют в банках Украины" }
    ]
},
{
    href: "/mirovie-novoti", theme: 'Мировые новости', content: [
        {
            link: "/mirovie-novoti/115390-cherez-dva-mesyaca-vozmozhen-krax-shengenskoj-zony-tusk.html",
            title: 'Через два месяца возможен крах Шенгенской зоны, - Туск'
        },
        {
            link: "/mirovie-novoti/115370-vzryv-vozle-shkoly-v-turcii-odin-chelovek-pogib-troe-raneny.html",
            title: 'Взрыв возле школы в Турции: один человек погиб, трое ранены'
        },
        {
            link: "/mirovie-novoti/115331-v-moskve-najden-mertvym-avtor-knigi-o-kgb-i-prezidentstve-vladimira-putina.html",
            title: 'В Москве найден мертвым автор книги о КГБ и президентстве Владимира Путин'
        },
        {
            link: "/mirovie-novoti/115322-vzryv-v-stambule-delo-ruk-boevika-igil.html",
            title: 'Взрыв в Стамбуле дело рук боевика ИГИЛ'
        },
        {
            link: "/mirovie-novoti/115320-v-stambelu-gorit-otel-s-lyudmi.html",
            title: 'В Стамбуле горит отель с людьми'
        }, { text: "Королевский суд Лондона заявил, что убийство экс-офицера ФСБ Александра Литвиненко возможно было одобрено президентом России Владимиром Путиным. Об этом говорится в докладе, с которым выступил на заседании Палаты общин судья сэр Роберт Оуэн, передает…", link: "/mirovie-novoti/115412-londonskij-sud-vozmozhna-prichastnost-putina-k-ubijstvu-litvinenko.html", tag1: ["/hour/", "Новость часа"], tag2: ["/mirovie-novoti/", "Мировые новости"], title: "Лондонский суд: возможна причастность Путина к убийству Литвиненко" }]
},

{
    href: "/ukraine", theme: 'Украина', content: [

        {
            link: "/ukraine/115450-v-krym-edet-missiya-soveta-evropy-po-pravam-cheloveka.html",
            title: 'ЧВ Крым едет миссия Совета Европы по правам человека'
        },
        {
            link: "/ukraine/115410-karantin-v-kievskix-shkolax-prodlili-do-27-yanvarya.html",
            title: 'Карантин в киевских школах продлили до 27 января'
        },
        {
            link: "/ukraine/115372-v-stolice-zhenshhina-pokusala-policejskix-i-naexala-na-odnogo-iz-nix.html",
            title: 'В столице женщина покусала полицейских и наехала на одного из них'
        },
        {
            link: "/ukraine/115323-sedmaya-volna-mobilizacii-mozhet-nachatsya-v-fevrale.html",
            title: 'Седьмая волна мобилизации может начаться в февраля'
        },
        {
            link: "/ukraine/115310-v-kiev-priletel-gryzlov.html",
            title: 'В Киев прилетел Грызлов'
        },
        { text: "Еврокомиссия внесла изменения в требования для въезда туристов из стран, не входящих в ЕС, и обновила критерии для стран содружества, которые стремятся снять карантинные ограничения. Об этом информирует ответственная пресс-служба учреждения…", link: "/es-uzhestochil-vezd-dlya-turistov-iz-za-shtammov-covid-19.html", tag1: ["/ukraine/", "Новости Украины"], tag2: ["/novost-dnya/", "Новость дня"], title: "ЕС ужесточил въезд для туристов из-за штаммов COVID-19" }
    ]
}, {
    href: "/sport", theme: 'Спорт', content: [
        {
            link: "/sport/115120-blatter-i-platini-diskvalificirovany-fifa-na-8-let.html",
            title: 'Блаттер и Платини дисквалифицированы ФИФА на 8 лет'
        },
        {
            link: "/sport/114952-fyuri-ostalsya-bez-chempionskogo-poyasa-iz-za-revansha-s-klichko.html",
            title: 'Фьюри остался без чемпионского пояса из-за реванша с Кличко'
        },
        {
            link: "/main/114626-ukraina-vpervye-v-istorii-vyxodit-na-evro-iz-stadii-plej-off.html",
            title: 'Украина впервые в истории выходит на Евро из стадии плей-офф'
        },
        {
            link: "/main/113896-vladimir-klichko-mozhet-prinyat-uchastie-v-olimpiade-2022.html",
            title: 'Владимир Кличко может принять участие в Олимпиаде-2026'
        },
        {
            link: "/main/113844-ukraina-proigrala-ispanii-01.html",
            title: 'Украина проиграла Испании 0:1'
        },
        { text: "Знаменитый французский футболист Зинедин Зидан стал главным тренером мадридского Реала. Для футболиста это первый опыт самостоятельной тренерской работы с профессиональной командой.Отметим, что Зидан пришел на смену Рафаэлю Бенитесу, уволенному за неудовлетворительные результаты работы.Зинедин как футболист играл…", link: "/sport/115278-zinedin-zidan-stal-glavnym-trenerom-madridskogo-reala.html", tag1: ["/sport/", "Спортивные новости"], title: "Зинедин Зидан стал главным тренером мадридского Реала" }]
},

{
    href: "/srochno", theme: 'Калейдоскоп новостей', content: [
        {
            link: "/main/115488-goroskop-na-segodnya-3-marta-2023.html",
            title: 'Гороскоп на сегодня'
        },
        {
            link: "/main/115486-kakoj-segodnya-prazdnik-3-marta-2023-vsemirnyj-den-pisatelya.html",
            title: 'Какой сегодня праздник: Всемирный день писателя'
        },
        {
            link: "/main/115484-verbnoe-voskresene-v-2023-godu-kakogo-chisla-tradicii-i-primety.html",
            title: 'Вербное воскресенье: какого числа, традиции и приметы'
        },
        {
            link: "/srochno/115282-top-10-luchshix-knig-2015-goda.html",
            title: 'Топ-10 лучших книг 2024 года'
        },
        {
            link: "/srochno/115276-otkryty-eshhe-4-yelementa-iz-tablicy-mendeleeva.html",
            title: 'Открыты еще 4 элемента из таблицы Менделеева'
        },
        { text: "В 2024 году многие украинцы задаются вопросом, останется ли 8 марта выходным днем.Еще с советских времен многие привыкли в этот день чествовать и поздравлять женщин, и, конечно же, 8 марта уже многие десятилетия остается выходным днем.Однако, в 2024…", link: "/main/115490-8-marta-2023-goda-kak-otdyxaem.html", tag1: ["/main/", "Главная"], tag2: ["/srochno", "Калейдоскоп новостей"], title: "8 марта 2024 года: как отдыхаем" }
    ]
}];

let counter = 0;
const newsDataNow = dataAll.map((item, j) => {
    const content = item.content;

    item.content = content.map((el, i) => {
        const votes = Math.floor((Math.random() * 350) + 50);
        let objectToReturn;
        if (i > 5) {
            objectToReturn = {
                ...el,
                img: images[counter],
                votes,
                date: format(new Date(new Date(Date.now()).getUTCFullYear(), new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getDate() - 1), 'MM/dd/yyyy').split('/').join('.')
            };

            return objectToReturn;
        } else {

            objectToReturn = {
                img: images[counter],
                ...el,
                votes,
                date: format(new Date(new Date(Date.now()).getUTCFullYear(), new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getDate()), 'MM/dd/yyyy').split('/').join('.')
            };
            counter++;
            console.log(counter)
            return objectToReturn;
        }
    })
    return {
        ...item,
    }

}).slice(props.start, props.end)
</script>

<template>
    <div class="container is-widescreen themes" :style="{
        paddingTop: end === 1 ? 0 : '24px',
    }

        ">
        <div class="section is-wide content-middle" v-for=" (theme) in newsDataNow" :key="theme.href">
            <h2 class="theme-title">
                <a :href="theme.href">
                    {{ theme.theme}}
                </a>
            </h2>
            <section class="theme-container">
                <span v-for="i in 5" :key="i" class="img-small">
                    <img width="120" height="70" :src="theme.content[5 - i].img">
                    <span class="iterator">{{i}}</span>
                </span>
                <article class="card article-card" :class="`item-${i}`" v-for="(article, i) in theme.content"
                    :key="article.link">

                    <div class="news-bottom news-bottom-right news-theme-bottom-tags">
                        <strong v-if="article.tag1">

                            <a :href="article.tag1[0]">
                                {{ article.tag1[1] }}
                            </a>
                        </strong>
                        <strong v-if="article.tag2"><a :href="article.tag2[0]">
                                {{ article.tag2[1] }}
                            </a></strong>
                    </div>

                    <div class="img-holder" v-if="i === 5">
                        <img width="120" height="70" :src="article.img">
                    </div>
                    <h2 class="big-title">
                        <a :href="article.link">
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
                <div>
                </div>
            </section>
        </div>
    </div>
</template>

<style>
.big-title {
    padding-left: 12px;
}
.img-small {
    position: relative;
    border: 4px solid white;
}

.img-small img {
    min-height: 70px;
    object-fit: cover;
}
.iterator {
    position: absolute;
    width: 24px;
    height: 24px;
    bottom: 0%;
    transform: translateY(50%);
    z-index: 1;
    right: 0;
    background-color: var(--my-red);
    text-align: center;
    font-weight: bold;
    color: whitesmoke;
}

.theme-title {
    background-color: white;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2rem;
    padding: 0px 16px;
    margin-bottom: 16px;
    margin-top: -4px;
}

section.theme-container {
    display: grid;
    grid-template-columns: 120px 240px 220px 280px;
    grid-template-rows: 120px 150px 120px 70px 70px 70px 70px 70px;
    row-gap: 27px;
    grid-auto-flow: row;
    border-bottom: 1px solid rgb(227, 227, 227);
    padding-bottom: 48px;
}

.item-0 {

    grid-area: 8 / 2 / 8 / 6;
}

.item-1 {

    grid-area: 7 / 2 / 7 / 6;
}

.item-2 {

    grid-area: 6 / 2 / 6 / 6;
}

.item-3 {

    grid-area: 5 / 2 / 5 / 6
}

.item-4 {
    grid-area: 4 / 2 / 4 / 6;
}

.item-5 {
    grid-area: 1 / 1 / 4 / 6;
}





.news-theme-bottom strong,
.news-bottom-right strong,
h2 .news-bottom-right span,
.news-bottom-right strong {
    font-size: 12px;
    color: rgb(255, 255, 255);
    font-weight: 500;
}



.news-theme-bottom {
    transition: all 0.3s ease;
    pointer-events: none;
    padding: 0 8px;
    background-color: rgb(17, 17, 17);
    align-self: center;
    width: 100%;
}

.news-bottom-right.news-theme-bottom-tags {
    position: absolute;
    top: 0;
    z-index: 1;
    font-size: 16px;
    font-weight: 700;
    padding: 4px 8px;

}

.news-bottom.news-bottom-right.news-theme-bottom-tags strong a {
    color: whitesmoke;
    font-size: 16px;
    font-weight: 700;

    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.news-bottom.news-bottom-right.news-theme-bottom-tags strong a:hover {
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.405);
}

.themes {
    background-color: rgb(255, 255, 255);
    padding: 0;
}

.img-holder {
    z-index: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
}

.img-holder img {
    cursor: pointer;
    transition: all 0.3s ease;
    object-fit: cover;
    object-position: 0% 20%;
    filter: grayscale(0.6);
    width: 100%;
    height: 100%;
    border-radius: 0;

}

.img-holder img:not(.item-5 .img-holder img) {
    filter: blur(8px) grayscale(0.2);
    opacity: 0.8;
}


.card.article-card {
    position: relative;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    overflow: hidden;
    margin: 0;
    border-radius: 0;
}

.card.article-card h2 a:not(.card.article-card.item-5 h2 a) {
    padding: 4px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    transition: all 0.3s ease;
}

.card.article-card h2 a:not(.card.article-card.item-5 h2 a):hover {
    color: #700303;
}


.card.article-card .news-theme-bottom strong:not(.card.article-card.item-5 .news-theme-bottom strong) {
    color: rgb(60, 60, 60);

}

.card.article-card .news-theme-bottom:not(.card.article-card.item-5 .news-theme-bottom) {
    background-color: whitesmoke;
}

.section.content-middle {
    padding: 0 0 96px 0;
}

.card.article-card h2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto auto;
    font-weight: 700;
    min-width: 100%;
    color: #b6b6b6;
    padding: 0 24px;
    text-align: left;
    z-index: 0;
}


.card.article-card h2 a {
    color: #ffffff;
    border-left: 4px solid var(--my-red);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto auto;
    font-weight: 700;
    min-width: 100%;

    color: #b6b6b6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto auto;
    font-weight: 700;
    max-width: 100%;
    color: #b6b6b6;
}


.item-5.card.article-card h2 a {
    color: #ffffff;
    font-size: 3rem;
    padding: 48px 12px;
}


.theme-title::before {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: var(--my-red);
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
}

.item-5 .card.article-card .img-holder>h2>a {
    font-size: 4rem;
    padding: 0;
}

@media screen and (max-width: 1024px) {
    section.theme-container {
        display: grid;
        grid-template-columns: 80px 120px 90px 140px;
        grid-template-rows: 80px 90px 90px 50px 50px 50px 50px 50px;
        row-gap: 27px;
        grid-auto-flow: row;
    }

    .section.content-middle {
        padding: 0 0 24px 0;
    }
    .theme-title {
        text-align: center; 
    }

    .theme-title::before {
        left: 18px;
    }
    
    .item-5.card.article-card h2 a{
        padding: 12px;
        font-size: 2.5rem;
    }
}


@media screen and (max-width: 560px) {
    section.theme-container {
        display: grid;
        grid-template-columns: 80px 90px 90px 90px;
        grid-template-rows: 70px 70px 70px 90px 90px 90px 90px 90px;
        row-gap: 27px;
        grid-auto-flow: row;
    }

    .section.content-middle {
        padding: 0 0 24px 0;
    }
    .theme-title {
        text-align: center; 
    }

    .theme-title::before {
        left: 18px;
    }
    
    .item-5.card.article-card h2 a{
        padding: 12px;
        font-size: 1.5rem;
    }

    .theme-title {
        font-size: 24px;
    }
    
    .card.article-card h2:not(.card.article-card.item-5 h2) {
        padding: 0;
        font-weight: 300;
    }

    .container.content-conteiner {
        padding: 0 !important;
    }

    .news-bottom.news-bottom-right.news-theme-bottom-tags strong a {
        font-size: 12px;
        font-weight: 700;
    }
}
</style>
