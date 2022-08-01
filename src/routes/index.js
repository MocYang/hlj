/**
 * @Author: yangqixin
 * @TIME: 7/11/21 10:38 PM
 * @FILE: index.jsx
 * @Email: 958292256@qq.com
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Index from '../pages/home'

function Index() {
  return (
    <Router>
      <Routes>
        <Route exact path={'/'} element={<Index />} />
      </Routes>
    </Router>
  )
}

export default Index
