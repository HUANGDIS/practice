Vue.component('tabs', {
  name: 'tabs',
  template: '<div class="tabs">\
              <div class="tabs-bar" v-for="(item,index) in navList" \
                :class="tabCls[item]" \
                @click="handleChange(index)" \
              >{{item.label}}<div>\
              <div class="tabs-content">\
                <slot></slot> \
              <div>\
            </div>',
  props: {
    value: {
      type: [String, Number]
    }
  },
  data() {
    return {
      currentValue: this.value,
      navList: []
    }
  },
  watch: {
    value: function (val) {
      this.currentValue = val
    },
    currentValue: function () {
      this.updateStatus()
    }
  },
  methods: {
    tabCls: function (item) {
      return [
        'tabs-tab', {
          'tabs-tab-active': item.name === this.currentValue
        }
      ]
    },
    getTabs: function () {
      return this.$children.filter(item => {
        return item.$options.name == 'pane'
      })
    },
    updateNav() {
      this.navList = []
      let _this = this
      this.getTabs().forEach(function (pane, index) {
        _this.navList.push({
          label: pane.label,
          name: pane.name || index
        });
        if (!pane.name) pane.name = index
        if (index === 0) {
          if (!_this.currentValue) {
            _this.currentValue = pane.name || index
          }
        }
      })
      this.updateStatus()
    },
    updateStatus() {
      var tabs = this.getTabs()
      var _this = this
      tabs.forEach(item => {
        return item.show = item.name === _this.currentValue
      })
    },
    handleChange(index) {
      var nav = this.navList[index]
      var name = nav.name
      this.currentValue = name
      this.$emit('input', name)
      this.$emit('on-click', name)
    }
  },
  mounted() { }
})