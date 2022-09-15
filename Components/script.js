// const arrMethod = [
//     {name: '.copyWithin()'},
//     {name: '.map()'},
//     {name: '.filter()'},
//     {name: '.find()'},
//     {name: '.reduce()'},
//     {name: '.fill()'},
//     {name: '.findIndex()'},
//     {name: '.some()'},
//     {name: '.every()'},
//     {name: '.slice()'},
//     {name: '.splice()'},
//     {name: '.push()'},
//     {name: '.pop()'},
//     {name: '.shift()'},
//     {name: '.unshift()'},
//     {name: '.index()'},
//     {name: '.lastIndex()'},
//     {name: '.sort()'},
//     {name: '.foreach()'},
//     {name: '.concat()'},
//     {name: '.flat()'},
//     {name: '.from()'},
//     {name: '.include()'},
//     {name: '.isArray()'},
//     {name: '.join()'},
//     {name: '.revers()'},
// ]
const shapes = [
    {class: 'items green'},
    {class: 'items circle'},
    {class: 'items circle'},
    {class: 'items circle'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items circle'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items square'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items circle'},
    {class: 'items square'},
    {class: 'items circle'},
    {class: 'items triangle'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items square'},
    {class: 'items square'},
    {class: 'items circle'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items circle'},
    {class: 'items circle'},
    {class: 'items square'},
    {class: 'items triangle'},
    {class: 'items square'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items circle'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items square'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items circle'},
    {class: 'items square'},
    {class: 'items square'},
    {class: 'items square'},
    {class: 'items triangle'},
    {class: 'items triangle'},
    {class: 'items square'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items square'},
    {class: 'items triangle'},
    {class: 'items square'},
    {class: 'items square'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items square'},
    {class: 'items circle'},
    {class: 'items circle'},
    {class: 'items square'},
    {class: 'items square'},
    {class: 'items triangle'},
    {class: 'items triangle'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items square'},
    {class: 'items circle'},
    {class: 'items square'},
    {class: 'items triangle'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items square'},
    {class: 'items square'},
    {class: 'items triangle'},
    {class: 'items square'},
    {class: 'items circle'},
    {class: 'items circle'},
    {class: 'items triangle'},
    {class: 'items triangle'},
    {class: 'items circle'},
    {class: 'items green'},
    // {id: 77,class: 'items triangle'},
    // {id: 78,class: 'items circle'},
]
function createStyle() {
    const style = document.createElement('style');

    style.textContent = `
    .square{
        width: 60px;
        height: 60px;
        background: salmon;
        margin-left: 5px;

    }
    .triangle{
        width: 0;
        height: 0;
        border: 30px solid transparent;
        border-top: 0;    
        border-bottom: 60px solid salmon;
        margin-left: 5px;

    }
    .circle{
        width: 60px;
        height: 60px;
        background: salmon;
        border-radius: 50%;
        margin-left: 5px;
    }
    `;
    document.head.appendChild(style);
}
// createStyle();

// dynamic button call..........................................
// const methodsName = () => {
//     arrMethod.map((item)=> {button =  document.createElement('button');
//     button.setAttribute('class','btn');
//     button.appendChild(document.createTextNode(item.name));
//     document.getElementById('buttons').appendChild(button);
// })

//     return button
// }
// methodsName()
//.................................................................


// map method
const mapFnc = () => {
    shapes.map((item)=> {div =  document.createElement('div');
    div.setAttribute('class', 'items circle');
    document.getElementById('after').appendChild(div);
});      
    return div; 
};

// push method ..............................
const pshFnc = () =>{
    let obj = {class: 'items star'};
    return shapes.push(obj);
};
console.log(shapes);
// pshFnc()
//.............................
// pop/////////////////
const ppFnc = () => {
    shapes.pop();
}
// ppFnc()
//..........................

// unshift method .......................................
const ushtFnc = () => {
    let obj = {class: 'items star'};
    return shapes.unshift(obj);
}
//..................................
// console.log(ushtFnc());
const shftFnc = () => {
    shapes.shift();
};
// shftFnc();
const splcFnc = () => {
    let shapeHalf = shapes.length/2;
    for (let i = 0; i < shapeHalf; i++) {
        // div = document.createElement('div');
        // div.setAttribute('class','items ');
        // document.getElementById('after').appendChild(div);

        div = document.createElement('div');
         div.setAttribute('class','items star');
         let spl = document.getElementById('after').appendChild(shapes.splice(shapeHalf,0,div));    
        // return spl;
    }

}
// splcFnc();























































































//...........shape Calling
const shapeFnc = () => {
    shapes.map((item)=> {div =  document.createElement('div');
    div.setAttribute('class', item.class);
    document.getElementById('befor').appendChild(div);
})
        
    return div 
}
shapeFnc();