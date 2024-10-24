// components/ListaOcorrenciasPrestador.jsx
import OcorrenciaItemPrestador from './OcorrenciaItemPrestador';

export default function ListaOcorrenciasPrestador() {
  const ocorrencias = [
    {
      bloco: 'D',
      sala: 34,
      descricao: 'Higienizar mesa e cadeiras',
      status: 'verde',
    },
    {
      bloco: 'D',
      sala: 34,
      descricao: 'Formatar PC Z3',
      status: 'laranja',
    },
    {
      bloco: 'D',
      sala: 34,
      descricao: 'Limpar vômito na mesa do professor',
      status: 'vermelho',
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-center text-azul-unifor text-2xl font-semibold">
        Ocorrências disponíveis
      </h2>
      <div className="mt-4">
        {ocorrencias.map((ocorrencia, index) => (
          <OcorrenciaItemPrestador key={index} ocorrencia={ocorrencia} />
        ))}
      </div>
    </div>
  );
}
