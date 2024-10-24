import imagem from '../assets/Clean Campus (3) 1.jpg'

const PaginaInicial = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-sky-700">
        <div className="flex flex-col items-center justify-center gap-5 p-8">
            <h1 className='text-white font-medium text-2xl'>Bem vindo ao Clean Campus</h1>
            <div>
                <img className='h-72 rounded-2xl' src={imagem} alt="" />
            </div>
            <div className='bg-white p-6 gap-6 rounded-xl mt-5 flex flex-col items-center justify-center h-auto'>
                <h3 className='font-medium text-lg text-sky-700'>Que tipo de usuario voce é?</h3>
                <button className='p-3 w-full bg-sky-700 rounded-xl text-white hover:bg-sky-800'>Sou prestador</button>
                <button className='p-3 w-full bg-sky-700 rounded-xl text-white hover:bg-sky-800'>Sou professro/aluno</button>
            </div>
        </div>
    </div>
  )
}

export default PaginaInicial