import { Article } from './Article'
import { ConfidenceScore } from './ConfidenceScore'

export type OrderLine = {
    id: string
    article: Article
    quantity: number | null
    recommendedQuantity: number | null
    confidenceScore: ConfidenceScore
    ranking: number
}
