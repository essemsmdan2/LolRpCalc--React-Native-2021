let grid = [];
let arrayResult = [];

let arrayTiposPag = [
  {
    //Pg-Domestico - Boleto bancário - Gold,Paypal,Pagseguro - Itaú,Banco do Brasil,Bradesco, HSBC - VISA, MASTERCARD, HIPERCARD,AURA,ELO,DISCOVER,ALGUM OUTRO

    CartãoCredito: [
      {R$: 13.65, RP: 650},
      {R$: 27.25, RP: 1300},
      {R$: 54.5, RP: 2600},
      {R$: 95.5, RP: 4550},
      {R$: 136.25, RP: 6500},
      {R$: 272.5, RP: 13000},
    ],
  },

  {
    PaySafe: [
      {R$: 10.0, RP: 480},
      {R$: 20.0, RP: 960},
      {R$: 25.0, RP: 1200},
      {R$: 40.0, RP: 1920},
      {R$: 50.0, RP: 2400},
      {R$: 100.0, RP: 4800},
    ],
  },
  {
    CelularSms: [
      {R$: 4.99, RP: 135},
      {R$: 9.99, RP: 275},
    ],
  },
];

function criaResultadosArray(props) {
  //faz um for em todas as opções de objMetodoPag e verifica os que são compativeis com o valor digitado e retorna o  "arrayResult" com os valores compatíveis, intercalados em 2 indexs
  if (arrayResult) {
    arrayResult = [];
  }
  let rp = props;

  for (let index = 0; index < arrayTiposPag.length; index++) {
    const objMetodoPag = arrayTiposPag[index];

    let arrayObjprecos = Object.values(objMetodoPag)[0];

    for (let index = 0; index < arrayObjprecos.length; index++) {
      const objPreco = arrayObjprecos[index];
      const objPrecoSeguinte = arrayObjprecos[index + 1];

      if (objPreco.RP >= rp && objPreco.RP <= rp * 2) {
        arrayResult.push(Object.keys(objMetodoPag)[0]);
        arrayResult.push(objPreco.RP);
        arrayResult.push(objPreco.R$.toFixed(2));
      }
    }
  }

  return arrayResult;
}

export default criaResultadosArray;
