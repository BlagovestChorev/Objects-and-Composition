function lowestPrices(input) {
    let products = {};
  
    for (let entry of input) {
      let [town, product, price] = entry.split(' | ');
      price = Number(price);
  
      if (!products.hasOwnProperty(product) || price < products[product].price) {
        products[product] = { price, town };
      }
    }
  
    let result = [];
    for (let product in products) {
      result.push(`${product} -> ${products[product].price} (${products[product].town})`);
    }
  
    return result.join('\n');
  }
  
  // Example usage:
  const input = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
  ];
  
  const result = lowestPrices(input);
  console.log(result);