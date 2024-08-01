<script setup>

const zodiacs = ['mdi:zodiac-aquarius', 'mdi:zodiac-aries', 'mdi:zodiac-cancer', 'mdi:zodiac-capricorn', 'mdi:zodiac-gemini', 'mdi:zodiac-leo', 'mdi:zodiac-libra', 'mdi:zodiac-pisces', 'mdi:zodiac-sagittarius', 'mdi:zodiac-scorpio', 'mdi:zodiac-taurus', 'mdi:zodiac-virgo']
</script>

<template>
    <div class="">
       
        <div class="card-astro">
             <p class="title">
                <a  href="/goroskop/115462-ezhednevnyj-astroprognoz-27-yanvarya-2022.html">Ежедневный 
                   
                        астропрогноз
                </a>
            </p>
            <p class="title is-4" > 
              
                    <a v-for="zodiac in zodiacs" :key="zodiac" href="/goroskop/115462-ezhednevnyj-astroprognoz-27-yanvarya-2022.html">
                        <Icon class="" :name="zodiac"></Icon>
                    </a>
               
            </p>
          </div>
      

          
               <div class="card-astro card-insomnia">
                     <p class="title">
                
                            Cонник
                       
                    </p>
                    <p class="title is-4"> 
                        <a href="/sonnik/page/1/letter/%C0/">А</a> <a href="/sonnik/page/1/letter/%C1/">Б</a> <a href="/sonnik/page/1/letter/%C2/">В</a> <a href="/sonnik/page/1/letter/%C3/">Г</a> <a href="/sonnik/page/1/letter/%C4/">Д</a> <a href="/sonnik/page/1/letter/%C5/">Е</a> <a href="/sonnik/page/1/letter/%C6/">Ж</a> <a href="/sonnik/page/1/letter/%C7/">З</a> <a href="/sonnik/page/1/letter/%C8/">И</a> <a href="/sonnik/page/1/letter/%CA/">К</a> <a href="/sonnik/page/1/letter/%CB/">Л</a> <a href="/sonnik/page/1/letter/%CC/">М</a> <a href="/sonnik/page/1/letter/%CD/">Н</a> <a href="/sonnik/page/1/letter/%CE/">О</a> <a href="/sonnik/page/1/letter/%CF/">П</a> <a href="/sonnik/page/1/letter/%D0/">Р</a> <a href="/sonnik/page/1/letter/%D1/">С</a> <a href="/sonnik/page/1/letter/%D2/">Т</a> <a href="/sonnik/page/1/letter/%D3/">У</a> <a href="/sonnik/page/1/letter/%D4/">Ф</a> <a href="/sonnik/page/1/letter/%D5/">Х</a> <a href="/sonnik/page/1/letter/%D6/">Ц</a> <a href="/sonnik/page/1/letter/%D7/">Ч</a> <a href="/sonnik/page/1/letter/%D8/">Ш</a> <a href="/sonnik/page/1/letter/%D9/">Щ</a> <a href="/sonnik/page/1/letter/%DD/">Э</a> <a href="/sonnik/page/1/letter/%DE/">Ю</a> <a href="/sonnik/page/1/letter/%DF/">Я</a>
                    </p>
                </div>
                  
              
    </div>
</template>

<style>
.card-astro {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 48px 0;
}
.card-astro .title .is-4 {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.card-insomnia .title.is-4 {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 24px;
    max-width: 240px;
} 

.card-insomnia .title.is-4 a {
    padding: 4px 8px;
    background-color: whitesmoke;
}
.card-astro .title.is-4 a {
    transition: all .3s ease;
}
.card-astro .title.is-4 a:hover {
    color: rgb(153, 18, 18);
}

.card-astro p.title {
    font-size: 24px;
}


</style>