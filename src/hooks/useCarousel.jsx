import { useState } from 'react'

const useCarousel = ({ elements }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const SelectedElement = (index, elements, next = true) => {
    const condition = next ? index < elements.length - 1 : index > 0

    const nextIndex = next
      ? condition
        ? index + 1
        : 0
      : condition
        ? index - 1
        : elements.length - 1

    setSelectedIndex(nextIndex)
  }

  const previous = () => {
    SelectedElement(selectedIndex, elements, false)
  }
  const next = () => {
    SelectedElement(selectedIndex, elements)
  }

  return {
    items: elements[selectedIndex],
    previous,
    next,
    selectedIndex
  }
}

export default useCarousel
