import { Routes, Route } from 'react-router-dom'
import { App, Result } from "antd"
import { PrivateRoute } from "./routes/PrivateRoute"
import GamePage from './pages/Game'
import UserPage from './pages/User'
import FreespinPage from './pages/Freespin'
import PopulatePage from './pages/Populate'
import GameStartPage from './pages/GameStart'

export default () => {
  return (
    <App style={{ height: '100%' }}  notification={{ placement: 'topRight' }}>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/games' element={<GamePage />} />
          <Route path='/users' element={<UserPage />} />
          <Route path='/freespins' element={<FreespinPage />} />
          <Route path='/gameStart' element={<GameStartPage />} />
          <Route path='/populateBalance' element={<PopulatePage />} />
          <Route path='*' element={<Result
            status="404"
            title="404"
          />} />
        </Route>
      </Routes>
    </App>
  )
}

