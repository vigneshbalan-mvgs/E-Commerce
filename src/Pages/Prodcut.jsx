import React, { useContext } from 'react'
import { ShopContext } from "../Context/ShopContext";
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum';

const Prodcut = () => {
  const { all_prodcuts } = useContext(ShopContext)
  const { prodcutId } = useParams();
  const product = all_prodcuts.find((e)=> e.id === Number(prodcutId))
  return (
    <div>
      <Breadcrum />
    </div>
  )
}

export default Prodcut