import { handleGetLocation } from './utils/geolocation'

function App() {
  return (
    <main>
      <div className="welcome">
        <h1>Welcome to BIN</h1>
        <button type="button" onClick={handleGetLocation}>
          Get location
        </button>
      </div>
    </main>
  )
}

export default App
