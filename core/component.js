class Component {
  constructor(loading){
    this.$el = document.getElementById('app')
  }
  hide(){
    this.$el.classList.add('hide')
  }
  show(){
    this.$el.classList.remove('hide')
  }
}