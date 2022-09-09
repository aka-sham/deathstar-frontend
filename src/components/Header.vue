<template>
    <div class="min-h-full">
        <Disclosure v-slot="{ open }" as="nav" class="bg-white">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-32 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-24" src="/images/star-wars.png" alt="Death Star Mission" />
                        </div>
                    </div>
                    <div class="hidden md:block">
                        <div class="ml-4 flex items-center md:ml-6">
                            <!-- Profile dropdown -->
                            <Menu as="div" class="relative ml-3">
                                <div>
                                    <MenuButton
                                        class="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-4 focus:ring-offset-indigo-500"
                                    >
                                        <span class="sr-only">Open user menu</span>
                                        <img class="h-12 w-12 rounded-full" :src="user.imageUrl" alt="" />
                                    </MenuButton>
                                </div>
                            </Menu>
                        </div>
                    </div>
                    <div class="-mr-2 flex md:hidden">
                        <!-- Mobile menu button -->
                        <DisclosureButton
                            class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <span class="sr-only">Open main menu</span>
                            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>

            <DisclosurePanel class="md:hidden">
                <div class="border-t border-gray-700 pt-4 pb-3">
                    <div class="flex items-center px-5">
                        <div class="flex-shrink-0">
                            <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
                        </div>
                        <div class="ml-3">
                            <div class="text-base font-medium leading-none text-black">{{ user.name }}</div>
                            <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
                        </div>
                    </div>
                </div>
            </DisclosurePanel>
        </Disclosure>

        <header class="bg-white">
            <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold tracking-tight text-gray-900">C3PO Interface</h1>
            </div>
        </header>
    </div>
</template>

<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from "@headlessui/vue"
    import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline"

    const user = {
        name: "C3PO",
        email: "c3po@millenium.falcon",
        imageUrl:
            "https://images.unsplash.com/photo-1599272814862-974880a19e4d?ixlib=rb-1.2.1&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MjY0ODIzOQ&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
</script>
