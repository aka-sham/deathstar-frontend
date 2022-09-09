<template>
    <div
        class="h-screen bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1537420327992-d6e192287183?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit')]"
    >
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 bg-white min-h-full">
            <Header />
            <main class="h-full">
                <router-view />
            </main>
        </div>
    </div>
</template>
