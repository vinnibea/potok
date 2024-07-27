<script setup>
import backgroundUrl2 from '~/assets/s2.jpg';
const dataAll = [{
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
        }
    ]
}, {
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
        }]
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
        }]
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
        }
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
        }]
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
        }
    ]
}];
</script>

<template>
    <div class="container is-widescreen themes">
        <div class="section is-wide content-middle" v-for="theme in dataAll" :key="theme.href">
            <h2 class="title">
                <a :href="theme.href">
                    {{ theme.theme }}
                </a>
            </h2>
            <section class="content-middle items">
                
                <article class="card article-card" v-for="article in theme.content" :key="article.link">
                    <a :href="article.link">
                    <div class="img-holder">
                        <img :src="backgroundUrl2">
                    </div>
                </a>
                    <h2 class="subtitle is-5"><a :href="article.link">{{ article.title }}
                        <div class="news-bottom news-theme-bottom">
                            <strong class="theme-time">00:00</strong>
                            <div class="news-bottom news-bottom-right">
                                <Icon name="mdi:eye"> </Icon>
                                
                            </div>
                        </div>
                    </a>
                       
                    </h2>
                    
                </article>
         
            </section>
        </div>
    </div>
</template>

<style> 
.news-theme-bottom {
    transition: all 0.3s ease;
    transform: translateY(100%);
    opacity: 0;
    pointer-events: none;
    padding: 4px;
    background-color: rgba(168, 166, 166, 0.156);
    width: 102%;
    align-self: center;
    
}
strong.theme-time {
    color:whitesmoke;
    font-size: 12px;
}
.themes {
    padding-top: 24px;
    background-color:white;
}
.img-holder {
    width: 100%;
    border-radius: 4px;
    background-color: var(--my-red);
    position: absolute;
    z-index: 0;
    bottom: 0px;
    top: 0;
    left: 0;
    right: 0;
}

.img-holder img {
    opacity: 0.8;
    cursor: pointer;
    transition: all 0.3s ease;
    object-fit: cover;
    object-position: 40% 20%;
    filter: grayscale(0.5);
    width: 100%;
    height: 100%;
}

.content-middle {
    padding: 0;
}
.content-middle.items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-bottom: 1px solid rgb(181, 181, 181);
   
}
.content-middle.items {
    gap: 12px;
    padding: 0px 12px 48px;
    background-color: white;
    justify-content: space-between;
    margin-bottom: 24px;
}


.card.article-card {
    flex-basis: 30%;
    box-shadow: none;
    justify-content: stretch;
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 220px;
    border-radius: 4px;
    overflow: hidden;
    margin: 0;
}

.card.article-card:first-child, .card.article-card:first-child .img-holder,.card.article-card:first-child img , .card.article-card:nth-child(2), .card.article-card:nth-child(2) .img-holder {
    height: 340px;
}

.card.article-card:hover .news-theme-bottom {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
    padding: 2px 8px;
}

.card.article-card:hover img {
    transform: scale(1.2) translate(0%, -2%);
    opacity: 1;
    filter: grayscale(0.4)
}
.card.article-card:nth-child(1){
    height: 340px;
}
.card.article-card:nth-child(2){
    flex-basis: calc(66% - 1%);
    height: 340px;
}

.article-card  .subtitle.is-5 > a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(36, 36, 36, 0.579);
    backdrop-filter: blur(8px);
    font-size: 16px;
    font-weight: bold;
    min-height: 76px;
    position: relative;
  

    color: #fefefe;
    padding: 4px 4px 2px;
   text-align: left;
}

.content-middle .title {
    position: relative;
    text-transform: uppercase;
}

.content-middle .title::before {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    background-color:var(--my-red);
    border-radius: 50%;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
}

@media screen and (max-width: 1024px) {
    .content-middle.items {
        flex-direction: column;
        gap: 48px;
    }

    .card.article-card {
        flex-basis: 30%;
        box-shadow: none;
        justify-content: stretch;
        position: relative;
        width: 100%;
        
        height: 230px;
    }

    .content-middle .title::before {
        display: none;
        opacity: 0;
    }
}
</style>
