import { MdSearch } from 'react-icons/md'
import ToggleTheme from './components/ToggleTheme'

function App() {
  return (
    <div className='bg-gray-100 min-h-screen dark:bg-gray-800 transition-colors duration-300'>
      <div className='p-2 m-2'>
        <header className='flex justify-between pb-2 border-b-2 border-gray-800 dark:border-gray-100 transition-all duration-300'>
          <h1 className=' text-gray-800 text-3xl font-bold italic dark:text-gray-100'>
            ClimaApp
          </h1>
          <div className='flex justify-center items-center bg-gray-800 border-2 rounded-full text-center dark:border-gray-100'>
            <input type='text' />
            <button>
              <MdSearch className='fill-gray-800 dark:fill-gray-100 transition-colors duration-300' />
            </button>
          </div>
          <ToggleTheme />
        </header>
        <main className='flex-grow text-gray-800 dark:text-gray-100'>
          <section>hola</section>
        </main>
      </div>
    </div>
  )
}

export default App
