function townsToJSON(input) {
    const headings = input[0].split('|').map(e => e.trim()).filter(Boolean);
    const result = [];
  
    for (let i = 1; i < input.length; i++) {
      const values = input[i].split('|').map(e => e.trim()).filter(Boolean);
      const townObject = {};
  
      for (let j = 0; j < headings.length; j++) {
        if (headings[j] === 'Latitude' || headings[j] === 'Longitude') {
          townObject[headings[j]] = Number(Number(values[j]).toFixed(2));
        } else {
          townObject[headings[j]] = values[j];
        }
      }
  
      result.push(townObject);
    }
  
    return JSON.stringify(result);
  }
  
  // Example usage:
  const input = [
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
  ];
  
  const result = townsToJSON(input);
  console.log(result);