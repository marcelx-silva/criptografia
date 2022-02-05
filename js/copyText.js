//const copyEncryptButton = document.getElementsByTagName('button')[0];

const copy = document.getElementById('copy');
const message = document.getElementById('outputMessage');

copy.addEventListener('click',()=>{
   let copiedMessage = message;
   copiedMessage.select();
   copiedMessage.setSelectionRange(0,99999);
   navigator.clipboard.writeText(copiedMessage.value)
   
})







/*

const copyDecryptButton = document.getElementById('copyDecryptMessage');

copyDecryptButton.addEventListener('click',()=>{
   // console.log('Botão copyDecryptButton Funcionando')
})
*/