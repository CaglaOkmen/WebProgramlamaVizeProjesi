<template>
  <q-page>
    <q-container class="q-pa-md">
      <q-card class="q-card-bordered">
        <q-card-section style="text-align: center;">
          <div
            style="background-image: url(//ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/images/products-header-bg.svg?revision=1658931379);
              background-repeat: no-repeat;
              background-size: cover;
              color: #fff;
              display: inline-block;
              padding: 20px;
              border-radius: 8px;"
            class="text-h6"
          >
            Yeni Üyelik
          </div>
        </q-card-section>

        <q-card-section style="width: 40%;">
          <div class="row">
            Adı
            <q-field style="width: 40%; margin-right: 28%;" outlined v-model="firstName" />
          </div>

          <div class="row">
            Soyadı
            <q-field style="width: 40%; margin-right: 28%;" v-model="lastName" outlined />
          </div>

          <div class="row">
            Email
            <q-field style="width: 40%; margin-right: 28%;" v-model="email" outlined type="email" />
          </div>

          <div class="row">
            Şifre
            <q-field
              style="width: 40%; margin-right: 28%"
              v-model="password"
              outlined
              type="password"
            />
          </div>

          <div class="row">
            Cinsiyet
            <div style="width: 40%; margin-right: 28%">
              <q-checkbox :model-value="isGenderSelected('female')" @update:model-value="updateGender('female')" label="Kadın" />
              <q-checkbox :model-value="isGenderSelected('male')" @update:model-value="updateGender('male')" label="Erkek" />
              <q-checkbox :model-value="isGenderSelected('others')" @update:model-value="updateGender('others')" label="Belirtmek İstemiyorum" />
            </div>
          </div>

          <div class="row">
            Cep Telefonu
            <q-field
              style="width: 40%; margin-right: 28%;"
              label="(5XX) XXX XX XX"
              v-model="phoneNumber"
              outlined
              type="tel"
            />
          </div>

          <q-card-section class="column">
            <q-checkbox v-model="acceptTerms" label="Kullanım Koşulları'nı kabul ediyorum" />
            <q-checkbox
              style="text-decoration: underline; text-decoration-color: black;"
              v-model="acceptPrivacy"
              label="Gizlilik Politikası'nı kabul ediyorum"
            />
            <q-checkbox
              style="text-decoration: underline; text-decoration-color: black;"
              v-model="readPrivacyText"
              label="Kişisel verilerin işlenmesine ilişkin Aydınlatma Metnini okudum."
            />
          </q-card-section>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn label="İptal" color="gray" style="background-color: #eee;" @click="cancelForm" />
          <q-btn type="submit" label="Kaydet" label-color="white" style="background-color: #f9ec11;" />
        </q-card-actions>
      </q-card>
    </q-container>
  </q-page>
</template>

<script>
export default {
  name: 'MemberSignUp',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>
