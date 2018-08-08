// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let spaces = n - 1
  let sharps = 1
  let log = ""
  let columns

  for (let i = 0; i < n; i++) {
    if (i === 0) columns = 1
    else columns += 2
  }

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < spaces; col++) log += " "
    for (let col = 0; col < sharps; col++) log += "#"
    for (let col = 0; col < spaces; col++) log += " "

    console.log(log);

    log = ""
    spaces--
    sharps += 2
  }
}

module.exports = pyramid;
