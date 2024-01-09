const accordion = document.getElementsByClassName('items');
for(let i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click',(e) =>{
        let number = accordion[i].lastElementChild;
        console.log(number);
        if(number.style.display === 'block'){
            number.style.display = 'none';
        }else{
            number.style.display = 'block';
        }
    })
}

const save = () =>{
    const contact = document.getElementById('newContact');
    const name = document.getElementById('name').value;
    const number = document.getElementById('phNum').value;
    if(validate()){
    const container = document.querySelector('.container');
    const newElement = document.createElement('div');
    newElement.setAttribute('class','items');
    const nameNode = document.createElement('div');
    nameNode.setAttribute('class','name');
    nameNode.innerHTML = name;
    const phoneNumberNode = document.createElement('div');
    phoneNumberNode.setAttribute('class','number');
    phoneNumberNode.innerHTML = number;
    newElement.appendChild(nameNode);
    newElement.appendChild(phoneNumberNode);
    container.appendChild(newElement);  
    newElement.addEventListener('click',(e) =>{
        let number = newElement.lastElementChild;
        if(number.style.display === 'block'){
            number.style.display = 'none';
        }else{
            number.style.display = 'block';
        }
    })  
    contact.style.display = "none";


    }
    document.getElementById('name').value = '';
    document.getElementById('phNum').value = '';


}

const search = () =>{
    const input = document.getElementById('input');
    const filter = input.value.toUpperCase();
    const items = document.querySelectorAll('.items');
    for(let i = 0; i < items.length; i++){
        let currentElement = items[i].firstElementChild;
        let value = currentElement.innerText;
        console.log(value);
        if(value.toUpperCase().indexOf(filter) > -1){
            items[i].style.display="block";

        }else{
            items[i].style.display = "none";
        }
    }
}


const add = document.getElementById('add');
add.addEventListener('click',() =>{
    const addContact = document.getElementById('newContact');
    addContact.style.display = "block";
})



const validate = () =>{
    const nameValue = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phNum").value;

    const nameRegex = /^[a-zA-Z\s]+$/;
    const phoneRegex = /^\d{10}$/;

    const isValidName = nameRegex.test(nameValue);
    const isValidPhoneNumber = phoneRegex.test(phoneNumber);

    return isValidName && isValidPhoneNumber;
}