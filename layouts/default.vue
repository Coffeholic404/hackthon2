<script setup lang="ts">
const toggleSidebar = () => {
    const side = document.querySelector('.sidebar')
    side.classList.add("toogleside")

    alert("test")

    // emitToggle();
};

const submitForm = (data) => {
    console.log(data)
}
</script>
<template>
    <div class="app-wrapper w-full min-h-[100dvh] bg-bg-color">
        <main class=" main">
            <div class=" grid place-items-center space-y-6">
                <ThemToggle />
                <LangToggle />
                <div class="text-center">
                    <button
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation"
                        aria-controls="drawer-navigation" @click="toggleSidebar">
                        Show navigation
                    </button>
                </div>

                <div class="">
                    <FormKit @submit="submitForm" type="form">
                        <FormKit type="text" name="name" label="Name" />
                    </FormKit>
                </div>
            </div>
        </main>

        <aside class=" sidebar rounded-e-3xl bg-form-bg min-h-[100dvh]">
            <TheSidebar />
        </aside>
    </div>
</template>

<style scoped></style>
