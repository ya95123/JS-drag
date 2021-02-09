const circle = document.getElementById("circle")

// 是否拖曳中
let isDragging = false
// 圓 X,Y 座標
let circleX, circleY

// 點擊拖曳
circle.addEventListener("mousedown", ((e) => {
  isDragging = true
  circleX = e.offsetX
  circleY = e.offsetY
  console.log("dragging")

  // 監聽 window 滑鼠移動
  window.addEventListener("mousemove", ((e) => {
    if (!isDragging) return
    circle.style.left = `${e.pageX - circleX}px`
    circle.style.top = `${e.pageY - circleY}px`
  }))
}))

// 拖曳完放下
circle.addEventListener("mouseup", ((e) => {
  isDragging = false
}))