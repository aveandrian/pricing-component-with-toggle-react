import { useState } from 'react'
import './App.css'
import pricing from './pricing.json'

function App() {
  const [isAnnual, setIsAnnual] = useState(false)

  function toggleSwitch(){
    setIsAnnual(prev => !prev)
  }
  return (
    <main>
      <h1 className='title'>Our Pricing</h1>
      <div className='switch-container'>
        <p>Anually</p>
        <div className='switch' onClick={toggleSwitch}>
          <div className={`switch-circle ${isAnnual ? "annual" : ""}`}></div>
        </div>
        <p>Monthly</p>
      </div>
      <div className='pricing-wrapper'>
        <div className="pricing-container left">
            <p className="pricing-name">{pricing.basic.name}</p>
            <h1 className="pricing-price">${isAnnual ? pricing.basic.anually :pricing.basic.monthly}</h1>
            <div className="pricing-types">
                <div className="divider"></div>
                <p className="pricing-storage">{pricing.basic.storage} Storage</p>
                <div className="divider"></div>
                <p className="pricing-users">{pricing.basic.users} Users Allowed</p>
                <div className="divider"></div>
                <p className="pricing-send">Send up to {pricing.basic.send}</p>
                <div className="divider"></div>
            </div>
            <button className="pricing-btn">Learn More</button>
        </div>
        <div className="pricing-container center">
            <p className="pricing-name">{pricing.pro.name}</p>
            <h1 className="pricing-price">${isAnnual ? pricing.pro.anually : pricing.pro.monthly}</h1>
            <div className="pricing-types">
                <div className="divider"></div>
                <p className="pricing-storage">{pricing.pro.storage} Storage</p>
                <div className="divider"></div>
                <p className="pricing-users">{pricing.pro.users} Users Allowed</p>
                <div className="divider"></div>
                <p className="pricing-send">Send up to {pricing.pro.send}</p>
                <div className="divider"></div>
            </div>
            <button className="pricing-btn">Learn More</button>
        </div>
        <div className="pricing-container right">
            <p className="pricing-name">{pricing.master.name}</p>
            <h1 className="pricing-price">${isAnnual ? pricing.master.anually :pricing.master.monthly}</h1>
            <div className="pricing-types">
                <div className="divider"></div>
                <p className="pricing-storage">{pricing.master.storage} Storage</p>
                <div className="divider"></div>
                <p className="pricing-users">{pricing.master.users} Users Allowed</p>
                <div className="divider"></div>
                <p className="pricing-send">Send up to {pricing.master.send}</p>
                <div className="divider"></div>
            </div>
            <button className="pricing-btn">Learn More</button>
        </div>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/aveandrian">aveandrian</a>.
      </div>
    </main>
  )
}

export default App
