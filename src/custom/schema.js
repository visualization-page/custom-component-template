module.exports = [
  {
    label: '绑定状态',
    field: 'bindState',
    type: 'input',
    elAttrs: {
      placeholder: '请输入'
    },
    model: 'blur',
    'info-icon': 'el-icon-warning-outline',
    info: '列表容器可以绑定视图模型，$$page.state.test，绑定后在列表容器的子节点中可以使用 $$listBind.item 获取遍历元素， $$listBind.index 获取遍历索引'
  },
  {
    type: 'input',
    label: '一行几列',
    field: 'props.column'
  },
  {
    type: 'checkbox',
    label: '边框',
    field: 'props.border'
  },
  {
    type: 'color',
    label: '边框颜色',
    field: 'props.borderColor'
  }
]
