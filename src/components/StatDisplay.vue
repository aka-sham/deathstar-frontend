<!-- This example requires Tailwind CSS v2.0+ -->
<template>
    <div class="sm:max-w-5xl w-full flex justify-center text-center p-10">
        <dl class="w-full my-16 grid grid-cols-1 gap-5">
            <div v-for="item in props.stats" :key="item.name" class="rounded-lg bg-white px-4 py-5 shadow-xl sm:p-10">
                <dt class="truncate text-sm font-medium text-gray-500">{{ item.name }}</dt>
                <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{{ item.stat }}%</dd>
            </div>
        </dl>
    </div>
</template>

<script setup>
    const props = defineProps({
        stats: { type: Array, required: true }
    })
</script>
