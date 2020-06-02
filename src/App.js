import React, { useEffect, useState } from 'react'
import api from './services/api'

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
		api.get('repositories').then((response) => {
			setRepositories(response.data)
		})
	}, []);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
			title: 'Emerson Barbosa - Repository',
			url: 'https://github.com/emersonbrs',
			techs: ['JavaScript', 'NodeJs'],
		});

		setRepositories([...repositories, response.data]);
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
