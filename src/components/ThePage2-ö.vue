<template>
  <q-layout>
  <q-page>

      <q-header elevated>
        <q-toolbar class="row bg-yellow"></q-toolbar>
        <q-toolbar style="background-color:black;"></q-toolbar>


        <q-toolbar class="row flex-center" style="width: 100%; background-color: #231f20;">
            <q-btn-toggle class="cursor-pointer"
            v-model="model"
            toggle-color="#231f20"
            :options="[
              {label: 'ÇİZGİ ROMAN', value: 'one', slot: 'one'},
              {label: 'MANGA', value: 'two', slot: 'two'},
              {label: 'AKSESUAR', value: 'three', slot: 'three'},
              {label: 'KART OYUNLARI', value: 'four', slot: 'four'},
              {label: 'DEFTER', value: 'five', slot: 'five'},
              {label: 'POSTER-TAKVİM', value: 'six', slot: 'six'},
              {label: 'ART-DRAWING BOOKS', value: 'seven', slot: 'seven'},
            ]"
          >
              <template v-slot:one>
              <q-tooltip>

                <q-toolbar>ÇİZGİ ROMAN-TÜRKÇE</q-toolbar>
                <q-toolbar>ÇİZGİ ROMAN-İNGİLİZCE</q-toolbar>

              </q-tooltip>
              </template>

              <template v-slot:two>
                <q-tooltip>

                  <q-toolbar>Türkçe</q-toolbar>
                  <q-toolbar>İngilizce</q-toolbar>
                  <q-toolbar>Art-Çizim Kitapları</q-toolbar>

                </q-tooltip>
              </template>

              <template v-slot:three>
                <q-tooltip>
                  <q-toolbar>Anahtarlık</q-toolbar>
                  <q-toolbar>Bardak</q-toolbar>
                  <q-toolbar>..</q-toolbar>
                </q-tooltip>
              </template>

            </q-btn-toggle>

        </q-toolbar>
      </q-header>


  </q-page>
</q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const model = ref<string>('three');
</script>


