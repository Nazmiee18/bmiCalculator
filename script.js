document.addEventListener('DOMContentLoaded', () => {
  const btnCalculator = document.getElementById('btncal');
  const inputWeight = document.getElementById('weight');
  const inputHeight = document.getElementById('height');
  const hasilBmi = document.getElementById('hasil');

  btnCalculator.addEventListener('click', () => {
    const berat = parseFloat(inputWeight.value);
    const tinggi = parseFloat(inputHeight.value);
    const bmiCal = berat / (tinggi / 100) ** 2;
    const bulatBmi = bmiCal.toFixed(1);
    let result = '';

    if (isNaN(bulatBmi) || bulatBmi <= 0) {
      hasilBmi.innerText = 'Please enter weight and height correctly';
    } else if (!isNaN(bulatBmi)) {
      if (bulatBmi <= 18.5) {
        result = 'Underweight';
      } else if (bulatBmi <= 24.9) {
        result = 'Normalweight';
      } else if (bulatBmi <= 29.9) {
        result = 'Overweight';
      } else {
        result = 'Obesity';
      }
      hasilBmi.innerText = `Your BMI is ${bulatBmi} which means You are ${result}`;
    } else {
      hasilBmi.innerText = 'The number you entered is invalid';
    }
  });
});
