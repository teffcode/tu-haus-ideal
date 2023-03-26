export const typeWriterEffect = (elementId) => {
  let i = 0
  let tag = document.getElementById(elementId)
  let html = tag.innerHTML
  let attr = tag.setAttribute('data', html)
  let txt = tag.getAttribute('data')
  let speed = 70

  const typeWriter = () => {
    if (i <= txt.length) {
      tag.innerHTML = txt.slice(0 , i + 1)
      i++
      setTimeout(typeWriter, speed)
    }
  }

  typeWriter()
}

export const scrollToBottom = (elementId) => {
  const element = document.getElementById(elementId)
  element.scrollTop = element.scrollHeight
}
