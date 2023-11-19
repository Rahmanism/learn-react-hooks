import './App.css'
import DemoDashboardWithContext from './dashboard-context'
import DemoDashboardNoSignalsNoContext from './dashboard-normal'
import DemoDashboardSignals from './dashboard-signals'
import DemoUseCallback from './useCallback'

function App() {
  return (
    <>
      <DemoUseCallback />
      <hr />
      <DemoDashboardNoSignalsNoContext />
      <hr />
      <DemoDashboardSignals />
      <hr />
      <DemoDashboardWithContext />
    </>
  )
}

export default App
