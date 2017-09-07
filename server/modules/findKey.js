const findKey = (obj, value) => {
  let key = null
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (obj[prop] === value) {
        key = prop
      }
    }
  }
  return key
}

module.exports = findKey
