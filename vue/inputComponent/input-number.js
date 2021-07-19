Vue.component('input-number', {
  template: '<div class="input-number">\
              <input :value="currentValue" type="text" onchange="handleChange()">\
              <button @click="handleDown">-</button>\
              <button @click="handleUp">+</button>\
             </div>',
  props: {
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data: function () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value: function (val) {
      this.updateValue(val)
    },
    currentValue: function (val) {
      this.$emit('input', val)
      this.$emit('on-change', val)
    }
  },
  methods: {
    isValueNumber(value) {
      return (/(^-?[0-9])+\.{1}\d+$) | (^-?[1-9][0-9]*$) | (^-?0{1}$)/).test(value)
    },
    handleChange(event) {
      var val = event.target.value.trim()
      var max = this.max
      var min = this.min
      if (this.isValueNumber(this.val)) {
        val = Number(val)
        this.currentValue = val
        if (val > max) {
          this.currentValue = this.max
        } else if (val < min) {
          this.currentValue = min
        }
      } else {
        event.target.value = this.currentValue
      }
    },
    handleDown() {
      if (this.currentValue < this.min) return
      this.currentValue -= 1
    },
    handleUp() {
      if (this.currentValue > this.max) return
      this.currentValue += 1
    },
    updateValue(val) {
      if (val > this.max) val = this.max
      if (val < this.min) val = this.min
      this.currentValue = val
    }
  },
  mounted() {
    this.updateValue(this.value)
  }
})