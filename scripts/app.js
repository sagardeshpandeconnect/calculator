const buttons = document.getElementsByTagName('button');
const result = document.getElementById('result');

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener('click', function () {
        if (this.innerHTML == '=') {
            result.innerHTML = eval(result.innerHTML);
        } else if (this.innerHTML == 'AC') {
            result.innerHTML = '';
        }
        else {
            result.innerHTML += this.innerHTML;
        }
    })
}