//a**2+b**"2+c**2+ 2*a*b+2*b*c+2*a*c

async function p1(){
    let p1=a**2
    return p1 ? p1 : Error("Hay un error") 
};
async function p2(){
    let p2=b**2
    return p2 ? p2 : Error("Hay un error") 
};
async function p3(){
    let p3=c**2
    return p3 ? p3 : Error("Hay un error") 
};
async function p4(){
    let p4=2*a*b
    return p4 ? p4 : Error("Hay un error") 
};
async function p5(){
    let p5=2*c*a
    return p5 ? p5 : Error("Hay un error") 
};
async function p6(){
    let p6=2*c*b
    return p6 ? p6 : Error("Hay un error") 
};
await function