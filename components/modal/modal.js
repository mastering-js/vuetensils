'use strict';

const appendCSS = require('../../appendCSS');
const template = require('./modal.html');

appendCSS(require('./modal.css'));

module.exports = {
  props: ['style'],
  inheritAttrs: false,
  template,
  computed: {
    attrsToBind() {
      const attrs = { ...this.$attrs };
      return attrs;
    }
  }
};
