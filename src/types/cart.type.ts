export interface CartItem {
    id: number;
    product_id: number;
    quantity: number;
    price: number;
    total: number;
}

export interface Cart {
    id: number;
    items: CartItem[];
    subtotal: number;
    delivery_fee: number;
    total: number;
}
