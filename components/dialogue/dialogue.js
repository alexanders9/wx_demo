Component({
  properties: {
    total: Number,
    num: Number,
    problem: String,
    options: Object
  },
  data: {
    total: 0,
    num: 0,
    problem: '',
    options: [
    ]
  },
  methods: {
    _next(e) {
      const detail = { 
        url: e.currentTarget.dataset.url,
        index: e.currentTarget.dataset.index
      }
      this.triggerEvent('next', detail)
    }
  }
})