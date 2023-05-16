
var randomworld = [
  'prisoner',
  'bronze',
  'union',
  'determine',
  'gossip',
  'infrastructure',
  'shaft',
  'beef',
  'compartment',
  'biology',
  'extent',
  'routine',
  'glance',
  'operation',
  'survey',
  'injection',
  'build',
  'party',
  'manufacturer',
  'connection',
  'skip',
  'stall',
  'dairy',
  'place',
  'architect',
  'initial',
  'nonsense',
  'tournament',
  'pit',
  'cabin',
  'straighten',
  'banish',
  'meeting',
  'cane',
  'diplomatic',
  'camp',
  'observer',
  'overall',
  'direction',
  'recording',
  'particle',
  'paralyzed',
  'mind',
  'absorption',
  'snuggle',
  'insurance',
  'unlawful',
  'dramatic',
  'project',
  'pity'
];
let word = 0;
const sayHi = () => {
  let SymbolInMin = document.getElementById('SymbolMinute');
  SymbolInMin.textContent = 'символов в минуту: ' + word;
  word = 0; 
  setTimeout(sayHi, 60000);
}
sayHi();
var myHeading = document.getElementById('entersymbol');
var allWords = randomworld.join(',');
myHeading.textContent = randomworld;
let text = myHeading.textContent;
let splitext = text.split('');
document.addEventListener('keydown', function(event) {
  let keypress = event.key.toLowerCase();
  let keycolor = document.getElementById(keypress);
  console.log(keypress)
  
  if (keypress === splitext[0]) {
    let spliced = splitext.splice(0, 1);
    myHeading.textContent = splitext.join('');
    
    if (keycolor) {
      word++;
      keycolor.style.backgroundColor = 'green';
      setTimeout(function() {
        keycolor.style.backgroundColor = '#fff';
      }, 500);
    }
  } else {
    if (keycolor) {
      keycolor.style.backgroundColor = 'red';
      setTimeout(function() {
        keycolor.style.backgroundColor = '#fff';
      }, 500);
    }
  }
});
