function numberGet(word, numbers) {
    let carNumber = '';
    if(!word || !numbers){
        return 'Введіть дані'
    }else{
    for (let i = 0; i < word.length; i++) {
      const code = word.charCodeAt(i);
      const index = code % 4;
      carNumber += numbers[index];
    }
    }
    return carNumber;
}

const word = 'KYIV';
const codeNumber = '14325647584324';
const carNumber = numberGet(word, codeNumber);
console.log(carNumber); 

