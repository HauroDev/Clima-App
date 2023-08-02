import useCarousel from '../../hooks/useCarousel'
import DailyWeather from './DailyWeather'

const WeekWeather = () => {
  const { items, next, previous } = useCarousel({
    elements: [
      <DailyWeather key={1} />,
      <DailyWeather key={2} />,
      <DailyWeather key={3} />,
      <DailyWeather key={4} />,
      <DailyWeather key={5} />,
      <DailyWeather key={6} />,
      <DailyWeather key={7} />,
      <DailyWeather key={8} />
    ]
  })

  return (
    <section className='border-2 flex-1'>
      <h2>Clima de la Semana (8 dias siguientes)</h2>
      <div className=''>
        <button onClick={previous}>Previous</button>
        {items}
        <button onClick={next}>Next</button>
      </div>
    </section>
  )
}

export default WeekWeather
