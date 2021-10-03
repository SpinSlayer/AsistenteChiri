const fecha = new Date()
/*
const mes = fecha.getMonth()
console.log(mes)
*/

//funcion para renderizar calendario
const renderizarCalendario = () => {
    
    fecha.setDate(1) //truco para hallar el dia 1 del mes con respecto al dia de la semana
    //console.log(fecha.getDay()) 
    //muestra el dia de la semana del dia 1 del mes actual (dado que en el caso de septiembre 2021, el resultado es 3, entonces dia 1 de septiembre cayó un miercoles)

    //dias del mes que estan especificados en el HTML desde 1 hasta 31
    const DiasMes = document.querySelector('.days')


    //especifica el NUMERO del ultimo dia del mes actual
    const ultimoDia = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate()
    //console.log(ultimoDia)


    const prevUltimoDia = new Date(fecha.getFullYear(), fecha.getMonth(), 0).getDate()
    //console.log(prevUltimoDia)

    //indice del primer dia
    const IndPrimerDia = fecha.getDay()

    //indice del ultimo dia
    const IndUltimoDia = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDay()
    //console.log(IndUltimoDia)

    //para mostrar los dias del proximo mes
    const proximos = 7 - IndUltimoDia - 1

    //arreglo que muestra los meses en el calendario
    const ArrMeses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ]


    //incrusta el mes correpondiente a la fecha actual dentro del tag ".date h1"
    document.querySelector('.date h1').innerHTML = ArrMeses[fecha.getMonth()]
    //especifica el dia del mes, semana y mes de la fecha actual en la cabecera del calendario
    document.querySelector('.date p').innerHTML = new Date().toDateString()

    let dias = ""


    for (let x = IndPrimerDia; x > 0; x--) {
        dias += `<div class="prev-date">${prevUltimoDia - x + 1}</div>`
    }


    for (let i = 1; i <= ultimoDia; i++) {
        if (i === new Date().getDate() && fecha.getMonth() === new Date().getMonth()) {
            dias += `<div class="today" style="border-radius: 50px">${i}</div>`
        } else {
            dias += `<div>${i}</div>`
        }
    }

    for (let j = 1; j < proximos; j++) {
        dias += `<div class="next-date">${j}</div>`
    }
    DiasMes.innerHTML = dias
}


//estos son los listeners para las flechas
document.querySelector('.prev').addEventListener('click', () => {
    fecha.setMonth(fecha.getMonth() - 1)
    renderizarCalendario()
})

document.querySelector('.next').addEventListener('click', () => {
    fecha.setMonth(fecha.getMonth() + 1)
    renderizarCalendario()
})

renderizarCalendario()