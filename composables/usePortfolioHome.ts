export function usePortfolioHome() {
    const {t} = useI18n()
    const localePath = useLocalePath()

    const experienceSlugs = ['cryptoaccounting', 'cealis-tech-studio', 'kamix', 'clinkast'] as const
    const experiences = computed(() => experienceSlugs.map((slug, index) => ({
        slug,
        role: index === 1 ? t('portfolio.experience.cealisRole') : t(`experience.items[${index}].role`),
        company: t(`experience.items[${index}].company`),
        period: t(`experience.items[${index}].period`),
        url: localePath(`/experience/${slug}`),
    })))

    return {
        experiences: readonly(experiences),
        experienceUrl: localePath('/#experience'),
        contactUrl: localePath('/#contact'),
    }
}
