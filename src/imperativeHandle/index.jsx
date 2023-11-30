import { useRef, useState } from 'react'
import Counter from './Counter'
import { Button } from 'react-bootstrap'
import InputDemo from './InputDemo'

function DemoImperativeHandle() {
  const [count, setCount] = useState(0)
  const counterRef = useRef()
  const inputRef = useRef()

  return (
    <>
      <h1>Demo useImperativeHandle</h1>
      <Counter ref={counterRef} />
      <Button onClick={() => counterRef.current?.reset()}>
        Reset from parent
      </Button>
      <hr />
      <InputDemo ref={inputRef} />
      <Button onClick={() => inputRef.current?.reset()}>
        Reset from parent
      </Button>
    </>
  )
}

export default DemoImperativeHandle
