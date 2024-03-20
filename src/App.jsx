import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './modules/Home/Home'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './Theme'
import { Route, Routes } from 'react-router-dom'
import routes from './Routes'
import Inicio from './modules/Home/Inicio'
import Salas from './modules/Salas/Salas'
import Creditos from './modules/Home/Creditos'
import SalaRoute from './modules/Home/SalaRoute'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route
              path=""
              element={<Inicio />}
            />
            <Route path="salas" element={<SalaRoute />} />
            <Route path="creditos" element={<Creditos />} />
          </Route>
        </Routes>

      </ThemeProvider>
    </>
  )
}

export default App
