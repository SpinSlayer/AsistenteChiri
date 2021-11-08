const lista_notas= document.getElementById('lista-notas')
const crear_nota= document.getElementById('creaNota')
const categ_form= document.getElementById('categoriaNota')
const fache_nota = document.getElementById('selectTiempo')
const fragment= document.createDocumentFragment()
const fragment2= document.createDocumentFragment()
const categorias=["Trabajo","Estudio","Lista de compras", "Deberes", "Deporte", "Música", "Salud", "Viaje","Libro","Restaurante"]

var titulo=""
var content=""
var modificado="hace 5 minutos"
var categ=""
var fec=""

//CREAR NOTA
function crearNota(){

    titulo= document.getElementById("tituloNota").value
    content= document.getElementById("contenidoNota").value
    categ=document.getElementById("categoriaNota").value
    fec = document.getElementById('selectTiempo').value
    console.log(fec)
    
    const nota= document.createElement('div')
    nota.className='col'
    nota.style = 'border-bottom: 1px solid rgba(0, 0, 0, 0.507); margin-right:30px;'

    const tiempo = document.createElement('p')
    tiempo.innerText = fec
    tiempo.style = 'text-align: right; padding-right: 30px;'

    const title = document.createElement('li')
    title.innerText = titulo
    title.className = 'card-title'
    title.style='font-size:15px; font-weight: bold;'
    
    const contenido =document.createElement('p') 
    contenido.innerText=content
    contenido.style='word-wrap:break-word; font-size:15px; margin-right: 60px; width: 50%'



    fragment.appendChild(nota)  
    if(!lista_notas.hasChildNodes()) { lista_notas.appendChild(fragment) }
    else { lista_notas.insertBefore(fragment,lista_notas.children[0]) }
    
    nota.appendChild(title)
    nota.appendChild(contenido)
    nota.appendChild(tiempo)

    document.getElementById("tituloNota").value=""
    document.getElementById("contenidoNota").value=""
    document.getElementById("selectTiempo").value=""
    console.log(categ)
}
crear_nota.addEventListener('click',crearNota,true)

//CARGAR CATEGORIAS DEL FORMULARIO

for(const c of categorias)
{
    const selectItem= document.createElement('option')
    selectItem.setAttribute('value',c.toLowerCase())
    selectItem.textContent= c
    fragment2.appendChild(selectItem)
}
categ_form.appendChild(fragment2)

