import React, { useEffect, useState } from 'react'
import api from './services/api'

import Header from './components/Header';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
		api.get('repositories').then((response) => {
			setRepositories(response.data)
		});
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
		await api.delete(`repositories/${id}`)

		setRepositories(repositories.filter((repository) => repository.id !== id))
	}

  return (
    <div>
      <ul data-testid="repository-list">
			<Header>
				{repositories.map((repository) => (
						<li key={repository.id}>
							{repository.title}
							<button onClick={() => handleRemoveRepository(repository.id)}>
								Remover Repositório
							</button>
						</li>
					))}
				</Header>
      </ul>

      <button onClick={handleAddRepository}>Adicionar Repositório</button>
    </div>
  );
}

export default App;
