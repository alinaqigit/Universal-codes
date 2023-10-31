const socket=io('http://localhost:3000')

let audio=new Audio('ringtone.mp3')
const askName=()=>{
    let nam,i=1;
    while(i<2){
        nam=window.prompt("Please! Enter Your Name:","Name");
        if(nam==null||(nam.toLowerCase())=='name')
        {
            alert("Enter correct Name!")
            nam=window.prompt("Please! Enter Your Name:","Name")
        }else{
            i++;           
        }
    }
    return nam
}
const form= document.getElementById('send-container')
const messageInput= document.getElementById('mss-inp')
const messsageContainer= document.querySelector('.container')
const nam=askName()
const append=(message,position)=>{
    const messageElement=document.createElement('div')
    messageElement.innerText=message
    messageElement.classList.add('message')
    messageElement.classList.add(position)
    messsageContainer.append(messageElement)
    if(position=='left')
        audio.play()
}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message=messageInput.value
    append(`You :${message}`,'right')
    socket.emit('send',message)
    messageInput.value=''
})

socket.emit('new-user-joined',nam)

socket.on('user-joined',data=>{
    append(`${data} joined the chat`,'center')
})

socket.on('receive',data=>{
    append(`${data.name} :${data.message}`,'left')
})
socket.on('left',na=>{
    append(`${na} left the chat`,'center')
})