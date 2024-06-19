import { OrderLine } from './OrderLine'

export enum OrderStatus {
    Open = 'open',
    Validated = 'validated',
}

export type Order = {
    label: string
    deliveryDate: DateTime
    dueDate: DateTime
    id: string
    totalSelling: number
    totalPurchase: number | null
    totalQuantity: number
    status: OrderStatus
    orderlines: OrderLine[]
}
