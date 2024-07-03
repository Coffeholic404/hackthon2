<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
    layout: "sign-in",
})
</script>

<template>
    <div class="signin bg-black min-h-[100dvh] grid place-items-center font-DM">
        <div class=" bg-purple-700">
            <LangToggle />
        </div>
        <div class=" bg-form-bg w-full max-w-[35.25rem] px-12 py-9 rounded-[15px]">
            <section class=" flex flex-col justify-center items-center gap-4">
                <h2 class=" text-white font-bold text-4xl">
                    {{t("Sign In")}}
                </h2>
                <p class=" text-text-color font-normal text-base"> {{t("Enter your email and password to sign in!")}}</p>
                <form action="" class=" w-full space-y-8">
                    <div class=" space-y-2">
                        <label for="email" class=" block text-start text-sm font-medium text-white">{{t("Email")}}<span
                                class=" text-violet-500">*</span></label>

                        <input type="email" name="email" id="email" placeholder="mail@simmple.com" class='email w-full min-w-0 text-sm font-normal  px-4 h-12 text-text-color bg-form-bg border border-white/10 rounded-[15px] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-red-500 invalid:text-red-600' required>
                    </div>
                    <div class=" space-y-2">
                        <label for="password" class=" block text-start text-sm font-medium text-white">{{t("Password")}}<span
                                class=" text-violet-500">*</span></label>
                        <input type="password" name="password" id="password" placeholder="Min. 8 Characters"
                            class='email w-full min-w-0 text-sm font-normal  px-4 h-12 text-text-color bg-form-bg border border-white/10 rounded-[15px]'
                            required>
                    </div>
                    <p class=" text-center tracking-tight text-text-color">{{t("Not registered yet?")}} <strong
                            class=" text-white">
                            {{t("Create an Account")}} 
                            </strong></p>
                    <button type="submit"
                        class=" bg-button-bg submet w-full flex appearance-none text-center items-center justify-center select-none align-middle leading-[1.2] rounded-[16px]  h-[45px] max-w-[25.625rem] mx-auto font-bold">{{t("Sign In")}}</button>
                </form>
            </section>
        </div>
    </div>
</template>

<style scoped>
.signin {
    align-content: center;
}
</style>