'use strict';

const template = require('./async-button.html');

module.exports = {
  data: () => ({
    status: 'init'
  }),
  inheritAttrs: false,
  template,
  methods: {
    async handleClick(ev) {
      if (this.status === 'in_progress') {
        return;
      }
      this.status = 'in_progress';

      if (typeof this.$attrs.onClick === 'function') {
        try {
          await this.$attrs.onClick(ev);
        } catch (err) {
          this.status = 'init';
          throw err;
        }
      }

      this.status = 'success';
    }
  },
  computed: {
    attrsToBind() {
      const attrs = { ...this.$attrs };
      delete attrs.onClick;
      delete attrs.disabled;
      return attrs;
    },
    isDisabled() {
      return this.status === 'in_progress' || this.$attrs.disabled;
    }
  }
};
