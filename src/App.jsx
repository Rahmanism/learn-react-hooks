import { useState } from 'react'
import './App.css'
import DemoDashboardWithContext from './dashboard-context'
import DemoDashboardNoSignalsNoContext from './dashboard-normal'
import DemoDashboardSignals from './dashboard-signals'
import DemoUseCallback from './useCallback'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import DemoImperativeHandle from './imperativeHandle'

function App() {
  const [currentTab, setCurrentTab] = useState('usecallback')

  return (
    <>
      <div
        style={{
          borderBottom: '1px solid silver',
          marginBottom: '.5rem',
          paddingBottom: '.5rem',
        }}
      >
        <Button
          onClick={() => setCurrentTab('usecallback')}
          variant={currentTab === 'usecallback' ? 'primary' : 'secondary'}
        >
          useCallback
        </Button>
        <Button
          onClick={() => setCurrentTab('normaldashboard')}
          variant={currentTab === 'normaldashboard' ? 'primary' : 'secondary'}
        >
          Normal Dashboard
        </Button>
        <Button
          onClick={() => setCurrentTab('signals')}
          variant={currentTab === 'signals' ? 'primary' : 'secondary'}
        >
          Signals
        </Button>
        <Button
          onClick={() => setCurrentTab('context')}
          variant={currentTab === 'context' ? 'primary' : 'secondary'}
        >
          Context
        </Button>
        <Button
          onClick={() => setCurrentTab('imperative')}
          variant={currentTab === 'imperative' ? 'primary' : 'secondary'}
        >
          Imperative Handle
        </Button>
      </div>
      <div>
        {currentTab === 'usecallback' && <DemoUseCallback />}
        {currentTab === 'normaldashboard' && (
          <DemoDashboardNoSignalsNoContext />
        )}
        {currentTab === 'signals' && <DemoDashboardSignals />}
        {currentTab === 'context' && <DemoDashboardWithContext />}
        {currentTab === 'imperative' && <DemoImperativeHandle />}
      </div>
    </>
  )
}

export default App
