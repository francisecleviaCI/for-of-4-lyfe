//#4//
const makeFriendly = function(sentence){
    let result = ''
    for (let i = 0; i <sentence.length; i++){
  const amazing = sentence[i];
      if (amazing === '.'){
        result = result + '!'
      } else {
        result = result + amazing;
      }
  
    }
  
  return result;
  }
  console.log(makeFriendly('hello. my name is francis.'))


  const dogs = [
    'Fido',
    'Rolph',
    'Maisie',
  ];

  const cats = [
    'Garfield',
    'Heathcliff',
  ]

  const dinos = [
    'Barnie',
    'Sharp Tooth',
  ]

  const animals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
  const withNoises1 = ['Fido says "Woof!"', 'Garfield says "Meow!"', 'Sharp Tooth says "ROWR."'];
  const animals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff'];
  const withNoises2 = ['Rolph says "Woof!"', 'Maisie says "Woof!"', 'Barnie says "ROWR."', 'Heathcliff says "Meow!"'];

  expect(addNoises(animals1)).toEqual(withNoises1);
  expect(addNoises(animals2)).toEqual(withNoises2);
})

it(`doesn't modify the original array`, () => {
  const animals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
  const animals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff'];
  const originalAnimals1 = ['Fido', 'Garfield', 'Sharp Tooth'];
  const originalAnimals2 = ['Rolph', 'Maisie', 'Barnie', 'Heathcliff']