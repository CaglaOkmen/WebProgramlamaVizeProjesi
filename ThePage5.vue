<template>
  <div class="sayfa bg-black">
  <q-layout view="hHh lpR fFf"  style="max-width: 1260px;">
    <q-page-container class="bg-black-50 text-left" >
      <q-scroll-area style="height: 100vh;" class="bg-grey-3 round-borders shadow-2">
      <q-page >
        <div class="giris q-pa-md">
          <div style="font-size: 20px; font-weight: bold;">Hoş geldiniz</div>
          <div class="text-subtitle1">Hızlı ve güvenli alışverişe giriş yapın!</div>
          <q-form @submit="onSubmit" class="q-gutter-md q-mt-md">

            <q-input v-model="email" placeholder="E-mail adresiniz" color="white" style="border: 1px solid black;"/>
            <q-input v-model="password" placeholder="Şifreniz" color="white" type="password" style="border: 1px solid black;"/>
            
            <q-btn class="login" label="Giriş Yap" type="submit"/>
            
            <div class="row">
              <q-checkbox v-model="right" class="col-8" color="pink" checked-icon="square" label="Beni Hatırla" />
              <router-link to="" class="text-black col-4 q-my-md">Şifremi Unuttum</router-link>
            </div>
          </q-form>
          <div class="line col-4"></div>
          <div class="text-subtitle1 text-bold q-mt-md">HENÜZ ÜYE DEĞİL MİSİNİZ?</div>
          <div class="text-subtitle1">Kolayca üye olabilirsiniz.</div>
          <q-btn class="buton q-mt-md q-dark" label="Hemen Üye Ol"/>
          <q-btn class="buton q-mt-md" label="Facebook İle Bağlan" color="blue-10"/>
          <q-btn class="buton q-my-md" label="Google İle Bağlan" color="primary"/>
        </div>
      </q-page>
    </q-scroll-area>
    </q-page-container>
  </q-layout>
</div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'GirisYap',
  setup () {
    const email = ref<string>('')
    const password = ref<string>('')
    const remember = ref<boolean>(false)

    function onSubmit (e: Event) {
      e.preventDefault()
      console.log(`E-posta: ${email.value}, Şifre: ${password.value}, Beni Hatırla: ${remember.value}`)
    }

    return {
      email,
      password,
      onSubmit,
      right: ref(false),
      remember,
    }
  }
}
</script>

<style scoped>
.sayfa {
  text-align: -webkit-center;
  display: block;
}
.bg-black-50 {
  background-color: rgba(0, 0, 0, 0.5);
}

.giris {
  width: 38%; 
  background-color: white;
  padding-top: 50px;
  padding-right: 70px;
  padding-left: 55px;
  margin-left: auto;
  padding-bottom: 9%;

}
.buton {
  width: 100%; 
  height: 40px;
  font-weight: bold;
  font-size: 16px;
}

.line {
  flex-grow: 1;
  height: 1px;
  margin-top: 32px;
  background: rgba(192, 192, 192, 0.473);
} 

.login {
  width: 95%; 
  background-color: rgb(240, 229, 26); 
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
}
</style>
