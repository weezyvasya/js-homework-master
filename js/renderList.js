import { popUpOpen } from "./popUp.js";
import { updateListner } from "./mock.js";
let rootElement = document.querySelector('.table-root')



function renderList(data) {
   data.map((event, ind) => rootElement.innerHTML += 
`                  <tr>
                    <td class="date-column">${event.date}</td>
                    <td class="event-column">
                      <div class="event-title">
                        ${event.description}
                      <div class="event-description">
                      ${event.title}
                      </div>
                    </td>
                    <td class="number-column">
                      <div class="number-with-heart">
                        <img
                          src="./img/heart.svg"
                          alt="Избранное"
                          class="heart-icon"
                        />
                        <span class="participant-number">${event.countLikes}</span>
                      </div>
                    </td>
                    <td class="participants-column">
                      ${
                        event.names.map((name) => `<div class="participant-name">${name}</div>`)
                      }
                    </td>
                    <td class="registration-column">
                      <button ${event.registrationDisabled ? 'disabled' : ''} class="registration-button">
                        Зарегистрироваться 
                      </button>
                    </td>
                  </tr>`
 )

updateListner(popUpOpen)

}

export default renderList






                  