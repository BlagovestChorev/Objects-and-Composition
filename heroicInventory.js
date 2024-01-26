function heroicInventory(input) {
    let heroes = [];
  
    for (let heroInfo of input) {
      let [name, level, itemsString] = heroInfo.split(' / ');
      level = Number(level);
      let items = itemsString ? itemsString.split(', ') : [];
  
      let hero = {
        name,
        level,
        items
      };
  
      heroes.push(hero);
    }
  
    return JSON.stringify(heroes);
  }
  
  // Example usage:
  const input = [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
  ];
  
  const result = heroicInventory(input);
  console.log(result);