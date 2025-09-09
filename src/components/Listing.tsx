import type { Item, ItemData } from "./model";

type ListingProps = {
    data: Item[];
}

function displayPrice(currency_code: string, price: string) {
  if (currency_code === 'USD') return '$' + price;
  if (currency_code === 'EUR') return '€' + price;
  return price + ' GBP';
}

function displayTitle(title: string) {
  if (title.length > 50) return title.slice(0, 49) + '...';
}

function displayQuantity(quantity: number) {
  if (quantity <= 10) return 'level-low';
  if (quantity <= 20) return 'level-medium';
  return 'level-high';
}

export function Listing ({ data = [] }: ListingProps) {
    const items: ItemData[] = data.filter((item) => "MainImage" in item)
    return (
        <div className="item-list">
            {items.map(item=> (
               
                <div className="item" key={item.listing_id}>
                    
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={item.MainImage?.url_570xN} alt="" />
                            </a>
                        </div>
                        <div className="item-details">
                            < p className="item-title">{displayTitle(item.title || "")}</p>
                            <p className="item-price">
                                {displayPrice((item.currency_code || ""), (item.price|| ""))}</p>
                            <p className={`item-quantity ${displayQuantity(item.quantity|| 0)}`}>
                                {item.quantity} left</p>
                        </div>
                    </div>
                    
                
            ))}
            </div>

            )
}
