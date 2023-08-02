const TodayWeather = () => {
  return (
    <section className='my-2 p-4'>
      <div className='flex flex-col gap-y-4'>
        <h2 className='text-center text-3xl font-bold underline m-auto'>Clima de Hoy</h2>
        <div className='flex items-center justify-center gap-x-4'>
          <div className='flex w-40 h-40 bg-rose-500'>
            <span className='text-center m-auto'>Icono</span>
          </div>
          <div className='flex flex-col gap-y-2'>
            <p className='text-xl'>(Pais), (Prov/Est/Dep), (Ciudad)</p>
            <p className='text-xl'>(Tipo de Clima)</p>
          </div>
        </div>
        <div className='flex gap-x-10 justify-center'>
          <div className='flex flex-col justify-center'>
            <div className='flex w-20 h-20 bg-rose-500'>
              <span className='text-center m-auto'>Icono</span>
            </div>
            <p>Temperatura:(XX °C/XX °F) </p>
          </div>
          <div>
            <div className='flex w-20 h-20 bg-rose-500'>
              <span className='text-center m-auto'>Icono</span>
            </div>
            <p>Direccion del Viento: </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TodayWeather
