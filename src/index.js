require('./style.css')

console.log('Hello World')

const myFunction = (data) =>{
    console.log(data)
}

module.exports = {
    myFunc: function (data) {
        new myFunction(data);
    }
}