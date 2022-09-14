const arrMethod = [
    {name: '.copyWithin()'},
    {name: '.map()'},
    {name: '.filter()'},
    {name: '.find()'},
    {name: '.reduce()'},
    {name: '.fill()'},
    {name: '.findIndex()'},
    {name: '.some()'},
    {name: '.every()'},
    {name: '.slice()'},
    {name: '.splice()'},
    {name: '.push()'},
    {name: '.pop()'},
    {name: '.shift()'},
    {name: '.unshift()'},
    {name: '.index()'},
    {name: '.lastIndex()'},
    {name: '.sort()'},
    {name: '.foreach()'},
    {name: '.concat()'},
    {name: '.flat()'},
    {name: '.from()'},
    {name: '.include()'},
    {name: '.isArray()'},
    {name: '.join()'},
    {name: '.revers()'},
]
const shapes = [
    {id: 1,class: 'items square'},
    {id: 2,class: 'items triangle'},
    {id: 3,class: 'items circle'},
    {id: 4,class: 'items square'},
    {id: 5,class: 'items triangle'},
    {id: 6,class: 'items circle'},
    {id: 7,class: 'items square'},
    {id: 8,class: 'items triangle'},
    {id: 9,class: 'items circle'},
    {id: 10,class: 'items square'},
    {id: 11,class: 'items triangle'},
    {id: 12,class: 'items circle'},
    {id: 13,class: 'items square'},
    {id: 14,class: 'items triangle'},
    {id: 15,class: 'items circle'},
    {id: 16,class: 'items square'},
    {id: 17,class: 'items triangle'},
    {id: 18,class: 'items circle'},
    {id: 19,class: 'items square'},
    {id: 20,class: 'items triangle'},
    {id: 21,class: 'items circle'},
    {id: 22,class: 'items square'},
    {id: 23,class: 'items triangle'},
    {id: 24,class: 'items circle'},
    {id: 25,class: 'items square'},
    {id: 26,class: 'items triangle'},
    {id: 27,class: 'items circle'},
    {id: 28,class: 'items square'},
    {id: 29,class: 'items triangle'},
    {id: 30,class: 'items circle'},
    {id: 31,class: 'items square'},
    {id: 32,class: 'items triangle'},
    {id: 33,class: 'items circle'},
    {id: 34,class: 'items square'},
    {id: 35,class: 'items triangle'},
    {id: 36,class: 'items circle'},
    {id: 37,class: 'items square'},
    {id: 38,class: 'items triangle'},
    {id: 39,class: 'items circle'},
    {id: 40,class: 'items square'},
    {id: 41,class: 'items triangle'},
    {id: 42,class: 'items circle'},
    {id: 43,class: 'items square'},
    {id: 44,class: 'items triangle'},
    {id: 45,class: 'items circle'},
    {id: 46,class: 'items square'},
    {id: 47,class: 'items triangle'},
    {id: 48,class: 'items circle'},
    {id: 49,class: 'items square'},
    {id: 50,class: 'items triangle'},
    {id: 51,class: 'items circle'},
    {id: 52,class: 'items square'},
    {id: 53,class: 'items triangle'},
    {id: 54,class: 'items circle'},
    {id: 55,class: 'items square'},
    {id: 56,class: 'items triangle'},
    {id: 57,class: 'items circle'},
    {id: 58,class: 'items square'},
    {id: 59,class: 'items triangle'},
    {id: 60,class: 'items circle'},
    {id: 61,class: 'items square'},
    {id: 62,class: 'items triangle'},
    {id: 63,class: 'items circle'},
    {id: 64,class: 'items square'},
    {id: 65,class: 'items triangle'},
    {id: 66,class: 'items circle'},
    {id: 67,class: 'items square'},
    {id: 67,class: 'items triangle'},
    {id: 69,class: 'items circle'},
    {id: 70,class: 'items square'},
    {id: 71,class: 'items triangle'},
    {id: 72,class: 'items circle'},
    {id: 73,class: 'items square'},
    {id: 74,class: 'items triangle'},
    {id: 75,class: 'items circle'},
    {id: 76,class: 'items square'},
    {id: 77,class: 'items triangle'},
    {id: 78,class: 'items circle'},
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

const shapeFnc = () => {
    shapes.map((item)=> {div =  document.createElement('div');
    div.setAttribute('class', item.class);
    document.getElementById('befor').appendChild(div);
})
        
    return div 
}
shapeFnc()

const methodsName = () => {
    arrMethod.map((item)=> {button =  document.createElement('button');
    button.setAttribute('class','btn');
    button.appendChild(document.createTextNode(item.name));
    document.getElementById('buttons').appendChild(button);
})
        
    return button
}
methodsName()



const mapFnc = () => {
    shapes.map((item)=> {div =  document.createElement('div');
    div.setAttribute('class', 'items circle');
    document.getElementById('main').appendChild(div);
})
        
    return div 
}
mapFnc()
