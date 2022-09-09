<template>
    <div class="sm:max-w-5xl w-full p-10 bg-white rounded-xl z-10">
        <div class="text-center">
            <h2 class="mt-5 text-3xl font-bold text-gray-900">Send data to Millenium Falcon!</h2>
            <p class="mt-2 text-sm text-gray-400">
                Provide a json file which contains all needed information to analyse the probability to save Endor from
                Death Star.
            </p>
        </div>
        <form class="mt-8 space-y-3" action="#" method="POST">
            <div class="grid grid-cols-1 space-y-2">
                <div
                    class="flex items-center justify-center w-full"
                    :data-active="active"
                    @dragenter.prevent="setActive"
                    @dragover.prevent="setActive"
                    @dragleave.prevent="setInactive"
                    @drop.prevent="onDrop"
                >
                    <label
                        for="file-input"
                        class="flex flex-col rounded-lg border-4 border-dashed w-full p-10 group text-center"
                    >
                        <div class="h-full w-full text-center flex flex-col items-center justify-center p-10">
                            <div class="flex max-h-48 mx-auto m-5">
                                <img class="h-36 object-center" src="/images/falcon.png" alt="Millenium Falcon" />
                            </div>
                            <span v-if="active">
                                <span>Drop it here to add transfer your data</span>
                                <span class="smaller">to add them</span>
                            </span>
                            <span v-else>
                                <span>Drag you file here or <strong>click here</strong> to select files</span>
                            </span>
                        </div>
                        <input id="file-input" type="file" class="hidden" @change="onInputChange" />
                    </label>
                </div>
            </div>
            <p class="text-sm text-gray-300">
                <span>File type: json</span>
            </p>
        </form>
    </div>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from "vue"

    const emit = defineEmits(["files-dropped"])

    /*
     * Reactive Data
     */
    const active = ref(false)

    /*
     * Local vars
     */
    let inActiveTimeout = null

    /*
     * Methods
     */
    const setActive = () => {
        active.value = true
        clearTimeout(inActiveTimeout)
    }
    const setInactive = () => {
        inActiveTimeout = setTimeout(() => {
            active.value = false
        }, 50)
    }
    const onDrop = (event) => {
        setInactive()
        emit("files-dropped", [...event.dataTransfer.files])
    }
    const preventDefaults = (event) => {
        event.preventDefault()
    }

    const events = ["dragenter", "dragover", "dragleave", "drop"]

    onMounted(() => {
        events.forEach((eventName) => {
            document.body.addEventListener(eventName, preventDefaults)
        })
    })

    onUnmounted(() => {
        events.forEach((eventName) => {
            document.body.removeEventListener(eventName, preventDefaults)
        })
    })
</script>
