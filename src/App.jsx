import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { PrivateRoutes } from './components/PrivateRoutes'

// Views
import Index from './views/index'
import Login from './views/login'
import Todos from './views/todos'
import Notificaciones from './components/Notificaciones'

function App() {

  return (
    <>
      <Navbar />
      <Notificaciones/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/todos" element={<Todos />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
