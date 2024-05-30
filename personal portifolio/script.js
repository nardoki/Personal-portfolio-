 const scriptURL = 'https://script.google.com/macros/s/AKfycbxey9GsMNX0smsoD2j0YmJpNAPV51ZAI9TVHXfN2MCa7u0-bPIEYwi7VkvX03UBMyh1/exec'
  const form = document.forms['submit-to-google-sheet']
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
