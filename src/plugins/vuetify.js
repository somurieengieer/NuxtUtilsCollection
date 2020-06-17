import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  iconfont: 'md',
  theme: {
    primary: '#FFAB50',
    secondary: '#45DC5F',
    accent: '#565DD2',
    error: colors.red.base,
    warning: colors.orange.base,
    info: colors.lightBlue.base,
    success: colors.green.base,
  },
});
