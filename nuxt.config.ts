import { Configuration } from '@nuxt/types';

const config: Configuration = {
  build: {
    extend(cfg, ctx) {
      if (ctx.isDev && ctx.isClient) {
        cfg.devtool = 'inline-cheap-module-source-map';
      }
    }
  },
  buildModules: ['@nuxt/typescript-build'],
  css: ['@/assets/global', '@fortawesome/fontawesome-free/css/all.css'],
  srcDir: 'src'
};

export default config;
