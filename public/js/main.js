function onSubmit(e) {
  e.preventDefault()

  document.querySelector('#picture').src = ''

  const prompt = document.querySelector('.text').value

  if (prompt === '') {
    alert('Por favor adicione um texto')
    return
  }

  generateImageRequest(prompt)
}

async function generateImageRequest(prompt) {
    showLoading()

    try {
        const response = await fetch('/openai/generateimage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt
            })
        })

        if (!response.ok) {
            removeLoading()
            throw new Error('A imagem não pôde ser gerada.')
        }

        const data = await response.json()
        //console.log(data.data)

        const imageUrl = data.data

        document.querySelector('#picture').src = imageUrl

        removeLoading()
    } catch (error) {
        removeLoading()
        document.querySelector('.textImage').textContent = error
    }
}

function showLoading() {
    document.querySelector('.textImage').textContent = 'Carregando...'
}

function removeLoading() {
    document.querySelector('.textImage').textContent = ''
}

document.querySelector('.search').addEventListener('submit', onSubmit)
