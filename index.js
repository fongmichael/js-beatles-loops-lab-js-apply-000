function theBeatlesPlay(musicians, instruments) {
  var arr = []
  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]

  for (let i = 0; i < musicians.length; i++) {
    arr.push (musicians[i] + 'plays' + instruments[i]);
  }

  return arr
}

function johnLennonFacts(facts) {
  var shoutedFacts = []
  var facts = ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"]

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  var arr = []
  var n = ['I love the Beatles!']

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr
}
