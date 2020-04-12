module.exports = [
  {
    type: 'input',
    label: '文案',
    field: 'props.buttonText',
    rules: [
      { required: true, message: '请输入', trigger: 'blur' }
    ]
  },
  {
    type: 'unit-size',
    label: '字体大小',
    noAuto: true,
    field: 'props.fontSize',
    rules: [
      { required: true, message: '请输入', trigger: 'blur' }
    ]
  },
  {
    type: 'color',
    label: '字体颜色',
    field: 'props.color'
  }
]