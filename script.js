function appendCharacter(char) {
  document.getElementById('display').value += char;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    let expression = document.getElementById('display').value;
    expression = expression.replace('^', '**');
    const result = eval(expression);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Erro';
  }
}