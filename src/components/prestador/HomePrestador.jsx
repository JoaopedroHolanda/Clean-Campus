// components/HomePrestador.jsx
import Header from '../Header'; // Importando o Header
import ListaOcorrenciasPrestador from './ListaOcorrenciasPrestador'; // Importando a ListaOcorrenciasPrestador

export default function HomePrestador() {
  return (
    <div>
      <Header /> {/* Incluindo o Header */}
      
      {/* Aqui você pode adicionar mais conteúdo para a página Home Prestador */}
      <main className="p-8">
        
        
        {/* Incluindo a lista de ocorrências */}
        <ListaOcorrenciasPrestador />
      </main>
    </div>
  );
}
