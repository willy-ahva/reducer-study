export type Article = {
    id: string
    name: string
    origin: string | null
    code: string | null
    deliveryCode: string | null
    perOuterQuantity: number
    purchasePrice: number | null
    sellingPrice: number
    stockQuantity: number | null
    initialStockQuantity: number | null
    maximumRetailPrice: number | null
    marginRate: number
    weight: number | null
    unit: Unit
    tags: string[]
    isImportant: boolean
}
