/*
Irei pegar os valores do input CONTA, e com estes valores irei fazer a porcentagem á partir dos BOTÕES.
Dentro de porcentagem iremos pegar 5% do valor da conta e vamos exibir dentro dos resultados.
Dentro da parte de "Valor de Gorgeta" será mostrado o valor que ficou a porcentagem.
Dentro de total será somado o valor de gorgeta + o valor total da conta.
*/
const btns = document.querySelectorAll('.btn-container-firstLine, .btn-container-secondLine')
const resultado = document.querySelector('.valor-total-first');
const resetBtn = document.querySelector('.btn-reset')
const totalValue = document.querySelector('.valor-total')
const peopleInput = document.querySelector('.people-input').value;
const valueLessThanZero = document.querySelector('.valueLessThanZero')
const contaInput = Number(document.querySelector('.conta-input').value);


const percorrerBtns = () => {
  for(button of btns){
    
    button.addEventListener('click', (e) => {
      const peopleInput = document.querySelector('.people-input').value;
      const elementoClicado = e.target;
      const valueOfClickedElement = Number(elementoClicado.innerHTML.replace('%', ''));
      const contaInput = Number(document.querySelector('.conta-input').value);
      const percentAccount = (contaInput * valueOfClickedElement / 100) / peopleInput
      
      if(elementoClicado.classList.contains('porcent')){
        resultado.innerHTML = `$${(percentAccount).toFixed(2)}`
        totalValue.innerHTML = `$${(percentAccount + contaInput / peopleInput).toFixed(2)}`
      }



            /// EM TRATATIVA NO MOMENTO (CÓDIGO NÃO FINALIZADO)
      if(contaInput <= 0 || peopleInput <= 0){
        Swal.fire({
          title: 'Oops...',
          text: 'Os valores de conta e/ou número de pessoas devem ser maior do que zero!',
          confirmButtonColor: 'hsl(183, 100%, 15%)'
        })
      }
      
    });

  };
}

const valueLessZero = () => {
  
}


const customPercent = () => {
  const inputCustom = Number(document.querySelector('.input-custom').value);
  const contaInput = Number(document.querySelector('.conta-input').value);
  const peopleInput = document.querySelector('.people-input').value;
  const percentAccount = (contaInput * inputCustom / 100) / peopleInput

  resultado.innerHTML = `$${(percentAccount).toFixed(2)}`
  totalValue.innerHTML = `$${(percentAccount + contaInput / peopleInput).toFixed(2)}`
}

const resetButton = () => {
  resetBtn.addEventListener('click', () => location.reload())
}

  



function iniciarProjeto(){
  percorrerBtns();
  resetButton();
}
iniciarProjeto();


