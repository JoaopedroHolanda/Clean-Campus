const RegistrarOcorrencia = () => {
  return (
    <div className="flex flex-col">
      <div className="justify-center items-center flex flex-col mt-4 gap-2">
        <form action="">
          <label className="flex flex-col">
            Categoria
            <select
              name="categoria"
              id="categoria"
              className="w-60 h-14 border rounded-md shadow-lg "
            >
                <option value="" disabled selected>Selecione a categoria</option>
              <option value="Limpeza">Limpeza</option>
              <option value="Manutenção de equipamentos">
                Manutenção de equipamentos
              </option>
              <option value="Problemas eletricos">Problemas elétricos</option>
              <option value="Climatização">Climatização</option>
            </select>
          </label>

          <div className="flex justify-between mt-36 ">
            <label className="flex flex-col">
              Bloco
              <input
                type="text"
                className=" w-24 h-10 border rounded-md shadow-lg border-solid border-gray-800"
              />
            </label>
            <label className="flex flex-col jus">
              Sala
              <input
                type="text"
                className="w-24 h-10 border rounded-md shadow-lg border-solid border-gray-800"
              />
            </label>
          </div>

          <div className="flex flex-col justify-center mt-6 gap-4">
            <label className="flex flex-col">
              Descrição
              <input
                type=""
                className="w-60 h-10 border rounded-md shadow-lg border-solid border-gray-800"
              />
            </label>

            <label className="flex flex-col mt-6">
              Severidade
              <select
                name="severidade"
                id="severidade"
                className="w-60 h-14 border rounded-md shadow-lg "
              >
                <option value="" disabled selected>Selecione a severidade</option>
                <option value="Alta">Alta</option>
                <option value="Média">Média</option>
                <option value="Baixa">Baixa</option>
              </select>
            </label>

            <label className="flex flex-col mt-6 mb-10">
              Foto
              <input
                type=""
                className="w-60 h-10 border rounded-md shadow-lg border-solid border-gray-800"
              />
            </label>
          </div>
          <button className="p-2 w-full bg-blue-700 rounded-xl text-white hover:bg-blue-800">Registrar Ocorrência</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrarOcorrencia;
