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
    {id: 4,class: 'items green'},
    {id: 2,class: 'items circle'},
    {id: 2,class: 'items circle'},
    {id: 2,class: 'items circle'},
    {id: 3,class: 'items triangle'},
    {id: 2,class: 'items circle'},
    {id: 2,class: 'items circle'},
    {id: 3,class: 'items triangle'},
    {id: 2,class: 'items circle'},
    {id: 4,class: 'items square'},
    {id: 3,class: 'items triangle'},
    {id: 2,class: 'items circle'},
    {id: 2,class: 'items circle'},
    {id: 4,class: 'items square'},
    {id: 2,class: 'items circle'},
    {id: 3,class: 'items triangle'},
    {id: 3,class: 'items triangle'},
    {id: 2,class: 'items circle'},
    {id: 4,class: 'items square'},
    {id: 4,class: 'items square'},
    {id: 2,class: 'items circle'},
    {id: 3,class: 'items triangle'},
    {id: 2,class: 'items circle'},
    {id: 4,class: 'items square'},
    {id: 3,class: 'items triangle'},
    {id: 4,class: 'items square'},
    {id: 2,class: 'items redCircle'},
    {id: 2,class: 'items redCircle'},
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
// push method 
const pshFnc = () =>{
    let obj = {class: 'items redCircle'};
    return shapes.push(obj);
};
// pop method
const ppFnc = () => {
    shapes.pop();
};
// unshift method
const ushtFnc = () => {
    let obj = {class: 'items redCircle'}; // never care that makes sense
    return shapes.unshift(obj);
};
// shift mehtod
const shftFnc = () => {
    let shftShapes = [...shapes]
    shftShapes.shift();
};
// splice method
const splcFnc = () => {
    let shapes1 = [...shapes];
    let shapeHalf = shapes1.length/2;
    let shapes2 = [];
    for (let i = 0; i < shapeHalf; i++) {
            shapes2[i] = {class:'items redCircle'};
    }
   let shapes3 = shapes1.splice(0,shapes2.length);
         let after = (shapes3.concat(shapes2));
         after.map((item) => {
             div = document.createElement('div');
             div.setAttribute('class',item.class);
             document.getElementById('after').appendChild(div);
         })
        return div;
};
// slice method
const slcFnc = () => {
    let slcShapes = [...shapes];
    slcShapes.slice(0,10)
    slcShapes.map((item) => {
        div = document.createElement('div');
        div.setAttribute('class',item.class);
        document.getElementById('after').appendChild(div);
    })
   return div;
};
// some method
const smeFnc = () => {
  let bool =  shapes.some((item) => {
       return item.class == 'items green';
    })
    let res = bool.toString();
    document.getElementById('after').innerHTML = `some one is circle? ${res}`;
};
// every method
const evrFnc = () => {
    let bool =  shapes.every((item) => {
         return item.class == 'items green';
      })
      let res = bool.toString();
      document.getElementById('after').innerHTML = `every one is circle? ${res}`;
  };
// index method
const idxFnc = () => {
    let idx = shapes.map(item => item.class).indexOf('items triangle');
   return document.getElementById('after').innerHTML = `index of the first triangle is: ${idx}` 
};
// lastIndexOf method
const lstIdxFnc = () => {
    let idx = shapes.map(item => item.class).lastIndexOf('items triangle');
  return document.getElementById('after').innerHTML = `index of the last triangle is: ${idx}`
 };
// sort method
const srtFnc = () => {
    let srtShapes = [...shapes]
   let sorted = srtShapes.sort((a,b) => b.id - a.id)
    sorted.map(item => {
        div = document.createElement('div');
        div.setAttribute('class', item.class);
        return document.getElementById('after').appendChild(div);
    })
};
// filter method
const ftrFnc = () => {
    let fltrShapes = [...shapes];
    let fltrd = fltrShapes.filter((value) => {
       div = document.createElement('div');
       div.setAttribute('class', (value.id == 3 && value.class))
       document.getElementById('after').appendChild(div);
    })
};
// fill method
const filFnc = () => {
    let flShapes = [...shapes];
    let filld = flShapes.fill({id: 4,class: 'items green'})
    filld.map(item => {
        div = document.createElement('div');
        div.setAttribute('class', item.class);
      return document.getElementById('after').appendChild(div);
    })
};
// find method
const fndFnc = () => {
   const found = shapes.find(value => {
    value.class == 'items green';
    console.log(value.class);
   div = document.createElement('div');
    div.setAttribute('class', value.class);
    return document.getElementById('after').appendChild(div);
   })
};

//findIndex meyhod
const fndIdxFnc = () => {
    const found = shapes.findIndex(value => {
     value.class == 'items green';
    div = document.createElement('div');
     div.setAttribute('class', value.class);
     return document.getElementById('after').appendChild(div);
    })
 };
// foreach method
const frchFnc = () => {
    const frShapes = [...shapes];
    const echOne = frShapes.forEach((item) => {
        div = document.createElement('div');
        div.setAttribute('class', item.class += ' blu');
       return document.getElementById('after').appendChild(div);
    })
    return echOne;
}









//...........shape Calling
const shapeFnc = () => {
    shapes.map((item)=> {div =  document.createElement('div');
    div.setAttribute('class', item.class);
    document.getElementById('befor').appendChild(div);
})
        
    return div 
};
shapeFnc();