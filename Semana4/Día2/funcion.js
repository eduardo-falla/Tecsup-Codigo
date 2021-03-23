
function recomenclima(clima) {
    let recomendacion= "";
    if(clima=="lluvioso"){
        recomendacion="Hoy lloverá, usar su paraguas";}
    else if (clima=="nubleado"){ 
        recomendacion="Hoy el cielo estará gris, sad ";}
    else if(clima=="soleado"){
        recomendacion="Radiación alta, mantenerse bajo la sombra";}
    else{
        Recomendacion=("No se que poner")
    }
return recomendacion;
    
}

console.log(recomenclima("lluvioso"));
console.log(recomenclima("nublado"));
console.log(recomenclima("soleado"));
console.log(recomenclima("otro"));