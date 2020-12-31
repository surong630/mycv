// forEach 实现
let arr = [5,6,2,1,4]
Array.prototype.forEach2 = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i)
  }
}
arr.forEach2(function (item, index) {
  console.log(`${index}: ${item}`)
})