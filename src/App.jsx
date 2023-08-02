import Header from './components/Header'
import TodayWeather from './components/Weather/TodayWeather'
import WeekWeather from './components/Weather/WeekWeather'

function App () {
  return (
    <div className='flex flex-col gap-y-2 bg-gray-100 min-h-screen dark:bg-gray-800 transition-colors duration-300 p-4 font-mono'>
      <Header />
      <main className='flex flex-col flex-grow text-gray-800 dark:text-gray-100 '>
        <TodayWeather />
        <WeekWeather />
      </main>
    </div>
  )
}

export default App
