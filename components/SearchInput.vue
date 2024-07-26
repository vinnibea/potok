
<script setup>

const emit = defineEmits(['closeSearch'])
const props = defineProps({
    isMobile: {
        type: Boolean,
        default: false,
    }
})
const onCloseSearch = (e) => {
    emit('closeSearch')
}

const listener = (e) => {
    if(props.isMobile) {
        return;
    }
    if(!Array.from(e.target.classList).includes('search-input') && !Array.from(e.target.classList).includes('icon-search')) {
        console.log('true')
        emit('closeSearch')
    }
 }
onMounted(() => {
 document.addEventListener('click', listener)
})
onUnmounted(() => {
    document.removeEventListener('click', listener)
})

</script>
<template>
    <div class="field search-field" :class="[{
        'mobile-search-field': isMobile
    }]">
        <p class="control has-icons-left has-icons-right" :class="[{
            'mobile-search-field': isMobile
        }]">
            <input class="input search-input" type="text" placeholder="ПОИСК" />
          <span class="icon is-left">
            <Icon name="ri:search-line" class="input-icon"></Icon>
          </span>
          <span class="icon is-small is-right input-icon" @click="onCloseSearch">
           
            <Icon name="ri:close-large-line" class="input-icon"></Icon>
          </span>
        </p>
      </div>
    
</template>
<style>

 .icon.is-small.is-right.input-icon {
    padding: 4px;
    pointer-events: all;
 }
.control.has-icons-left .icon, .control.has-icons-right .icon {
    color: var(--bulma-input-icon-color);
    height: var(--bulma-input-height);
    pointer-events: none;
    position: absolute;
    top: 50%;
    width: var(--bulma-input-height);
    z-index: 4;
    transform: translate(0, -50%);
}

.control.has-icons-left .icon {
    color: grey;
    pointer-events: none;
}
.is-right > .input-icon {
    color: red;
}

.control.has-icons-right .icon {
   
    height: var(--bulma-input-height);
    pointer-events: none;
    position: absolute;
    top: 50%;
    z-index: 4;
    transform: translate(0, -50%);
    background-color: none;
}
span.input-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    height: 100%;
}
.field.search-field, .control.has-icons-left.has-icons-right {
    padding: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 100%;
    z-index: 20000;
}


.input.search-input {
    border-radius: 0;
    outline: none;
    border: none;
    height: 100%;
    padding-right: 120px;
    box-shadow: 1px 1px 4px rgba(72, 72, 72, 0.181);
}
.input.search-input:focus {
    outline: none;
    border: none;
    box-shadow: none;
}

.control.has-icons-left .input:focus ~ .icon, .control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon, .control.has-icons-right .select:focus ~ .icon {
    color: lightgrey;
    pointer-events: all;
    cursor: pointer;
    z-index: 20000;
}

.control.has-icons-left .input:hover ~ .icon, .control.has-icons-left .select:hover ~ .icon, .control.has-icons-right .input:hover ~ .icon, .control.has-icons-right .select:hover ~ .icon {
    color: lightgrey;
    pointer-events: all;
}

@media screen and (max-width: 700px) {
    .field.search-field, .control.has-icons-left.has-icons-right {
        top: 0;
        display: none;
        position: relative;
    }

    .field.search-field.mobile-search-field, .control.has-icons-left.has-icons-right.mobile-search-field {
        display: block;
        padding: 4px 20px;
        margin: 0;
        left: 0;
        right: 0;
        min-height: fit-content;
        background-color: white;
    }

    .icon.is-small.is-right.input-icon {
        display: none;
    }

    .input.search-input {
        border: 1px solid rgba(72, 72, 72, 0.418);
    }

    .control.has-icons-left .icon.is-left {
        left: 18px;
    }

    .input.search-input:focus {
        border: 1px solid transparent;
        border-bottom: 1px solid red;
    }
    

}
</style>