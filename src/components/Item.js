import React, { useEffect } from 'react'
import logo from '../assets/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { chooseItemAction, newRoundLoseAction, newRoundWinAction } from '../redux/mainReducer'

export const Item = (props) => {

   const dispatch = useDispatch()
   const selectedItem = useSelector(state => state.selectedItem)
   const chooseItem = (img, id) => {
      if (selectedItem.length < 2 && selectedItem.findIndex(el => el.id === id) === -1) {
         dispatch(chooseItemAction(img, id))
      }
   }

   setTimeout(() => {
      if (selectedItem.length === 2) {
         if (selectedItem[0].img === selectedItem[1].img) {
            dispatch(newRoundWinAction())
         }
         dispatch(newRoundLoseAction())
      }
   }, 2000)


   return (
      <div className="logo" onClick={() => chooseItem(props.el.img, props.el.id)} >
         <img src={props.el.isShow ? props.el.img : logo} className={props.el.isShow ? "logo__back" : "logo__front"} />
      </div>
   )
}