let popUp = document.querySelector('.event-registration')
// let popUpTitle = document.querySelector('.event-name')

export function popUpOpen() {
  // let id = e.target.id
  popUp.style.display = 'block'
  // popUpTitle.innerHTML = data[id].title
  // console.log(id)
}

export function popUpClose() {
    popUp.style.display = 'none'
}

