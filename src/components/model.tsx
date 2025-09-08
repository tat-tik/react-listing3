export type ItemData = {
    listing_id: number;
    url?: string;
    MainImage?: {
        "url_570xN": string;
    };
    title?: string;
    currency_code?: string;
    price?: string;
    quantity?: number;
    };   

export type ItemError = {
    listing_id: number;
    state: string;
    sku: string[];
    error_message: string[];
    };

export type Item = ItemData | ItemError;