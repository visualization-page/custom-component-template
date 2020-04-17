<script>
export default {
  name: 'my-grid',
  props: {
    column: {
      type: [Number, String],
      default: 3
    },
    border: Boolean,
    borderColor: {
      type: String,
      default: '#ededed'
    }
  },
  render: function (h) {
    const arr = this.$slots.default || []
    const rows = Math.ceil(arr.length / this.column)
    const result = []
    for (let i = 0; i < rows; i++) {
      result[i] = arr.slice(i * this.column, (i + 1) * this.column)
    }
    return h('div', {
      class: ['my-grid', { 'my-grid__border': this.border }]
    }, result.map(rows => {
      return h('div', {
        class: 'my-grid__row'
      }, rows.map(vn => {
        return h('div', {
          class: 'my-grid__col',
          style: {
            width: `${(100 / this.column).toFixed(2)}%`,
            borderColor: this.border && this.borderColor
          }
        }, [vn])
      }))
    }))
  }
}
</script>

<style lang="less">
.my-grid {
  &__row {
    display: flex;
  }
  &__border {
    .my-grid__col {
      border-right: 1px #cfcfcf solid;
      border-bottom: 1px #cfcfcf solid;
      &:first-child {
        border-left: 1px #cfcfcf solid;
      }
    }
    .my-grid__row:first-child .my-grid__col {
      border-top: 1px #cfcfcf solid;
    }
  }
}
</style>
