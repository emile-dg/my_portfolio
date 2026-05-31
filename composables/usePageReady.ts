const isPageReady = ref(false)
const pageReadyCallbacks: Array<() => void> = []

export function usePageReady() {
    function onPageReady(cb: () => void) {
        if (isPageReady.value) {
            cb()
        } else {
            pageReadyCallbacks.push(cb)
        }
    }

    function setPageReady() {
        isPageReady.value = true
        pageReadyCallbacks.forEach(cb => cb())
        pageReadyCallbacks.length = 0
    }

    return { isPageReady, onPageReady, setPageReady }
}
