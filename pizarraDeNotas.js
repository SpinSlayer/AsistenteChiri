const lista_notas= document.getElementById('lista_notas')
const crear_nota= document.getElementById('creaNota')
const categ_form= document.getElementById('categoriaNota')
const fragment= document.createDocumentFragment()
const fragment2= document.createDocumentFragment()
const categorias=["Trabajo","Estudio","Lista de compras", "Deberes", "Deporte", "Música", "Salud", "Viaje","Libro","Restaurante"]

var titulo=""
var content=""
var modificado="hace 5 minutos"
var categ=""


//CREAR NOTA
function crearNota(){

    titulo= document.getElementById("tituloNota").value
    content= document.getElementById("contenidoNota").value
    categ=document.getElementById("categoriaNota").value
    
    const nota= document.createElement('div')
    nota.className='col'
    
    const formatoNota=document.createElement('div')
    nota.className='card h-100'

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body bg-light'

    const title = document.createElement('h3')
    title.innerText = titulo
    title.className = 'card-title'
    
    const contenido =document.createElement('p')
    contenido.innerText=content
    nota.className='card-text fs-6'

    const cardFooter = document.createElement('div')
    cardFooter.className = 'card-footer '
    cardFooter.style = 'background-color: rgb(200, 226, 206); '

    const small = document.createElement('small')
    small.innerText=modificado
    small.className = 'text-dark'

    fragment.appendChild(nota)  
    if(!lista_notas.hasChildNodes()) lista_notas.appendChild(fragment)
    else lista_notas.insertBefore(fragment,lista_notas.children[0])
    
    nota.appendChild(formatoNota)
    formatoNota.appendChild(cardBody)
    cardBody.appendChild(title)
    cardBody.appendChild(contenido)
    formatoNota.appendChild(cardFooter)
    cardFooter.appendChild(small)


    document.getElementById("tituloNota").value=""
    document.getElementById("contenidoNota").value=""
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

