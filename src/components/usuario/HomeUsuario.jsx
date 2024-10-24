// components/HomePrestador.jsx

import { Link } from 'react-router-dom';
import Header from '../Header'; // Importando o Header
import ListaOcorrenciasUsuario from './ListaOcorrenciasUsuario'; // Importando a ListaOcorrenciasPrestador

export default function HomeUsuario() {
  return (
    <div>
      <Header /> {/* Incluindo o Header */}
      
      {/* Aqui você pode adicionar mais conteúdo para a página Home Prestador */}
      <main className="p-8">
        
        {/* Incluindo a lista de ocorrências */}
        <ListaOcorrenciasUsuario />

        {/* Botão para registrar nova ocorrência */}
        <div className="flex justify-center mt-6">
            <Link to={"/usuario/ocorrencia"}>
              <button className="bg-azul-unifor text-white px-6 py-3 rounded-lg hover:bg-blue-800">
                Registrar Ocorrência
              </button>
            </Link>
        </div>
      </main>
    
    </div>
  );
}
