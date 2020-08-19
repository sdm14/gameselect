import SHAPI from '../assets/shapi.png'
import GAZINSKI from '../assets/gazinski.png'
import ARI from '../assets/ari.png'
import KABELLA from '../assets/kabella.png'
import KLASSON from '../assets/klasson.png'
import SAFONOV from '../assets/safonov.png'
import UTKIN from '../assets/utkin.png'
import WANDERSON from '../assets/wanderson.png'

const CHOOSE_ITEM = 'CHOOSE_ITEM'
const NEW_ROUND_LOSE = 'NEW_ROUND_LOSE'
const NEW_ROUND_WIN = 'NEW_ROUND_WIN'

const initialState = {
   item: [
      { id: 1, img: SHAPI, isShow: false },
      { id: 2, img: SAFONOV, isShow: false },
      { id: 3, img: KLASSON, isShow: false },
      { id: 4, img: ARI, isShow: false },
      { id: 5, img: KABELLA, isShow: false },
      { id: 6, img: GAZINSKI, isShow: false },
      { id: 7, img: UTKIN, isShow: false },
      { id: 8, img: WANDERSON, isShow: false },
      { id: 9, img: KABELLA, isShow: false },
      { id: 10, img: UTKIN, isShow: false },
      { id: 11, img: SHAPI, isShow: false },
      { id: 12, img: GAZINSKI, isShow: false },
      { id: 13, img: WANDERSON, isShow: false },
      { id: 14, img: SAFONOV, isShow: false },
      { id: 15, img: ARI, isShow: false },
      { id: 16, img: KLASSON, isShow: false }
   ],
   selectedItem: []
}

export const mainReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHOOSE_ITEM:
         return {
            ...state,
            item: state.item.map(el => {
               if (el.id === action.id) {
                  const elCopy = el
                  elCopy.isShow = true
                  return elCopy
               }
               return el
            }),
            selectedItem: [...state.selectedItem, { id: action.id, img: action.img }]
         }
      case NEW_ROUND_WIN:
         return {
            ...state,
            item: [...state.item.filter(el => !el.isShow)],
            selectedItem: []
         }
      case NEW_ROUND_LOSE:
         return {
            ...state,
            item: state.item.map(el => {
               const elCopy = el
               elCopy.isShow = false
               return elCopy
            }),
            selectedItem: []
         }
      default:
         return state
   }
}

export const chooseItemAction = (img, id) => ({ type: CHOOSE_ITEM, img, id })
export const newRoundLoseAction = () => ({ type: NEW_ROUND_LOSE })
export const newRoundWinAction = () => ({ type: NEW_ROUND_WIN })