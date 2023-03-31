function calculate() {
    weight = document.getElementById('weight').value;
    height = document.getElementById('height').value;
    new_height = (height / 100) ** 2;
    if (weight && new_height) {
        BMI = weight / new_height;
        if (BMI < 18.5) {
            result.innerHTML='Under Weight';
        }
        else if (BMI >= 18.5 && BMI <= 24.9) {
            result.innerHTML='Normal';
        }
        else if (BMI >= 25 && BMI <= 29.9) {
            result.innerHTML='Over Weight';
        }
        else if (BMI >= 30 && BMI <= 34.9) {
            result.innerHTML='Obesity(class 1)';
        }
        else if (BMI >= 35 && BMI <= 39.9) {
            result.innerHTML='Obesity(class 2)';
        }
        else if (BMI > 40) {
            result.innerHTML='Extreme Obesity';
        }
    }
    else{
        invalid.innerHTML="Please enter input"
    }
}