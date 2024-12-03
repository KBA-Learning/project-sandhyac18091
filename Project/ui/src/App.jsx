import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'

import LoginPage from './pages/LoginPage'
import Signup from './pages/Signup'
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/Mainlayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Review from './pages/Review'
import Reccomandation from './pages/Reccomandation'
import Viewreview from './pages/Viewreview'
import Discover from './pages/Discover'
import Destination from './pages/Destination'
import Beaches from './pages/Beaches'
import Explore from './pages/Explore'
import Addplace from './pages/Addplace'


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>

        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />

        <Route element={<AuthLayout />}>
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/review" element={<Review />} />
            <Route path="/reccomandation" element={<Reccomandation />} />
            <Route path="/viewreview" element={<Viewreview />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/beaches" element={<Beaches />} />
            <Route path="/addplace" element={<Addplace />} />
            
            

          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </>
    )
  );
  return (
    <RouterProvider router={router} />
  )
}

export default App