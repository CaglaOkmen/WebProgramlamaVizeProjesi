<template>
  <q-toolbar2 class="row text-left bg-yellow text-black">
    <q-toolbar-title2 class="text-left col-6  text-bold" style="font-size: 12px;">Bizi Takip Edin

      <q-icon name="fa-brands fa-facebook" style="margin: 12px;" size="12px" />
      <q-icon name="fa-brands fa-twitter"  style="margin:8px" size="12px" />
      <q-icon name="fa-brands fa-youtube" style="margin: 8px" size="12px" />
      <q-icon name="fa-brands fa-instagram" style="margin:8px" size="12px" />
    </q-toolbar-title2>


    <q-toolbar-title2 class="row col-6 text-right text-bold" style="font-size: 11px;">
      <div style="margin-top: 10px;">GEREKLİ ŞEYLER B2B (BAYİLİK)</div>
      <div style="margin: 10px;">HAFTANIN ÜRÜNÜ</div>
      <div style="margin: 10px;">GEREKLİ ŞEYLER</div>
      <div style="margin: 10px;">MARKALARIMIZ</div>
    <div style="margin: 10px;">BİZ KİMİZ</div>

    </q-toolbar-title2>
  </q-toolbar2>

  <q-header2 elevated class="bg-black text-white" :height-hint="98">
    <q-toolbar2 class="flex flex-center bg-black text-black ">
      {{ promotionText }}
      
      <q-input class="bg-white"  dark borderless v-model="text" :readonly="readonly" :disable="disable" style="border: 2px solid yellow; height: 45px;">
        <template v-slot:append>
            <q-icon name="search" class="text-grey-8" />
        </template>

    </q-input>
    
    
    <q-toolbar-title2 class="flex justify-center">
      <img class="HGDIR black" width="40%" :src="logoSrc">
    </q-toolbar-title2>

    <div class="q-pa-md q-gutter-sm">
      <q-btn flat style="color: #ffffff" label="ŞİPARİŞ TAKİBİ" @click="handleButtonClick" />
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn flat style="color: #ffffff" label="ÜYE GİRİŞİ" @click="handleButtonClick" />
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn flat style="color: #ffffff" label="SEPET" @click="handleButtonClick" />
    </div>
          
    


    </q-toolbar2>

    <q-tabs align="center text-white" class="bg-black">
      <q-route-tab to="/" label="Çizgi Roman" />
      <q-route-tab to="/page4" label="Manga" />
      <q-route-tab to="/" label="Aksesuar" />
      <q-route-tab to="/" label="Kart Oyunları" />
      <q-route-tab to="/" label="Defter" />
      <q-route-tab to="/" label="Poster-Takvim" />
      <q-route-tab to="/" label="Art Drawing Books" />
    </q-tabs>
  </q-header2>

  <q-page-container2>
    <router-view />
  </q-page-container2>


</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
name: 'YourComponentName', // Change 'YourComponentName' to the actual component name

methods: {
  handleButtonClick(): void {
    // Düğme tıklandığında yapılacak işlemleri burada tanımlayabilirsiniz.
    console.log('Fuchsia Flat button clicked.');
  }
 },


data(){
  return{
    logoSrc: 'https://ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/uploads/logo.png?revision=1658931379',
    primotionText: "gerekli seyler",
    text: '',      // Default text value
    readonly: false,
    disable: false
  };
}
// Add any necessary component options here

});
</script>