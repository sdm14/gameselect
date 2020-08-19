import React from 'react'
import { useSelector } from 'react-redux'

export const ItemPhoto = (props) => {

   const selectedItem = useSelector(state => state.selectedItem)
   const lastItem = selectedItem && selectedItem[selectedItem.length - 1]

   return (
      <div className="item__photo__wrapper">
         <span>Выберите двух одинаковых футболистов</span>
         <img src={lastItem && lastItem.img} />
      </div>
   )
} 