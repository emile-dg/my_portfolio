export type PortfolioProjectId = 'fibisoft' | 'cryptoaccounting' | 'weespin' | 'xentryo' | 'reap'

type ProjectDefinition = {
    id: PortfolioProjectId
    categoryKey: string
    caseStudy?: { slug: string; englishHeading?: string; frenchHeading?: string }
    image?: { src: string; width: number; height: number; altKey: string }
}

const projectDefinitions: ProjectDefinition[] = [
    {
        id: 'fibisoft',
        categoryKey: 'portfolio.projects.fibisoft.category',
        image: {
            src: '/images/gallery/fibisoft/cover.png',
            width: 1028,
            height: 541,
            altKey: ''
        },
    },
    {
        id: 'cryptoaccounting',
        categoryKey: 'portfolio.projects.cryptoaccounting.category',
        caseStudy: {
            slug: 'cryptoaccounting'
        },
        image: {
            src: '/images/gallery/cryptoaccounting/cover.png',
            width: 1028,
            height: 541,
            altKey: 'portfolio.projects.cryptoaccounting.imageAlt'
        },
    },
    {
        id: 'weespin', categoryKey: 'portfolio.projects.weespin.category',
        caseStudy: {
            slug: 'cealis-tech-studio',
            englishHeading: 'internal-deep-link-product-front-facing-clients',
            frenchHeading: 'produit-de-deep-link-interne-clients-front-facing'
        },
    },
    {id: 'xentryo', categoryKey: 'portfolio.projects.xentryo.category'},
    {
        id: 'reap', categoryKey: 'portfolio.projects.reap.category',
        caseStudy: {
            slug: 'cealis-tech-studio',
            englishHeading: 'sports-data-analytics-platform',
            frenchHeading: 'plateforme-danalytique-de-données-sportives'
        },
    },
]

export function usePortfolioProjects() {
    const {t, locale} = useI18n()
    const localePath = useLocalePath()

    const projects = computed(() => projectDefinitions.map((definition) => {
        const caseStudy = definition.caseStudy
        const heading = locale.value === 'fr' ? caseStudy?.frenchHeading : caseStudy?.englishHeading

        return {
            ...definition,
            name: t(`portfolio.projects.${definition.id}.name`),
            category: t(definition.categoryKey),
            summary: t(`portfolio.projects.${definition.id}.summary`),
            imageAlt: definition.image ? t(definition.image.altKey) : undefined,
            caseStudyUrl: caseStudy
                ? `${localePath(`/experience/${caseStudy.slug}`)}${heading ? `#${heading}` : ''}`
                : undefined,
        }
    }))

    return {projects: readonly(projects)}
}
