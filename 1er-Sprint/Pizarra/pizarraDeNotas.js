const lista_notas = document.getElementById('lista_notas')
const crear_nota = document.getElementById('creaNota')
const categ_form = document.getElementById('categoriaNota')
const btn_filtrar =document.getElementById('btn_filter')
const btn_borrar = document.getElementById('btnDelete')
const fragment = document.createDocumentFragment()
const fragment2 = document.createDocumentFragment()
const categorias =["Trabajo","Estudio","Lista de compras", "Deberes", "Deporte", "Música", "Salud", "Viaje","Libro","Restaurante"]
const bd_notas=[]


var titulo=""
var content=""
var modificado=""
var categ=""
var cont_cajas=0
var temp={}

//CREAR NOTA
function crearNota(){
    
   
    var now = moment();//Se caputar el momento

    cont_cajas++
    titulo= document.getElementById("tituloNota").value
    content= document.getElementById("contenidoNota").value
    categ=document.getElementById("categoriaNota").value
    /*
    nota_creada=
    {
        "titulo": titulo,
        "content": content,
        "categ":categ
    }
    bd_notas.push(nota_creada)*/
    
    
    
    const nota= document.createElement('div')
    nota.id='caja'+(cont_cajas).toString()
    nota.className='col lista_de_cartas '+categ
    nota.draggable=true
    nota.onmouseenter = ()=>{ temp[0]=(nota.id) }; 
    
    const formatoNota=document.createElement('div')
    formatoNota.className='card h-100'

    const cardBody = document.createElement('div')
    cardBody.className = 'card-body bg-light'

    const title = document.createElement('h2')
    title.innerText = titulo
    title.className = 'card-title text-dark'
    
    const contenido =document.createElement('p')
    contenido.innerText=content
    contenido.className='card-text fs-5 text-dark'
    contenido.style='word-wrap:break-word'

    const cardFooter = document.createElement('div')
    cardFooter.className = 'card-footer '
    cardFooter.style = 'background-color: rgba(135, 149, 221, 0.87)'

    const small = document.createElement('small')
    small.innerText=now.fromNow()
    small.className = 'text-dark'

    fragment.appendChild(nota)  
    if(!lista_notas.hasChildNodes()) lista_notas.appendChild(nota)
    else lista_notas.insertBefore(nota,lista_notas.children[0])
    
    nota.appendChild(formatoNota)
    formatoNota.appendChild(cardBody)
    cardBody.appendChild(title)
    cardBody.appendChild(contenido)
    formatoNota.appendChild(cardFooter)
    cardFooter.appendChild(small)

    document.getElementById("tituloNota").value=""
    document.getElementById("contenidoNota").value=""
    console.log(categ)
    const toSend = {
        titulo: title.innerText,
        contenido: contenido.innerText, 
        categoria: categ, 
        prioridad: ""
    
    
    };
    
    const jsonString = JSON.stringify(toSend);
  
    console.log(jsonString);
    //const xhr = new XMLHttpRequest();

    /*xhr.open("POST","/AsistenteChiri-1/Pizarra");
    xhr.setRequestHeader("Content.type", "application/json");
    xhr.send(jsonString);*/

    $.ajax({
            type: 'GET',
            url: 'Pizarra_de_notas.html',
            dataType: 'json',
            data: {titulo: title.innerText, contenido: contenido.innerText, categoria: categ, prioridad: ""}
            
        
});


   
    
    
}
                        

crear_nota.addEventListener('click',crearNota,true)


/*
$('#creaNota').on("click", function(){
    
    
    $.ajax({
        type: 'POST',
        url: 'C:/Users/Master/IdeaProjects/AsistenteChiri',
        dataType: 'json',
        data: {titulo: title.innerText, contenido: contenido.innerText, categoria: categ, prioridad: ""}
        
    
    });
    
});*/

//CARGAR CATEGORIAS DEL FORMULARIO

for(const c of categorias)
{
    const selectItem= document.createElement('option')
    selectItem.setAttribute('value',c.toLowerCase())
    selectItem.textContent= c
    fragment2.appendChild(selectItem)
}
categ_form.appendChild(fragment2)



//DRAG and DROG de los cards

btn_borrar.addEventListener('dragleave', e=>
{        
    var x= document.getElementById(temp[0])
    lista_notas.removeChild(x)      
})