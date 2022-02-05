import { resolve } from 'path'
import { defineConfig } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import AutoImport from 'unplugin-auto-import/vite'

// Change the name of your custom element here:
const customElementName = 'my-custom-element'
process.env.VITE_CUSTOM_ELEMENT_NAME = customElementName

export default defineConfig({
  resolve: {
    alias: {
      '@': `${resolve(__dirname, 'src')}`,
    },
  },

  plugins: [
    // https://github.com/underfin/vite-plugin-vue2
    Vue2(),
    // https://github.com/antfu/unplugin-vue2-script-setup
    ScriptSetup(),
    // https://github.com/windicss/vite-plugin-windicss
    WindiCSS(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      resolvers: [
        IconsResolver({
          componentPrefix: '',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    // https://github.com/antfu/unplugin-icons
    Icons(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        '@vue/composition-api',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
  ],

  build: {
    lib: {
      entry: resolve(__dirname, 'src/custom-element.ts'),
      name: customElementName,
      formats: ['cjs'],
      fileName: () => `${customElementName}.js`,
    },
  },

  server: {
    port: 3333,
  },
})
