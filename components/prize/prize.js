Component({
  properties: {
    content: String,
    prize: Boolean
  },
  data: {
    content:'',
    prize: false
  },
  methods: {
    _goPrize (){
      this.triggerEvent('prize')
    }
  }
})