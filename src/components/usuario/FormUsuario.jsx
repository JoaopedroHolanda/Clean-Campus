import imagem from "../../assets/Clean Campus (3) 1.jpg";

export const FormUsuario = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-azul-unifor">
      <div className="flex flex-col items-center justify-center gap-5 p-8">
        <h1 className="text-white font-medium text-2xl">
          Bem vindo ao Clean Campus
        </h1>
        <div>
          <img className="h-60 rounded-2xl" src={imagem} alt="" />
        </div>
        <div className="bg-white px-4 py-2 gap-6 rounded-xl mt-5 flex flex-col items-center justify-center w-full">
          <form className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                Matricula
              </label>
              <input
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                type="number"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="">
                Senha
              </label>
              <input
                className="outline-none border-2 border-azul-unifor rounded-lg p-2"
                type="password"
              />
            </div>
            <button className='p-2 w-full bg-azul-unifor rounded-xl text-white hover:bg-sky-800'>Cadastrar</button>
          </form>
          <p>
            Ja tem uma conta? <a className="text-azul-unifor" href="">Faca login</a>
          </p>
        </div>
      </div>
    </div>
  )
}
