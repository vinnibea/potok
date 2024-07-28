<script setup>
import backgroundUrl2 from '~/assets/s2.jpg';
import { format } from 'date-fns';

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


const newsDataNow = dataAll.map(item => {
    const content = item.content;
    item.content = content.map((el, i) => {
        const votes = Math.floor((Math.random() * 350) + 50);
        if (i > 5) {
            return {
                ...el,
                votes,
                date: format(new Date(new Date(Date.now()).getUTCFullYear(), new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getDate() - 1), 'MM/dd/yyyy').split('/').join('.')
            };
        } else {

            return {
                ...el,
                votes,
                date: format(new Date(new Date(Date.now()).getUTCFullYear(), new Date(Date.now()).getMonth() + 1, new Date(Date.now()).getDate()), 'MM/dd/yyyy').split('/').join('.')
            };
        }
    })
    return {
        ...item,
    }
}).slice(props.start, props.end)
</script>

<template>
    <div class="container is-widescreen themes" :style="{
      paddingTop: end === 1 ?  0 : '96px',
    }
        
    ">
        <div class="section is-wide content-middle" v-for=" (theme) in newsDataNow" :key="theme.href">
            <h2 class="theme-title">
                <a :href="theme.href">
                    {{ theme.theme }}
                </a>
            </h2>
            <section class="theme-container">
                <article class="card article-card" :class="`item-${i}`" v-for="(article, i) in theme.content"
                    :key="article.link">
                    <div class="img-holder">
                        <img :src="backgroundUrl2">
                    </div>


                    <h2 class="">
                        <a :href="article.link">
                            {{ article.title }}
                        </a>
                        <div class="news-bottom news-theme-bottom">
                            <strong>{{ article.date }}</strong>
                            <div class="news-bottom news-bottom-right">
                                <strong>{{ article.votes }}</strong>
                                <Icon name="mdi:eye"> </Icon>
                            </div>

                        </div>


                    </h2>

                </article>
                <div>


                </div>


            </section>


        </div>
    </div>
</template>

<style>
.theme-title {
    background-color: white;
    position: relative;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 2rem;
    padding: 8px 12px;
}

section.theme-container {
    display: grid;
    grid-template-columns: 240px 220px 280fr;
    grid-template-rows: 190px 150px 150px 150px 250px;
    gap: 4px;
    grid-auto-flow: row;
}

.item-0 {

    grid-area: 1 / 1 / 3 / 2;
}

.item-1 {

    grid-area: 1 / 2 / 1 / -1;
}

.item-2 {

    grid-area: 1 / 4 / 3 / -1;
}

.item-3 {

    grid-area: 2 / 2 / 4 / -1;
}

.item-4 {
    grid-area: 3 / 1 / 3 / 2;
}

.item-5 {

    grid-area: 4 / 1 / 6 / -1;
}




h2 .news-theme-bottom strong {
    font-size: 12px;
    color: rgb(186, 186, 186);
    font-weight: 700;
}

.news-theme-bottom {
    transition: all 0.3s ease;
    pointer-events: none;
    padding: 4px;
    background-color: rgba(166, 166, 166, 0.156);
    align-self: center;
    width: 100%;
}


.themes {
    background-color: rgb(255, 255, 255);
    padding: 0;
}

.img-holder {
    background-color: var(--my-red);
    z-index: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.img-holder img {
    opacity: 0.9;
    cursor: pointer;
    transition: all 0.3s ease;
    object-fit: cover;
    object-position: 0% 20%;
    filter: grayscale(0.5);
    width: 100%;
    height: 100%;
    border-radius: 0;

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


.card.article-card:hover img {
    background: 50% 50%;
    opacity: 1;
    filter: grayscale(0.4)
}

.section.content-middle {
    padding: 0 0 96px 0;
}

.card.article-card h2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 16px;
    font-weight: bold;

    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;

    color: #ffffff;

    margin: 0;
    text-align: left;
    z-index: 0;
    font-size: 18px;
}

.card.article-card h2 a {
    color: #ffffff;
    padding: 24px 12px;
    font-size: 1.5rem
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

@media screen and (max-width: 1024px) {
    .content-middle.items {
        flex-direction: column;
        gap: 28px;
    }

    .card.article-card {

        box-shadow: none;
        position: relative;
    }

    .theme-title::before {
        width: 8px;
        height: 8px;
        left: 0;
    }

    section.theme-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 24px;
    }

    .card.article-card {
        flex-basis: 20%;
        min-height: 250px;
        flex: 1 1;
    }
    .theme-title {
        padding: 4px 12px;
    }
}
</style>
