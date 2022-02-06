<h1 align="center">Vite ⚡️ - Vue 2 &lt;custom-element &sol;&gt; template</h1>

<p align="center">
    Create a Vue 2 
    <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements" target="_blank">custom element</a>
    bundled by the lightning fast build tool
    <a href="https://github.com/vitejs/vite" target="_blank">Vite</a>
</p>


> WARNING 🚨  
> This project is still in development and it's not recommended to use it in production.

## Issues
- [x] Wrap Vue component as a custom element
- [x] Images loading
- [ ] CSS loading

## Features

* ⚡️ [Vite](https://github.com/vitejs/vite), [Vue 2](https://github.com/vuejs/vue) - lightning fast
* 🔥 [Composition-API](https://github.com/vuejs/composition-api) with [\<script setup\>](https://github.com/antfu/unplugin-vue2-script-setup) syntax support
* 📦 [Components auto importing](https://github.com/antfu/unplugin-vue-components)
* 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly
* 🎨 [Windi CSS](https://github.com/windicss/vite-plugin-windicss) - next generation utility-first CSS framework
* 😃 [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)
* 🧰 [VueUse](https://github.com/vueuse/vueuse) - Collection of essential Vue Composition Utilities
* 🦾 Typescript, of corse

## Vite plugins

* [`vite-plugin-vue2`](https://github.com/underfin/vite-plugin-vue2) -
  Vue 2 support for Vite
* [`unplugin-vue2-script-setup`](https://github.com/antfu/unplugin-vue2-script-setup) -
  syntax support for `<script setup>`
* [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) -
  importing Vue components on-demand
* [`unplugin-unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) -
  importing APIs like CompositionAPI on-demand
* [`vite-plugin-windicss`](https://github.com/windicss/vite-plugin-windicss) -
  easy WindiCSS integration
* [`unplugin-icons`](https://github.com/antfu/unplugin-icons) -
  importing icons as Vue components on-demand

## Try it now!

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/lstoeferle/vite-vue2-custom-element/generate)

### Clone

If you prefer to do it manually with a cleaner git history

```bash
npx degit lstoeferle/vite-vue2-custom-element my-vite-vue2-custom-element
cd my-vite-vue2-custom-element
yarn install
```

## Usage

### Development

Just run and visit [http://localhost:3333](http://localhost:3333)

```bash
yarn dev
```

### Build

To build the custom element, run

```bash
yarn build
```

And you will see the generated files in `dist`.

### Serve locally

```bash
yarn serve
```

Serves the content of the `dist` directory on a local server at port `9000`.
