import { useState } from 'react'
import './App.css'
import DemoDashboardWithContext from './dashboard-context'
import DemoDashboardNoSignalsNoContext from './dashboard-normal'
import DemoDashboardSignals from './dashboard-signals'
import DemoUseCallback from './useCallback'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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
          normal dashboard
        </Button>
        <Button
          onClick={() => setCurrentTab('signals')}
          variant={currentTab === 'signals' ? 'primary' : 'secondary'}
        >
          signals
        </Button>
        <Button
          onClick={() => setCurrentTab('context')}
          variant={currentTab === 'context' ? 'primary' : 'secondary'}
        >
          context
        </Button>
      </div>
      <div>
        {currentTab === 'usecallback' && <DemoUseCallback />}
        {currentTab === 'normaldashboard' && (
          <DemoDashboardNoSignalsNoContext />
        )}
        {currentTab === 'signals' && <DemoDashboardSignals />}
        {currentTab === 'context' && <DemoDashboardWithContext />}
      </div>
    </>
  )
}

export default App
