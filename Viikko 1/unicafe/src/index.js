import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  
  return(
    <div>
      <Statistic text="Hyvä" value ={props.hyva} />
      <Statistic text="Neutraali" value ={props.neutraali} />
      <Statistic text="Huono" value ={props.huono} />
      <Statistic text="Yhteensä" value ={props.huono+props.hyva+props.neutraali} />
      <Statistic text="Keskiarvo" value ={(props.huono*(-1)+props.hyva*(1)+props.neutraali*(0))/(props.huono+props.hyva+props.neutraali)} />
      <Statistic text="Positiivisia" value ={props.hyva/(props.hyva+props.huono+props.neutraali)*100}/>
    </div>
  )
}

const Statistic = ({ text, value }) => (
  <div>{text} {value}</div>
)

const History = (props) => {
  if (props.kaikkiKlikkaukset.length === 0) {
    return (
      <div>
        Ei annettuja arvioita
      </div>
    )
  }


  return (
    <div>
     <Statistics  hyva={props.hyva} neutraali={props.neutraali} huono={props.huono}/>
    </div>
  )
}

const Button = ({ klikinKasittely, teksti }) => (
  <button onClick={klikinKasittely}>
    {teksti}
  </button>
)


const App = () => {
  
  
  // tallenna napit omaan tilaansa
  const [hyva, asetaHyva] = useState(0)
  const [neutraali, asetaNeutraali] = useState(0)
  const [huono, asetaHuono] = useState(0)
  const [kaikkiKlikkaukset, asetaKaikki] = useState([])
  const hyvaKlikkaus = () => {
    asetaKaikki(kaikkiKlikkaukset.concat('L'))
    asetaHyva(hyva + 1)
  }
  const neutraaliKlikkaus = () => {
    asetaKaikki(kaikkiKlikkaukset.concat('L'))
    asetaNeutraali(neutraali + 1)
  }
  const huonoKlikkaus = () => {
    asetaKaikki(kaikkiKlikkaukset.concat('L'))
    asetaHuono(huono + 1)
  }



  return (
    <div>
       
       <h1>Anna palautetta</h1>
       <Button klikinKasittely={hyvaKlikkaus} teksti='Hyvä' />
        <Button klikinKasittely={neutraaliKlikkaus} teksti='Neutraali' />
        <Button klikinKasittely={huonoKlikkaus} teksti='Huono' />
       
      <h1>Statistiikka</h1>
      <History kaikkiKlikkaukset={kaikkiKlikkaukset} hyva={hyva} neutraali={neutraali} huono={huono} />
      
      
      
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)


/*
1.10 valmis

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  
  return(
    <div>
      <Statistic text="Hyvä" value ={props.hyva} />
      <Statistic text="Neutraali" value ={props.neutraali} />
      <Statistic text="Huono" value ={props.huono} />
      <Statistic text="Yhteensä" value ={props.huono+props.hyva+props.neutraali} />
      <Statistic text="Keskiarvo" value ={(props.huono*(-1)+props.hyva*(1)+props.neutraali*(0))/(props.huono+props.hyva+props.neutraali)} />
      <Statistic text="Positiivisia" value ={props.hyva/(props.hyva+props.huono+props.neutraali)*100}/>
    </div>
  )
}

const Statistic = ({ text, value }) => (
  <div>{text} {value}</div>
)

const History = (props) => {
  if (props.kaikkiKlikkaukset.length === 0) {
    return (
      <div>
        Ei annettuja arvioita
      </div>
    )
  }


  return (
    <div>
     <Statistics  hyva={props.hyva} neutraali={props.neutraali} huono={props.huono}/>
    </div>
  )
}

const Button = ({ klikinKasittely, teksti }) => (
  <button onClick={klikinKasittely}>
    {teksti}
  </button>
)


const App = () => {
  
  
  // tallenna napit omaan tilaansa
  const [hyva, asetaHyva] = useState(0)
  const [neutraali, asetaNeutraali] = useState(0)
  const [huono, asetaHuono] = useState(0)
  const [kaikkiKlikkaukset, asetaKaikki] = useState([])
  const hyvaKlikkaus = () => {
    asetaKaikki(kaikkiKlikkaukset.concat('L'))
    asetaHyva(hyva + 1)
  }
  const neutraaliKlikkaus = () => {
    asetaKaikki(kaikkiKlikkaukset.concat('L'))
    asetaNeutraali(neutraali + 1)
  }
  const huonoKlikkaus = () => {
    asetaKaikki(kaikkiKlikkaukset.concat('L'))
    asetaHuono(huono + 1)
  }



  return (
    <div>
       
       <h1>Anna palautetta</h1>
       <Button klikinKasittely={hyvaKlikkaus} teksti='Hyvä' />
        <Button klikinKasittely={neutraaliKlikkaus} teksti='Neutraali' />
        <Button klikinKasittely={huonoKlikkaus} teksti='Huono' />
       
      <h1>Statistiikka</h1>
      <History kaikkiKlikkaukset={kaikkiKlikkaukset} hyva={hyva} neutraali={neutraali} huono={huono} />
      
      
      
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

-----------------------------

1.10 ennen statisticin muuttamista

import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Statistics = (props) => {
  return (
    <div>
    
      <div> Hyvä {props.hyva}</div>
      <div> Neutraali {props.neutraali}</div>
      <div> Huono {props.huono}</div>
      <div>Yhteensä {props.huono+props.hyva+props.neutraali}</div>
      <div>Keskiarvo {(props.huono*(-1)+props.hyva*(1)+props.neutraali*(0))/(props.huono+props.hyva+props.neutraali)}</div>
      <div>Positiivisia {props.hyva/(props.hyva+props.huono+props.neutraali)*100} %</div>
      
    </div>
  )
}
const History = (props) => {
  if (props.kaikkiKlikkaukset.length === 0) {
    return (
      <div>
        Ei annettuja arvioita
      </div>
    )
  }


  return (
    <div>
     <Statistics  hyva={props.hyva} neutraali={props.neutraali} huono={props.huono}/>
    </div>
  )
}

const Button = ({ klikinKasittely, teksti }) => (
  <button onClick={klikinKasittely}>
    {teksti}
  </button>
)


const App = () => {
  
  
  // tallenna napit omaan tilaansa
  const [hyva, asetaHyva] = useState(0)
  const [neutraali, asetaNeutraali] = useState(0)
  const [huono, asetaHuono] = useState(0)
  const [kaikkiKlikkaukset, asetaKaikki] = useState([])
  const hyvaKlikkaus = () => {
    asetaKaikki(kaikkiKlikkaukset.concat('L'))
    asetaHyva(hyva + 1)
  }
  const neutraaliKlikkaus = () => {
    asetaKaikki(kaikkiKlikkaukset.concat('L'))
    asetaNeutraali(neutraali + 1)
  }
  const huonoKlikkaus = () => {
    asetaKaikki(kaikkiKlikkaukset.concat('L'))
    asetaHuono(huono + 1)
  }



  return (
    <div>
       
       <h1>Anna palautetta</h1>
       <Button klikinKasittely={hyvaKlikkaus} teksti='Hyvä' />
        <Button klikinKasittely={neutraaliKlikkaus} teksti='Neutraali' />
        <Button klikinKasittely={huonoKlikkaus} teksti='Huono' />
       
      <h1>Statistiikka</h1>
      <History kaikkiKlikkaukset={kaikkiKlikkaukset} hyva={hyva} neutraali={neutraali} huono={huono} />
      
      
      
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)


muutis
----------------------------------------
 
const Statistics = (props) => {
  return (
    <div>
    
      <div> Hyvä {props.hyva}</div>
      <div> Neutraali {props.neutraali}</div>
      <div> Huono {props.huono}</div>
      <div>Yhteensä {props.huono+props.hyva+props.neutraali}</div>
      <div>Keskiarvo {(props.huono*(-1)+props.hyva*(1)+props.neutraali*(0))/(props.huono+props.hyva+props.neutraali)}</div>
      <div>Positiivisia {props.hyva/(props.hyva+props.huono+props.neutraali)*100} %</div>
      
    </div>
  )
}
const History = (props) => {
  if (props.kaikkiKlikkaukset.length === 0) {
    return (
      <div>
        Ei annettuja arvioita
      </div>
    )
  }


  return (
    <div>
     <Statistics  hyva={props.hyva} neutraali={props.neutraali} huono={props.huono}/>
    </div>
  )
}




const App = () => {
  
  
  // tallenna napit omaan tilaansa
  const [hyva, asetaHyva] = useState(0)
  const [neutraali, asetaNeutraali] = useState(0)
  const [huono, asetaHuono] = useState(0)
  const [kaikkiKlikkaukset, asetaKaikki] = useState([])
  const hyvaKlikkaus = () => {
    asetaKaikki(kaikkiKlikkaukset.concat('L'))
    asetaHyva(hyva + 1)
  }
  const neutraaliKlikkaus = () => {
    asetaKaikki(kaikkiKlikkaukset.concat('L'))
    asetaNeutraali(neutraali + 1)
  }
  const huonoKlikkaus = () => {
    asetaKaikki(kaikkiKlikkaukset.concat('L'))
    asetaHuono(huono + 1)
  }



  return (
    <div>
       
       <h1>Anna palautetta</h1>
       <button onClick={hyvaKlikkaus}>Hyvä</button>
       <button onClick={neutraaliKlikkaus}>Neutraali</button>
       <button onClick={huonoKlikkaus}>Huono</button>
      <h1>Statistiikka</h1>
      <History kaikkiKlikkaukset={kaikkiKlikkaukset} hyva={hyva} neutraali={neutraali} huono={huono} />
      
      
      
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)

<div>Hyvä {hyva}</div>
      <div>Neutraali {neutraali}</div>
      <div>Huono {huono}</div>
      <div>Yhteensä {huono+hyva+neutraali}</div>
      <div>Keskiarvo {(huono*(-1)+hyva*(1)+neutraali*(0))/(huono+hyva+neutraali)}</div>
      <div>Positiivisia {hyva/(hyva+huono+neutraali)*100} %</div>
Tässä koodissa toimii statistiikan näyttäminen. Eli kohta 1.7 on valmis
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  
  // tallenna napit omaan tilaansa
  const [hyva, asetaHyva] = useState(0)
  const [neutraali, asetaNeutraali] = useState(0)
  const [huono, asetaHuono] = useState(0)
  


  return (
    <div>
       
       <h1>Anna palautetta</h1>
       <button onClick={() => asetaHyva(hyva + 1)}>
        Hyvä
      </button>
      <button onClick={() => asetaNeutraali(neutraali + 1)}>
        Neutraali
      </button>
      <button onClick={() => asetaHuono(huono + 1)}>
        Huono
      </button>
      <h1>Statistiikka</h1>
      <div>Hyvä {hyva}</div>
      <div>Neutraali {neutraali}</div>
      <div>Huono {huono}</div>
      <div>Yhteensä {huono+hyva+neutraali}</div>
      <div>Keskiarvo {(huono*(-1)+hyva*(1)+neutraali*(0))/(huono+hyva+neutraali)}</div>
      <div>Positiivisia {hyva/(hyva+huono+neutraali)*100} %</div>
      
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)



Tässä koodissa toimii napin painallukset. Unicafen ensimmäinen osa
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  
  
  // tallenna napit omaan tilaansa
  const [hyva, asetaHyva] = useState(0)
  const [neutraali, asetaNeutraali] = useState(0)
  const [huono, asetaHuono] = useState(0)
  


  return (
    <div>
       
       <h1>Anna palautetta</h1>
       <button onClick={() => asetaHyva(hyva + 1)}>
        Hyvä
      </button>
      <button onClick={() => asetaNeutraali(neutraali + 1)}>
        Neutraali
      </button>
      <button onClick={() => asetaHuono(huono + 1)}>
        Huono
      </button>
      <h1>Statistiikka</h1>
      <div>Hyvä {hyva}</div>
      <div>Neutraali {neutraali}</div>
      <div>Huono {huono}</div>
      
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)*/