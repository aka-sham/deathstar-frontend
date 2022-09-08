<template>
    <div
        class="relative min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover"
        style="
            background-image: url(https://images.unsplash.com/photo-1537420327992-d6e192287183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit);
        "
    >
        <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div class="sm:max-w-lg w-full p-10 bg-white rounded-xl z-10">
            <div class="text-center">
                <h2 class="mt-5 text-3xl font-bold text-gray-900">File Upload!</h2>
                <p class="mt-2 text-sm text-gray-400">Lorem ipsum is placeholder text.</p>
            </div>
            <form class="mt-8 space-y-3" action="#" method="POST">
                <div class="grid grid-cols-1 space-y-2">
                    <label class="text-sm font-bold text-gray-500 tracking-wide">Attach Document</label>
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
                            class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center"
                        >
                            <div class="h-full w-full text-center flex flex-col items-center justify-center">
                                <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                    <img
                                        class="has-mask h-36 object-center"
                                        src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                        alt="freepik image"
                                    />
                                </div>
                                <span v-if="active">
                                    <span>Drop Them Here</span>
                                    <span class="smaller">to add them</span>
                                </span>
                                <span v-else>
                                    <span>Drag Your Files Here</span>
                                    <span class="smaller">
                                        or <strong><em>click here</em></strong> to select files
                                    </span>
                                </span>
                            </div>
                            <input id="file-input" type="file" class="hidden" @change="onInputChange" />
                        </label>
                    </div>
                </div>
                <p class="text-sm text-gray-300">
                    <span>File type: json</span>
                </p>
                <div>
                    <button
                        type="submit"
                        class="my-5 w-full flex justify-center bg-blue-500 text-gray-100 p-4 rounded-full tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-600 shadow-lg cursor-pointer transition ease-in duration-300"
                    >
                        Upload
                    </button>
                </div>
            </form>
        </div>
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

<style>
    .has-mask {
        position: absolute;
        clip: rect(10px, 150px, 130px, 10px);
    }
</style>
