let a = ''; // first number
let b = '';//second number
let sign = ''; // sign of operation
let finish = false;

const digit = ['0','1','2','3','4','5','6','7','8','9','.'];
const action = ['-','+','X','/',];

//SCREEN 
const out = document.querySelector('.calc-screen p')
function clearAll(){
a = ''; 
b = '';
sign = ''; 
finish = false;
out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;//тут можливо дужки

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return; //якщо нажали в межах поля але не попали по кнопці 
//спробувати написати цей код тут після завершення document.querySelectorlector('.ac').onclick = allClear;
    
    if(event.target.classList.contains('ac')) return; //якщо нажата кнопка 'ac'   target. ссилається на обєкт на який ми попали мишкою
      

    out.textContent = '';//очистити екран якщо наата кнопка 

    //отримую нажату кнопку
    const key = event.target.textContent;// в змінну записується знак який відповідає кнопці

    //перевірка чи нажата цифрова кнопка чи крапка
    if(digit.includes(key)){
        if(b === '' && sign === '' ){
        a += key;
        console.log(a,sign,b);
        out.textContent = a;
    }else if(a!== '' && b !== '' && finish){
        b = key;
        finish = false;
        out.textContent = b;

    }else{
        b += key;
        out.textContent = b;
        console.log(a, sign,b);

    }
    }
    if(action.includes(key)){
        sign= key;
        console.log(a,sign, b);
        out.textContent = sign;
        return;
    }

    if(key === '='){
        if(b === '') b = a;
        switch(sign){
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;
            case '/':
                if(b === '0'){
                    out.textContent = "Помилка"
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break            
        }
        finish = true;
        out.textContent = a
        console.log(a,sign, b);

    }



}