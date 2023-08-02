import { MdSearch } from 'react-icons/md'
import ToggleTheme from './ToggleTheme'

const Header = () => {
  return (
    <header className='flex justify-between pb-2 border-b-2 border-gray-800 dark:border-gray-100'>
      <h1 className=' text-gray-800 text-3xl font-bold italic dark:text-gray-100'>
        ClimaApp
      </h1>
      <div className='flex justify-center items-center bg-inherit border-2 rounded-full text-center border-gray-800 dark:border-gray-100'>
        <input className='ml-2 bg-transparent dark:text-gray-100 text-gray-800' type='text' />
        <button>
          <MdSearch className='fill-gray-800 dark:fill-gray-100 transition-colors duration-300 m-2' />
        </button>
      </div>
      <ToggleTheme />
    </header>
  )
}

export default Header
