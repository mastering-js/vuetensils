'use strict';

const appendCSS = require('../../appendCSS');
const template = require('./modal.html');

appendCSS(require('./modal.css'));

module.exports = app => app.component('modal', {
  props: ['style'],
  inheritAttrs: false,
  template,
  computed: {
    attrsToBind() {
      const attrs = { ...this.$attrs };
      return attrs;
    }
  }
});
