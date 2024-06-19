import { Article } from '../Domain/Article'
import { ConfidenceScore } from '../Domain/ConfidenceScore'
import { Order, OrderStatus } from '../Domain/Order'
import { OrderLine } from '../Domain/OrderLine'

export class OrderRepository {
    public getOrder(): Order {
        const apple: Article = {
            id: 'ART001',
            name: 'Apple',
            origin: 'USA',
            code: 'APL',
            deliveryCode: 'DLV001',
            perOuterQuantity: 100,
            purchasePrice: 40.0,
            sellingPrice: 50.0,
            stockQuantity: 500,
            initialStockQuantity: 500,
            maximumRetailPrice: 55.0,
            marginRate: 20,
            weight: 0.1,
            unit: 'Kilogram',
            tags: ['fruit', 'fresh'],
            isImportant: true,
        }
        const cherry: Article = {
            id: 'ART002',
            name: 'Cherry',
            origin: 'Canada',
            code: 'CHR',
            deliveryCode: 'DLV002',
            perOuterQuantity: 200,
            purchasePrice: 30.0,
            sellingPrice: 40.0,
            stockQuantity: 300,
            initialStockQuantity: 300,
            maximumRetailPrice: 45.0,
            marginRate: 25,
            weight: 0.05,
            unit: 'Kilogram',
            tags: ['fruit', 'fresh'],
            isImportant: false,
        }

        const banana: Article = {
            id: 'ART003',
            name: 'Banana',
            origin: 'Ecuador',
            code: 'BAN',
            deliveryCode: 'DLV003',
            perOuterQuantity: 150,
            purchasePrice: 20.0,
            sellingPrice: 30.0,
            stockQuantity: 400,
            initialStockQuantity: 400,
            maximumRetailPrice: 35.0,
            marginRate: 15,
            weight: 0.2,
            unit: 'Kilogram',
            tags: ['fruit', 'fresh'],
            isImportant: true,
        }

        const mango: Article = {
            id: 'ART004',
            name: 'Mango',
            origin: 'India',
            code: 'MNG',
            deliveryCode: 'DLV004',
            perOuterQuantity: 100,
            purchasePrice: 50.0,
            sellingPrice: 60.0,
            stockQuantity: 200,
            initialStockQuantity: 200,
            maximumRetailPrice: 65.0,
            marginRate: 20,
            weight: 0.3,
            unit: 'Kilogram',
            tags: ['fruit', 'fresh'],
            isImportant: false,
        }

        const pear: Article = {
            id: 'ART005',
            name: 'Pear',
            origin: 'China',
            code: 'PER',
            deliveryCode: 'DLV005',
            perOuterQuantity: 120,
            purchasePrice: 25.0,
            sellingPrice: 35.0,
            stockQuantity: 350,
            initialStockQuantity: 350,
            maximumRetailPrice: 40.0,
            marginRate: 18,
            weight: 0.15,
            unit: 'Kilogram',
            tags: ['fruit', 'fresh'],
            isImportant: false,
        }

        const peach: Article = {
            id: 'ART006',
            name: 'Peach',
            origin: 'Spain',
            code: 'PCH',
            deliveryCode: 'DLV006',
            perOuterQuantity: 130,
            purchasePrice: 45.0,
            sellingPrice: 55.0,
            stockQuantity: 250,
            initialStockQuantity: 250,
            maximumRetailPrice: 60.0,
            marginRate: 22,
            weight: 0.25,
            unit: 'Kilogram',
            tags: ['fruit', 'fresh'],
            isImportant: true,
        }

        const pineapple: Article = {
            id: 'ART007',
            name: 'Pineapple',
            origin: 'Costa Rica',
            code: 'PNP',
            deliveryCode: 'DLV007',
            perOuterQuantity: 80,
            purchasePrice: 60.0,
            sellingPrice: 70.0,
            stockQuantity: 150,
            initialStockQuantity: 150,
            maximumRetailPrice: 75.0,
            marginRate: 20,
            weight: 1.0,
            unit: 'Piece',
            tags: ['fruit', 'fresh'],
            isImportant: true,
        }

        const blueberry: Article = {
            id: 'ART008',
            name: 'Blueberry',
            origin: 'USA',
            code: 'BLB',
            deliveryCode: 'DLV008',
            perOuterQuantity: 90,
            purchasePrice: 70.0,
            sellingPrice: 80.0,
            stockQuantity: 100,
            initialStockQuantity: 100,
            maximumRetailPrice: 85.0,
            marginRate: 15,
            weight: 0.05,
            unit: 'Kilogram',
            tags: ['fruit', 'fresh'],
            isImportant: false,
        }

        const potato: Article = {
            id: 'ART009',
            name: 'Potato',
            origin: 'Germany',
            code: 'POT',
            deliveryCode: 'DLV009',
            perOuterQuantity: 200,
            purchasePrice: 10.0,
            sellingPrice: 15.0,
            stockQuantity: 500,
            initialStockQuantity: 500,
            maximumRetailPrice: 20.0,
            marginRate: 10,
            weight: 1.0,
            unit: 'Kilogram',
            tags: ['vegetable', 'fresh'],
            isImportant: true,
        }

        const cauliflower: Article = {
            id: 'ART010',
            name: 'Cauliflower',
            origin: 'France',
            code: 'CFL',
            deliveryCode: 'DLV010',
            perOuterQuantity: 50,
            purchasePrice: 30.0,
            sellingPrice: 40.0,
            stockQuantity: 200,
            initialStockQuantity: 200,
            maximumRetailPrice: 45.0,
            marginRate: 20,
            weight: 0.5,
            unit: 'Piece',
            tags: ['vegetable', 'fresh'],
            isImportant: true,
        }

        const bean: Article = {
            id: 'ART011',
            name: 'Bean',
            origin: 'Brazil',
            code: 'BEN',
            deliveryCode: 'DLV011',
            perOuterQuantity: 150,
            purchasePrice: 20.0,
            sellingPrice: 30.0,
            stockQuantity: 300,
            initialStockQuantity: 300,
            maximumRetailPrice: 35.0,
            marginRate: 15,
            weight: 0.1,
            unit: 'Kilogram',
            tags: ['vegetable', 'fresh'],
            isImportant: false,
        }

        const broccoli: Article = {
            id: 'ART012',
            name: 'Broccoli',
            origin: 'Italy',
            code: 'BRC',
            deliveryCode: 'DLV012',
            perOuterQuantity: 60,
            purchasePrice: 35.0,
            sellingPrice: 45.0,
            stockQuantity: 250,
            initialStockQuantity: 250,
            maximumRetailPrice: 50.0,
            marginRate: 18,
            weight: 0.3,
            unit: 'Piece',
            tags: ['vegetable', 'fresh'],
            isImportant: true,
        }

        const appleOrderLine: OrderLine = {
            id: 'A010',
            article: apple,
            quantity: 12,
            recommendedQuantity: 12,
            confidenceScore: ConfidenceScore.High,
            ranking: 1,
        }

        const appleOrderLine2: OrderLine = {
            id: 'A011',
            article: apple,
            quantity: 18,
            recommendedQuantity: 18,
            confidenceScore: ConfidenceScore.High,
            ranking: 2,
        }

        const cherryOrderLine: OrderLine = {
            id: 'A020',
            article: cherry,
            quantity: 7,
            recommendedQuantity: 7,
            confidenceScore: ConfidenceScore.Correct,
            ranking: 3,
        }
        const bananaOrderLine: OrderLine = {
            id: 'A030',
            article: banana,
            quantity: 15,
            recommendedQuantity: 15,
            confidenceScore: ConfidenceScore.High,
            ranking: 4,
        }

        const bananaOrderLine2: OrderLine = {
            id: 'A031',
            article: banana,
            quantity: 15,
            recommendedQuantity: 15,
            confidenceScore: ConfidenceScore.High,
            ranking: 5,
        }

        const bananaOrderLine3: OrderLine = {
            id: 'A032',
            article: banana,
            quantity: 15,
            recommendedQuantity: 15,
            confidenceScore: ConfidenceScore.High,
            ranking: 6,
        }
        const mangoOrderLine: OrderLine = {
            id: 'A040',
            article: mango,
            quantity: 5,
            recommendedQuantity: 5,
            confidenceScore: ConfidenceScore.Moderate,
            ranking: 7,
        }
        const pearOrderLine: OrderLine = {
            id: 'A050',
            article: pear,
            quantity: 5,
            recommendedQuantity: 5,
            confidenceScore: ConfidenceScore.Correct,
            ranking: 8,
        }
        const peachOrderLine: OrderLine = {
            id: 'A060',
            article: peach,
            quantity: 5,
            recommendedQuantity: 5,
            confidenceScore: ConfidenceScore.Unknown,
            ranking: 9,
        }
        const pineappleOrderLine: OrderLine = {
            id: 'A070',
            article: pineapple,
            quantity: 5,
            recommendedQuantity: 5,
            confidenceScore: ConfidenceScore.Moderate,
            ranking: 10,
        }
        const blueberryOrderLine: OrderLine = {
            id: 'A080',
            article: blueberry,
            quantity: 5,
            recommendedQuantity: 5,
            confidenceScore: ConfidenceScore.Correct,
            ranking: 11,
        }
        const potatoOrderLine: OrderLine = {
            id: 'A090',
            article: potato,
            quantity: 5,
            recommendedQuantity: 5,
            confidenceScore: ConfidenceScore.High,
            ranking: 12,
        }
        const cauliflowerOrderLine: OrderLine = {
            id: 'A100',
            article: cauliflower,
            quantity: 5,
            recommendedQuantity: 5,
            confidenceScore: ConfidenceScore.Moderate,
            ranking: 13,
        }
        const beanOrderLine: OrderLine = {
            id: 'A110',
            article: bean,
            quantity: 5,
            recommendedQuantity: 5,
            confidenceScore: ConfidenceScore.Unknown,
            ranking: 14,
        }
        const broccoliOrderLine: OrderLine = {
            id: 'A120',
            article: broccoli,
            quantity: 5,
            recommendedQuantity: 5,
            confidenceScore: ConfidenceScore.High,
            ranking: 15,
        }
        const orderLines = [
            appleOrderLine,
            bananaOrderLine,
            bananaOrderLine2,
            bananaOrderLine3,
            mangoOrderLine,
            blueberryOrderLine,
            potatoOrderLine,
            cauliflowerOrderLine,
            beanOrderLine,
            broccoliOrderLine,
            appleOrderLine2,
            cherryOrderLine,
            pineappleOrderLine,
            peachOrderLine,
            pearOrderLine,
        ]

        const order: Order = {
            id: '123',
            label: 'Fruits and vege',
            deliveryDate: new Date(),
            dueDate: new Date(),
            totalSelling: orderLines.reduce(
                (acc, orderline) =>
                    acc +
                    orderline.article.sellingPrice * (orderline.quantity ?? 0),
                0
            ),
            totalPurchase: orderLines.reduce(
                (acc, orderline) =>
                    acc +
                    (orderline.article.purchasePrice ?? 0) *
                        (orderline.quantity ?? 0),
                0
            ),
            totalQuantity: orderLines.reduce(
                (acc, orderline) => acc + (orderline.quantity ?? 0),
                0
            ),
            status: OrderStatus.Open,
            orderlines: orderLines,
        }

        return order
    }
}
