let html = document.getElementById('html');
let style = document.getElementById('style')
let string = `/*大家好我是一名前端新人
接下来我要开始写样式了
请您仔细看好了*/
/*接下来我们会做一个太极,请你看好了*/
.div1 {
  position:fixed;
  border: 1px solid red;
  height:200px;
  width: 200px;
  right: 20px;
  top: 20px;
}
/*接下来把他变成圆的吧*/
.div1 {
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,.5);
  border:none;
}
/*八卦是阴阳形成的
 *一黑一白
*/
.div1 {
  background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球吧*/
.div1::before{
  position:absolute;
  content: '';
  height:100px;
  width: 100px;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(255,255,255,1) 14%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 51%, rgba(0,0,0,1) 57%);
}
.div1::after{
  position:absolute;
  content: '';
  height:100px;
  width: 100px;
  border-radius: 50%;
  left: 50%;
  bottom:0;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(0,0,0,1) 14%, rgba(255,255,255,1) 14%, rgba(255,255,255,1) 51%, rgba(255,255,255,1) 57%);
}
`;
let n = -1;
let string2 = '';
let step = () => {
  setTimeout(() => {
    n += 1;
    // 如果是回车,就转换成br
    if (string[n] == '\n') {
      string2 += '<br>'
    }else if(string[n] == ' '){
      string2 += '&nbsp;'
    }else {
      // 不是回车直接照搬
      string2 += string[n]
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0,n);
    window.scrollTo(0, 9999)
    html.scrollTo(0,9999)
    if(n < string.length-1) {
      step()
    }
  },50)
}
step()

