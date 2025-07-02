import { Outlet } from 'react-router'
import './index.css'
import Header from './layout/Header'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

