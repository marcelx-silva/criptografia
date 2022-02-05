const alphabet = [
   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];

const matrizAlfabetoCodificado = [
   {
      id: 1,
      alfabeto: ['la', 'ab', 'oc', 'cd', 'te', 'af', 'hg', 'ih', 'pi', 'oj', 'zk', 'ol', 'nm', 'mn', 'lo', 'ip', 'uq', 'ir', 'as', 'yt', 'yu', 'zv', 'ww', 'ox', 'ey', 'pz', '10', '29', '38', '47', '56', '63', '71', '84', '95', '03'],
   },

]



const encryptButton = document.getElementById('encryptButton');

encryptButton.addEventListener('click', () => {
   getMessageArray(alphabet, matrizAlfabetoCodificado[0].alfabeto)
})


const decryptButton = document.getElementById('decryptButton');

decryptButton.addEventListener('click', () => {
   getMessageArray(matrizAlfabetoCodificado[0].alfabeto, alphabet)

})

function getMessageArray(alphabet, encodedAlphabet) {
   let message = document.getElementById('inputMessage').value;
   let messageArray = message.toLowerCase().split('');

   let i;
   for (i = 0; i < messageArray.length; i++) {
      let j;
      for (j = 0; j < alphabet.length; j++) {
         if (messageArray[i] == alphabet[j]) {
            messageArray[i] = encodedAlphabet[j];
         }
      }
   }
   document.getElementById('outputMessage').value = messageArray.join('');

}

