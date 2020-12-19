export default function orderByProps(obj, arr) {
  const stats = [];

  for (const prop in obj) {
    if ({}.hasOwnProperty.call(obj, prop)) {
      if (obj.hasOwnProperty.call(obj, prop)) {
        if (arr.indexOf(prop) === -1) {
          stats.push({ key: prop, value: obj[prop] });
        }
      }
      
      stats.sort((a, b) => {
        if (a.key < b.key) {
          return -1;
        } if (a.key > b.key) {
          return 1;
        }
      });
    }
  }

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    stats.unshift({ key: arr[i], value: obj[arr[i]] })
  }

  return stats;
}
