function validBraces(input) {
    if (input == '')
      throw new Error('Please provide an input')
  
    let stack = []
    for(ch of Array.from(input)) {
  
      if (ch === '[' || ch === '{' || ch === '(')
        stack.push(input[0])
    
      if (ch === ']' || ch === '}' || ch === ')') {
        if (stack.length === 0) {
          return false
        }
        stack.pop()
      }
    }
    return stack.length === 0
  }
  
  module.exports = {
    validBraces
  }