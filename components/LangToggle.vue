<template>
    <div>
      <button @click="toggleLanguage">{{ currentLanguage === 'en' ? 'العربية' : 'English' }}</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  
  const { t, locale, setLocale } = useI18n()
  const currentLanguage = ref(locale.value)
  
  const toggleLanguage = () => {
    const newLocale = currentLanguage.value === 'en' ? 'ar' : 'en'
    currentLanguage.value = newLocale
    setLocale(newLocale)
  
    // Change layout direction based on language
    const isRtl = newLocale === 'ar'
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
  }
  </script>
  