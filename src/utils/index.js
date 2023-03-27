export const typeWriterEffect = (elementId, message) => {
  let i = 0
  let tag = document.getElementById(elementId)
  let txt = message
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
  element.scrollBy(1, 1000000000)
}
