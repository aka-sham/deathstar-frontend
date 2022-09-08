import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"
import VueRouter from "unplugin-vue-router/vite"
import { VueRouterAutoImports } from "unplugin-vue-router"
import Components from "unplugin-vue-components/vite"
import { HeadlessUiResolver } from "unplugin-vue-components/resolvers"

export default defineConfig({
    plugins: [
        VueRouter({ importMode: "sync" }),
        vue(),
        Components({ resolvers: [HeadlessUiResolver()] }),
        AutoImport({
            imports: ["vue", "@vueuse/head", VueRouterAutoImports],
            eslintrc: {
                enabled: false, // Default `false`
                filepath: "./.eslintrc-auto-import.json", // Default `./.eslintrc-auto-import.json`
                globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
            }
        })
    ],
    server: {
        open: true
    }
})
