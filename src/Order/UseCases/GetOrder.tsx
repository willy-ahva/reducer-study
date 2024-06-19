import { OrderRepository } from '../Infrastructure/OrderRepository'

export const GetOrder = () => {
    const orderRepository = new OrderRepository()

    return orderRepository.getOrder()
}
