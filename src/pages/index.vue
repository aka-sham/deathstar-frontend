<template>
    <div class="flex flex-col items-center">
        <StatDisplay :stats="[{ name: 'Probability to save Endor', stat: probability }]" />
        <DropZone @files-dropped="uploadFile" />
    </div>
</template>

<script setup>
    import { useFetch } from "@vueuse/core"
    import DropZone from "../components/DropZone.vue"
    import StatDisplay from "../components/StatDisplay.vue"

    useHead({
        title: "Home"
    })

    const probability = ref(0.0)

    const uploadFile = async (files) => {
        if (files.length === 1) {
            const file = files[0]
            const formData = new FormData()
            formData.append("empire", file)
            const { data } = await useFetch("http://127.0.0.1:8000/c3po").post(formData).json()
            probability.value = data.value.probability
        }
    }
</script>
