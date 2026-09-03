import { useState } from 'react'

function App() {
  const [cliques, setCliques] = useState(0)

  return (
    <main>
     <h1>Aplicação publicada com GitHub Actions</h1>

      <p>Cliques: {cliques}</p>

      <button onClick={() => setCliques(cliques + 1)}>
        Adicionar clique
      </button>
    </main>
  )
}

export default App
