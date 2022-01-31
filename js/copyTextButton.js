//const copyEncryptButton = document.getElementsByTagName('button')[0];

const copyButton = document.getElementById('copy');
const message = document.getElementById('outputMessage');

copyButton.addEventListener('click', () => {
   let copiedMessage = message;
   copiedMessage.select();
   copiedMessage.setSelectionRange(0, 99999);
   navigator.clipboard.writeText(copiedMessage.value)

})



