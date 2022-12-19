function onSubmit(e) {
  e.preventDefault()

  const prompt = document.querySelector('.text').value

  if (prompt === '') {
    alert('Por favor adicione um texto')
    return
  }

  generateImageRequest(prompt)
}

async function generateImageRequest(prompt) {
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
            throw new Error('A imagem não pôde ser gerada.')
        }

        const data = await response.json()
        console.log(data)
    } catch (error) {
        document.querySelector('.image').textContent = error
    }
}

document.querySelector('.search').addEventListener('submit', onSubmit)
