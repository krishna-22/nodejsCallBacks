var rect = require('./rectangle')
function calculate(l,b)
    {
           rect(l,b,(err,rectangle)=>
           {
              if(err)
              console.log(err.message)
              console.log(rectangle.area(),rectangle.perimeter())
           });
           console.log('after execution')
    }
   

    calculate(2,3)
    calculate(3,4)
    calculate(1,2)