document.querySelector('#btnResultCipher').addEventListener('click', evt => {
  evt.preventDefault();

  const key = document.querySelector('#encryptKey').value;
  const message = document.querySelector('#encryptMessage').value;

  if (key !== '' && message !== '') {
    document.querySelector('#resultCipher').value = transpositionCipher.encrypt(key, message);
  }

}, false);

document.querySelector('#btnResultMessage').addEventListener('click', evt => {
  evt.preventDefault();

  const key = document.querySelector('#decryptKey').value;
  const message = document.querySelector('#decryptCipher').value;

  console.log(key === '', message === '');

  if (key !== '' && message !== '') {
    document.querySelector('#resultMessage').value = transpositionCipher.decrypt(key, message);
  }

}, false);
