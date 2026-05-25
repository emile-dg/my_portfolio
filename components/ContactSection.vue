<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
    <section id="contact" class="container mx-auto grid grid-cols-12 py-24">
        <h2 class="col-span-12 text-[clamp(4rem,9vw,9rem)] font-bold leading-none">
            {{ t('contact.heading') }}
        </h2>

        <address class="col-span-12 mt-10 grid grid-cols-12 gap-8 bg-zinc-100 p-10 not-italic">
            <div class="col-span-12 md:col-span-3">
                <h3 class="font-bold">{{ t('contact.email.label') }}</h3>
                <a href="mailto:emiledjida404@gmail.com" class="mt-3 block underline">
                    emiledjida404@gmail.com
                </a>
            </div>

            <div class="col-span-12 md:col-span-3">
                <h3 class="font-bold">{{ t('contact.phone.label') }}</h3>
                <a href="tel:+237694764773" class="mt-3 block">
                    +237 694-764-773
                </a>
            </div>

            <div class="col-span-12 md:col-span-3">
                <h3 class="font-bold">{{ t('contact.whatsapp.label') }}</h3>
                <a
                    href="https://wa.me/237694764773"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="mt-3 block underline"
                >
                    {{ t('contact.whatsapp.cta') }}
                </a>
            </div>

            <div class="col-span-12 flex gap-5 md:col-span-3 md:justify-end">
                <nuxt-link to="https://github.com/emiledjida404" aria-label="GitHub">
                    GitHub
                </nuxt-link>
                <nuxt-link to="#" aria-label="LinkedIn">LinkedIn</nuxt-link>
            </div>
        </address>
    </section>
</template>
