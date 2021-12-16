const showCards = () => {
  return fetch('http://localhost:3000/cards')
  .then(response => response.json())
}

const createCard = (card) => {
  return fetch('http://localhost:3000/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: card.title,
      description: card.description,
      language: card.language,
      color: card.color,
      content: card.content,
      likes: 0,
      isLiked: false,
      comments: [],
    })
  })
}

const editCard = (id) => {
  return fetch(`http://localhost:3000/cards/${id}`, {
    method: 'PATCH',
  })
}

export const clientService = { 
  showCards,
  createCard,
  editCard
};