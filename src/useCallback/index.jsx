import { useCallback, useState } from 'react'
import Sample from './sample'

function DemoUseCallback() {
  const [count, setCount] = useState(0)

  const sampleClickHandler = useCallback((x) => {
    setCount(x)
  }, [])

  return (
    <div>
      <h3>Demo useCallback and memo</h3>
      <Sample onClick={sampleClickHandler} />
      <div>
        <button onClick={() => setCount((c) => c + 1)}>Add</button>
      </div>
      <div style={{ margin: '1rem', fontWeight: 'bold' }}>{count}</div>
    </div>
  )
}

export default DemoUseCallback
