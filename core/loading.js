import { cssDivider } from "./utilities.js"

 class Loading {
  constructor(styles){

    this.styles = styles
    this.div = this.create()
    console.log(this.div)
  }
  // create(){
  //   const el = document.createElement('div')
  //   Object.keys(this.styles).forEach(key => {
  //     const tempKey = cssDivider(key)
  //     el.style[tempKey] = this.styles[key]
  //   })
  //   el.className = 'loader'
  //   return el
  // }
  create(){
    const wrapperEl = document.createElement('div')
    wrapperEl.className = 'loader-wrapper'
    
    const loaderEl = document.createElement('div')
    loaderEl.className = 'loader'

    wrapperEl.appendChild(loaderEl)

    return wrapperEl
  }
  destroy(child){
    this.div.parentNode.removeChild(child)
  }
  append(child){
    this.div.parentNode.appendChild(child)
  }

}

export const loading = new Loading({
  display: 'inline-block',
  width: '80px',
  height: '80px',
  position: 'absolute',
  top: '50%',
  left: '50%',

})