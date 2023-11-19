import { memo } from 'react'

function Sample({ onClick }) {
  console.log('Sample rendered.')

  return (
    <div style={{ margin: '1rem' }} onClick={() => onClick(Math.random())}>
      Click me
    </div>
  )
}

export default memo(Sample)
