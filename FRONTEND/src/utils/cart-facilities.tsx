import { RootStateOrAny, useSelector } from "react-redux"

const totalPrice = useSelector((state: RootStateOrAny) => state.cart.totalPrice)

export default function formatedPrice() {totalPrice.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL"
  })
}