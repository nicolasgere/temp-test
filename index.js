var expect = require('expect')

//TASK 1
function isValidBracket(testString) {
    const stack = []
    for (var i = 0; i < testString.length; i++) {
        const ch = testString[i]
        switch (ch) {
            case '{': {
                stack.push(0)
                break
            }
            case '}': {
                const value = stack.pop();
                if (value != 0) {
                    return false
                }
                break
            }
            case '(': {
                stack.push(1)
                break
            }
            case ')': {
                const value = stack.pop();
                if (value != 1) {
                    return false
                }
                break
            }
            default: {
                return false
            }
        }
    }
    if (stack.length !== 0) {
        return false
    }
    return true
}

expect(isValidBracket('{{}}')).toBe(true)
expect(isValidBracket('{{}}}')).toBe(false)
expect(isValidBracket('(({}))')).toBe(true)
expect(isValidBracket('{()}{()}')).toBe(true)
expect(isValidBracket('{(()}')).toBe(false)
expect(isValidBracket('{1}')).toBe(false)
expect(isValidBracket('')).toBe(true)

//TASK 2
function isPalindrome(head) {
    var node = head;
    const array = []
    while (node) {
        array.push(node.value)
        node = node.child
    }
    const copyArray = [...array]
    const reversedString = copyArray.reverse().join();
    const originalString = array.join();
    return originalString === reversedString
}


var d = {
    value: 'a',
    child: null
}
var c = {
    value: 'b',
    child: d
}
var b = {
    value: 'b',
    child: c
}
var a = {
    value: 'a',
    child: b
}

expect(isPalindrome(a)).toBe(true)
c.child = null
expect(isPalindrome(a)).toBe(false)
c.value = 'a'
expect(isPalindrome(a)).toBe(true)
var e = {
    value: 'a',
    child: null,
}
c.value = 'c'
c.child = d
d.value = 'b'
d.child = e
expect(isPalindrome(a)).toBe(true)
d.value = 't'
expect(isPalindrome(a)).toBe(false)
a.child = null
expect(isPalindrome(a)).toBe(true)