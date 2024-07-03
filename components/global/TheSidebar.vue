<template>
    <div v-if="isOpen" class="sidebar-overlay" @click="closeSidebar">
      <div class="sidebar" @click.stop>
        <button @click="closeSidebar" class="close-btn">X</button>
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    modelValue: {
      type: Boolean,
      default: false
    }
  });
  
  const emit = defineEmits(['update:modelValue']);
  
  const isOpen = ref(props.modelValue);
  
  watch(() => props.modelValue, (newVal) => {
    isOpen.value = newVal;
  });
  
  const closeSidebar = () => {
    emit('update:modelValue', false);
  };
  </script>
  
  <style scoped>
  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
  }
  .sidebar {
    width: 300px;
    background: white;
    height: 100%;
    padding: 20px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  }
  .close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  </style>
  