import { checkTypes, guid } from '@northeast-utils/core'
import { merge } from 'lodash'

const DEFAULT_OPTIONS = {
  fontSize: '20',
  fontFamily: 'Microsoft YaHei',
  color: 'rgba(0, 0, 0, 0.5)',
  textAlign: 'center', // 水印文本对齐方向
  textBaseline: 'middle', // 水印文本对齐方向
  rotateDeg: 20,
  zIndex: 999999,
  cSpace: 30,
  vSpace: 30
}

class Watermark {
  constructor( drawOption = {}) {
    this.drawOption = merge({}, DEFAULT_OPTIONS, drawOption || {})
    this.watermarkDom = document.createElement('div')
    this.watermarkDom.id = `watermark-${guid()}`
  }
  // 生成canvas
  main (text) {
    this.text = []
    if (checkTypes.isString(text) && text.length > 0) {
      this.text = [text]
    }
    if (checkTypes.isArray(text) && text.length > 0) {
      this.text = text
    }

    if (this.text.length > 0) {
      this.draw()
    }
    return this
  }
  draw (text) {
    this._addWatermark2Container(this.drawText(text))
  }

  drawText (text) {
    const option = this.drawOption
    const dpr = window.devicePixelRatio || 1
    const { width, height } = this.getTextSize(text, option.fontSize)
    // 第一步：生成cavas元素，使用canvas, 绘制水印
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d'); // 绘制2d图形
    this.cvsContext = ctx
    // 设置单个水印元素的宽高，这决定了页面水印的密度，需要更具水印文字的大小以及长度设置合理的值
    canvas.width = (width + option.cSpace) * dpr
    canvas.height = (width + option.vSpace) * dpr

    ctx.font = `${option.fontSize}px ${option.fontFamily}`; // 设置水印文字的大小和字体
    ctx.fillStyle = option.color; // 设置水印文字的颜色
    ctx.textAlign = option.textAlign; // 文本左对齐
    ctx.textBaseline = option.textBaseline; // 文本左对齐
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate(-(option.rotateDeg * Math.PI / 180));// 设置水印元素的倾斜, 这一行代码要写在设置水印文字之前，涉及样式的都写在设置水印文字之前
    ctx.scale(dpr, dpr)
    // 水印在画布的x轴、y轴位置
    ctx.fillText(text, 0, 0); // 设置水印文字
    return canvas.toDataURL('image/png')
  }

  reDraw (text) {
    this.watermarkDom.style.backgroundImage = `url(${this.drawText(text)})`
  }

// 将水印文字图片重复平铺到容器
  _addWatermark2Container(imgUrl) {
    const { container, zIndex } = this.drawOption
    this.watermarkDom.style.backgroundImage = `url(${imgUrl})`
    this.watermarkDom.style.position = 'absolute'
    this.watermarkDom.style.top = '0px'
    this.watermarkDom.style.right = '0px'
    this.watermarkDom.style.bottom = '0px'
    this.watermarkDom.style.left = '0px'
    this.watermarkDom.style.pointerEvents = 'none'
    this.watermarkDom.style.backgroundRepeat = 'repeat'
    this.watermarkDom.style.zIndex = zIndex
    container.style.position = 'relative'
    container.appendChild(this.watermarkDom)
  }

  getTextSize (text, fontSize){
    const result = { width: 0, height:0 }

    const span = document.createElement('span')
    result.width = span.offsetWidth
    result.height = span.offsetWidth

    span.style.visibility = 'hidden'
    span.style.fontSize = fontSize + 'px'
    document.body.appendChild(span)

    if (span.textContent) {
      span.textContent = text
    } else {
      span.innerText = text
    }

    result.width = span.offsetWidth - result.width
    result.height = span.offsetHeight - result.height

    if (span.parentNode) {
      span.parentNode.removeChild(span)
    }

    return result
  }

}

export default Watermark