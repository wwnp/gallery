import { delay } from "../core/utilities.js"

export class Gallery {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.loadingElement = options.loading
  }
  async render() {
    try {
      this.loading(this.loadingElement.div)

      const dataFrames = await fetch('https://jsonplaceholder.typicode.com/todos')
  
      const jsonedFrames = await dataFrames.json()
  
      await delay(1000)
  
      const frames = new Array(jsonedFrames.length)
        .fill('')
        .map((_, index) => {
          return renderFrame(jsonedFrames[index].id, jsonedFrames[index].title)
        })
        .join('')
  
      await this.deloading(this.loadingElement.div)
  
      this.$el.innerHTML = frames
  
      this.initDomListeners()
    } catch (error) {
      console.log(error)
    }
  }

  initDomListeners() {
    console.log(document.querySelector('header'))
  }

  loading(loadingElement) {
    document.body.append(loadingElement)
  }
  deloading(loadingElement) {
    document.body.removeChild(loadingElement)
  }
}

function renderFrame(id, title) {
  return `
  <div class='frame-item'>
    <span>${id}</span>
    <span>${title}</span>
  </div>
  `
}

