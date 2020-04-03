module.exports=(x,y,callback)=>{
    if(x<=0 || y<=0)
    {
        setTimeout(()=>callback(new Error("dimensions are negative"),null),2000)
    }
    else{
        setTimeout(()=>callback(null,{perimeter:()=>{ return 2*(x+y)},area:()=>{return x*y}}),2000)
    }
}