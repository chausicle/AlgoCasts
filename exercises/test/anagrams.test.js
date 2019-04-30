const anagrams = require('../anagrams/index.js')
const expect = require('chai').expect

describe('Anagrams Test', () => {
  it('anagrams function exists', () => {
    expect(typeof anagrams).to.equal('function')
  })

  it('"hello" is an anagram of "llohe"', () => {
    expect(anagrams('hello', 'llohe')).to.be.true()
  })

  it('"Whoa! Hi!" is an anagram of "Hi! Whoa!"', () => {
    expect(anagrams('Whoa! Hi!', 'Hi! Whoa!')).to.be.true()
  })

  it('"One One" is not an anagram of "Two two two"', () => {
    expect(anagrams('One One', 'Two two two')).to.be.false()
  })

  it('"One one" is not an anagram of "One one c"', () => {
    expect(anagrams('One one', 'One one c')).to.be.false()
  })

  it('"A tree, a life, a bench" is not an anagram of "A tree, a fence, a yard"', () => {
    expect(anagrams(
      'A tree, a life, a bench',
      'A tree, a fence, a yard'
    )).to.be.false()
  })

})
