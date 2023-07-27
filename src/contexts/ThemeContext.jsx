import {
  createContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

const getInitialTheme = (key) => {
  const storagedTheme = localStorage.getItem(key)

  if (storagedTheme) {
    return storagedTheme
  }

  return !!matchMedia && matchMedia('(prefers-color-scheme: dark)').matches
}

const useStorageTheme = (key) => {
  const [theme, setTheme] = useState(getInitialTheme(key))

  useEffect(() => {
    localStorage.setItem(key, theme)
  }, [theme, key])

  return [theme, setTheme]
}

const usePrevious = (value) => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useStorageTheme('theme')
  const oldTheme = usePrevious(theme)

  useLayoutEffect(() => {
    document.documentElement.classList.remove(oldTheme)
    document.documentElement.classList.add(theme)
  }, [theme, oldTheme])

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
