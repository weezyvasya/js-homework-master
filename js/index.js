import  Api  from "./api.js";
import renderList from "./renderList.js";
import { popUpClose } from "./popUp.js";
let popUpCloseBtn = document.querySelector('.close-btn')
popUpCloseBtn.addEventListener('click', popUpClose)
document.addEventListener('keydown', (event)=> { if (event.key === "Escape" || event.keyCode === 27) {popUpClose()}  })



const request = new Api()

request.get('http://localhost:3000/data', {}, renderList)