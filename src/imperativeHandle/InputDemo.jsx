import { forwardRef, useImperativeHandle, useRef } from 'react'
import { Form } from 'react-bootstrap'

function InputDemo(props, ref) {
  const inputRef = useRef()

  const reset = () => {
    inputRef.current.value = ''
  }

  useImperativeHandle(ref, () => ({ reset }))

  return (
    <div>
      <Form.Control placeholder="enter something" ref={inputRef} />
    </div>
  )
}

export default forwardRef(InputDemo)
