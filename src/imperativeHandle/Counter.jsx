import { forwardRef, useImperativeHandle, useState } from 'react'
import { Button } from 'react-bootstrap'

function Counter(props, ref) {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((c) => c + 1)
  }

  const decrement = () => {
    setCount((c) => c - 1)
  }

  const reset = () => {
    setCount(0)
  }

  useImperativeHandle(ref, () => ({ reset }))

  return (
    <>
      <h3>{count}</h3>
      <Button onClick={decrement} variant="warning">
        Decrement
      </Button>
      <Button onClick={increment} variant="success">
        Increment
      </Button>
    </>
  )
}

export default forwardRef(Counter)
