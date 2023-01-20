// man kann Teile eines Arays kopieren mit slice

const test = [
    'lenny',
    'was',
    'los',
    'mach',
    'tu',
    'was',
]

const newtest =test.slice(1) //kopiert alle elemnet aus test ab position 1
const newtest2 = test.slice(1,2) //kopiert ab position 1 2 Elemente
