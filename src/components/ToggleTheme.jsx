import { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const themeIcon =
  'w-10 h-10 rounded-full border-2 border-gray-800 fill-gray-800 dark:fill-gray-100 dark:border-gray-100 transition-all duration-500'

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [isEnable, setIsEnable] = useState(() =>
    theme === 'light' ? false : true
  )

  const handleChange = () => {
    setIsEnable(!isEnable)
    toggleTheme()
  }

  return (
    <div className='flex gap-x-1 '>
      <MdLightMode className={themeIcon} />
      <div
        onClick={handleChange}
        className='w-20 h-10 bg-gray-100 cursor-pointer relative rounded-full border-gray-800 border-2 dark:border-gray-100 dark:bg-gray-800 transition-all duration-500'
      >
        <input
          type='checkbox'
          className='sr-only peer'
          checked={isEnable}
          readOnly
        />
        <span className='w-2/5 h-4/5 bg-gray-800 absolute rounded-full left-1 top-1 peer-checked:bg-gray-100 peer-checked:left-11 transition-all duration-500'></span>
      </div>
      <MdDarkMode className={themeIcon} />
    </div>
  )
}

export default ToggleTheme
