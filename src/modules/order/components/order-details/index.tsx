import { Order } from "@medusajs/medusa"

type OrderDetailsProps = {
  order: Order
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const items = order.items.reduce((acc, i) => acc + i.quantity, 0)

  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div className="border.gray-200 border-b p-10">
      <span className="text-small-regular uppercase text-textLight">
        Thank you, your order was successfully placed
      </span>
      <h1 className="text-2xl-semi mt-2 uppercase">#{order.display_id}</h1>
      <span>{order.id.split("order_")[1]}</span>
      <div className="text-small-regular mt-4 flex items-center gap-x-4 text-textLight">
        <span>{new Date(order.created_at).toDateString()}</span>
        <span>{`${items} ${items !== 1 ? "items" : "item"}`}</span>
        {showStatus && (
          <>
            <span>{formatStatus(order.fulfillment_status)}</span>
            <span>{formatStatus(order.payment_status)}</span>
          </>
        )}
      </div>
    </div>
  )
}

export default OrderDetails
