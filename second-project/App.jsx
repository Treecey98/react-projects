import React from "react"
import Introduction from './components/Introduction'
import Information from './components/Information'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="container">
      <Introduction />
      <Information />
      <Footer />
    </div>
  )
}
