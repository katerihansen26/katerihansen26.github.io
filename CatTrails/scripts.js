const state = {
  cats: 4,
  food: 80,
  magic: 50,
  morale: 100,
  distance: 0,
  coins: 25,
  gameOver: false
};

const events = [
  {
    text: 'A cloud dragon blocks the trail and demands a joke.',
    choices: [
      {
        label: 'Tell a joke',
        result: function () {
          state.morale += 10;
          addLog('The dragon laughed and gave you snacks.');
        }
      },
      {
        label: 'Challenge the dragon',
        result: function () {
          state.food -= 10;
          state.morale -= 10;
          addLog('The dragon stole your fish snacks.');
        }
      }
    ]
  },
  {
    text: 'You discover glowing mushrooms in the forest.',
    choices: [
      {
        label: 'Harvest mushrooms',
        result: function () {
          state.food += 20;
          addLog('The mushrooms were delicious.');
        }
      },
      {
        label: 'Dance with mushroom spirits',
        result: function () {
          state.magic += 15;
          addLog('The spirits taught you magical songs.');
        }
      }
    ]
  },
  {
    text: 'A tuna golem guards a shortcut.',
    choices: [
      {
        label: 'Offer fish snacks',
        result: function () {
          state.food -= 15;
          state.distance += 100;
          addLog('The golem lets you pass.');
        }
      },
      {
        label: 'Fight the golem',
        result: function () {
          state.cats -= 1;
          addLog('You won, but lost a cat.');
        }
      }
    ]
  }
];

function updateUI() {
  document.getElementById('cats').textContent = state.cats;
  document.getElementById('food').textContent = state.food;
};