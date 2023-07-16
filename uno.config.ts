// uno.config.ts
import { defineConfig, presetAttributify, presetUno, transformerCompileClass } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
  ],
  transformers: [
    transformerCompileClass(),
  ],
})
