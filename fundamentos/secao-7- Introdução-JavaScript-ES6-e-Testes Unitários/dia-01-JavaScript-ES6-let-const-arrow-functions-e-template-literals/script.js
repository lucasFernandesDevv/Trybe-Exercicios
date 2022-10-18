const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      let scope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(scope);
    } else {
      let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
  }

  testingScope(true);

  
  const sortOddsAndEvens = () => {
    const oddsAndEvens = [13, 3, 4, 10, 7, 2];
 
   return oddsAndEvens.sort()
  
  }
  console.log(sortOddsAndEvens());