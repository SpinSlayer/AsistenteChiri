const lista_notas = document.getElementById('lista_notas')
const crear_nota = document.getElementById('creaNota')
const categ_form = document.getElementById('categoriaNota')
const btn_filtrar =document.getElementById('btn_filter')
const btn_borrar = document.getElementById('btnDelete')
const fragment = document.createDocumentFragment()
const fragment2 = document.createDocumentFragment()
const categorias =["Trabajo","Estudio","Lista de compras", "Deberes", "Deporte", "Música", "Salud", "Viaje","Libro","Restaurante"]



var titulo=""
var content=""
var modificado=""
var categ=""
var cont_cajas=0

//CREAR NOTA
function crearNota(){
    var now = moment();//Se caputar el momento

    cont_cajas++
    titulo= document.getElementById("tituloNota").value
    content= document.getElementById("contenidoNota").value
    categ=document.getElementById("categoriaNota").value
    
    const nota= document.createElement('div')
    nota.id='caja'+(cont_cajas).toString()
    nota.className='col lista_de_cartas'
    nota.draggable=true
    
    const formatoNota=document.createElement('div')
    formatoNota.className='card h-100'

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body bg-light'

    const title = document.createElement('h3')
    title.innerText = titulo
    title.className = 'card-title'
    
    const contenido =document.createElement('p')
    contenido.innerText=content
    contenido.className='card-text fs-4'
    contenido.style='word-wrap:break-word'

    const cardFooter = document.createElement('div')
    cardFooter.className = 'card-footer '
    cardFooter.style = 'background-color: rgb(200, 226, 206); '

    const small = document.createElement('small')
    small.innerText=now.fromNow()
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



//drag and drop de los cards
btn_borrar.addEventListener('dragover', e=>
{
    this.addEventListener('dragenter',console.log(this.Element.id),true)
});
btn_borrar.addEventListener('dragleave', e=>
{        
    console.log('Drag leave')    
});








