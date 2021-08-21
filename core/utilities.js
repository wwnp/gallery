export function cssDivider(property) {
  const arr = property.split('-')
  return arr[0].concat(capitalize(arr[1]))
}

export function capitalize(str) {
  if (typeof str !== 'string') {
    return ''
  }
  return str[0].toUpperCase() + str.slice(1)
}

export const delay = function (ms) {
  return new Promise( (resolve,reject)=> {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}