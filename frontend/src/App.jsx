import React from 'react'
import './App.css'
import { HomePage } from './HomePage.jsx'
import { AboutPage } from './AboutPage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import {Team} from './Team.jsx'
import { Contact } from './Contact.jsx'
import { ServiceDetail } from './ServiceDetail.jsx'
import { Insights } from './Insights.jsx'
import { InsightDetail } from './InsightDetail.jsx'
import { NotFound } from './NotFound.jsx'
import { Services } from './Services.jsx'


function App() {

  return (
    <>
     <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/team' element={<Team/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/insights" element={<Insights/>}/>
          <Route path="/insights/:slug" element={<InsightDetail/>}/>
          {/* Dynamic service detail routes - must be after specific routes */}
          <Route path="/accounting" element={<ServiceDetail/>}/>
          <Route path="/tax" element={<ServiceDetail/>}/>
          <Route path="/it" element={<ServiceDetail/>}/>
          <Route path="/digital" element={<ServiceDetail/>}/>
          <Route path="/business-consulting" element={<ServiceDetail/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
     </div>
    </>
  )
}

export default App
