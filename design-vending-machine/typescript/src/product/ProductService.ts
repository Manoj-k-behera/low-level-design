import { InvalidProductException } from "../exceptions/InvalidProductException";
import { OutOfStockException } from "../exceptions/OutOfStockException";
import { Product } from "./Product";

export class ProductService {
    private products: Map<string, Product> = new Map()

    constructor(products?: Product[]) {
        products?.forEach(p => {
            this.products.set(p.productId, p);
        })
    }

    addProduct(product: Product) {
        this.products.set(product.productId, product);
    }

    getPriceById(productId: string): number {
        const product = this.products.get(productId);

        if (!product) {
            throw new InvalidProductException('product not found!');
        }
        return product.getPrice();
    }

    isProductAvailable(productId: string, quantity: number):boolean {
        const product = this.products.get(productId);
        if (!product) {
            throw new InvalidProductException('product not found!');
        }

        return product.getQuantity() >= quantity;
    }
    
    consume(productId: string, quantity: number) : void {
        const product = this.products.get(productId);

        if (!product) {
            throw new InvalidProductException('product not found');
        }

        if (product.getQuantity() < quantity) {
            throw new OutOfStockException('insufficient stock')
        }
        product.updateQuantity(product.getQuantity() - quantity);
    }
}