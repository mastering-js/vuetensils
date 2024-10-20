'use strict';

const template = require('./dropdown.html');

module.exports = {
  template,
  props: ['opener'],
  emits: ['close'],
  inheritAttrs: false,
  mounted() {
    this.bodyListener = (event) => {
      let isOutside = true;
      if (event.target === this.opener() || this.opener().contains(event.target)) {
        isOutside = false;
      }
      if (isOutside) {
        this.$emit('close');
        this.hide();
      }
    };
    document.body.addEventListener('click', this.bodyListener);

    this.openerListener = event => {
      event.preventDefault();
      this.show();
    };
    this.opener().addEventListener('click', this.openerListener);
  },
  methods: {
    show() {
      this.$refs.dropdown.style.display = 'block';
      this.$refs.dropdown.style.opacity = '1';
    },
    hide() {
      this.$refs.dropdown.style.opacity = 0;
      this.$refs.dropdown.style.display = 'none';
    }
  },
  computed: {
    attrsToBind() {
      const attrs = { ...this.$attrs };
      delete attrs.ref;
      return attrs;
    }
  }
};