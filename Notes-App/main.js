let container=document.querySelector("#note-con")
const noteDeafualt =`<p contenteditable="true" class="w-full bg-blue-700 p-2 center rounded-lg border-2 border-amber-200">dfg</p>`
function AddNote(){
    let newNote=document.createElement('p')
    newNote.className = 'w-full bg-blue-700 my-1 p-2 center rounded-lg border-2 border-amber-200'
    newNote.attributes
    newNote.setAttribute('contenteditable','true')
    console.log(newNote.classList)
    container.appendChild(newNote)
    SaveData()  
}
LoadData();
function SaveData(){
    localStorage.setItem("note-data",container.innerHTML)
}
function LoadData(){
    container.innerHTML=localStorage.getItem("note-data")
}
