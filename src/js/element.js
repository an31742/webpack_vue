
import '../css/style.css'
import '../css/style.less'
import '../font/iconfont.css'
import zznh from '../img/zznh.png'
const eleMen=document.createElement("div")
eleMen.className='title'
eleMen.innerHTML='草雉素子,已经过去一个月了抓紧学习'



const imageEl=document.createElement("div")
imageEl.className='imageEl'
imageEl.innerHTML="这个女孩眼睛里有光"


const imageG=document.createElement("img")
imageG.src=zznh
imageG.innerHTML="这个女孩眼睛里有光"

const iEle=document.createElement('i')
iEle.className='iconfont icon-ashbin'


document.body.appendChild(eleMen)
document.body.appendChild(imageEl)
document.body.appendChild(imageG)
document.body.appendChild(iEle)

console.log("88888800088")