
// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на 
//картинку console.log выводился ее src.
// let elems = document.getElementsByTagName('img');
// for(let i = 0; i <elems.length; i++){
//     elems[i].onclick = func;
// }
// function func(){
//     console.log(this.getAttribute('src'));
// }

// Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в 
// атрибут title запишется ее текст
// let elems = document.querySelectorAll('a');
// for( let i = 0; i<elems.length;i++){
//     elems[i].addEventListener('mouseover', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
// }
//Привяжите всем ссылкам событие - по наведению на ссылку в конец ее 
//текста дописывается ее href в круглых скобках
// let elems = document.querySelectorAll('a');
// for( let i = 0; i<elems.length;i++){
//     elems[i].addEventListener('mouseover', func);
// }
// function func(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
//     this.removeEventListener('mouseover', func);
// }
//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"
// let id = document.querySelector('#test');
// let elems = document.querySelectorAll('input');
// for (let i = 0; i < elems.length; i++) {
//     elems[i].onblur = f1;
//     }
// function f1() {
//     id.innerHTML = this.value;
// }


// Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
//при нажатии на любой из них, но только по первому нажатию. Повторное 
//нажатие на инпут не должно вызывать реакции.

// function f2 () {
//     alert(this.value);
// }
// let text = document.querySelectorAll('input');
// for (let i = 0; i < text.length; i++) {
//     (text[i]).addEventListener('click', f2, {once: true});
// }

// Даны абзацы с числами. По нажатию на абзац в нем должен появится 
//квадрат числа, которое он содержит.
// let p = document.querySelectorAll('p');
// console.log(p);
// for (let i = 0; i < p.length; i++) {
//     p[i].onclick = f3;
// }
// function f3 () {
//     this.textContent = this.textContent**2;
// };

// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.
let input = document.querySelectorAll('input');
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('blur', f4);
}
function f4() {
    console.log(this.getAttribute('data-length'));
    if (this.getAttribute('data-length') == this.value.length) { 
        this.style.borderColor = 'green';        
    } else {
        this.style.borderColor = 'red';    
    }
};
