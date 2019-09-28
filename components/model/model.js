Component({
  properties: {
    name: String,
    description: String,
    status: String,
  },
  data: {
    name:'',
    description: '',
    status:''
  },
  methods: {
    _close () {
      this.triggerEvent('close', null, { bubbles: false})
    }
  }
})