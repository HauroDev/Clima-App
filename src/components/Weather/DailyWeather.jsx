const DailyWeather = () => {
  /* Completar:
    - revisar que devuelve la API Para completar esto
  */
  return (
    <article className='flex flex-col gap-2 items-center border-2'>
      <p>(Dia - Fecha)</p>
      <div className='flex w-20 h-20 bg-rose-500'>
        <span className='text-center m-auto'>Icono</span>
      </div>
      <p>(Temp Max/min)</p>
      <p>(Precipitaciones)</p>
      <p>(Viento)</p>
    </article>
  )
}

export default DailyWeather
