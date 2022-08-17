const cur = [0, 0]
const koya = document.getElementById('koya')

document.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowLeft') {
    console.log(cur[0])
    koya.style.boxShadow = '5px 1px 10px black'
    gsap.fromTo(koya, { x: cur[0] }, { x: cur[0] - 20, rotationY: '30deg' })
    cur[0] -= 20
  } else if (e.key == 'ArrowRight') {
    koya.style.boxShadow = '-5px -1px 10px black'
    gsap.fromTo(koya, { x: cur[0] }, { x: cur[0] + 20, rotationY: '-30deg' })
    cur[0] += 20
  } else if (e.key == ' ') {
    koya.style.boxShadow = '0px 5px 10px black'
    gsap.fromTo(koya, { y: cur[1] }, { y: cur[1] - 50, rotationY: '0deg' })
    cur[1] -= 50
    setTimeout(() => {
      koya.style.boxShadow = '0px -5px 10px black'
      gsap.fromTo(koya, { y: cur[1] }, { y: cur[1] + 50 })
      cur[1] += 50
      if (cur[1] == 0) {
        koya.style.boxShadow = 'none'
      }
    }, 1000)
  }
})

console.log(mouse.x)
