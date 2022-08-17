import logo from './logo.svg';
import './App.css';
import MyLineChart from './MyLineChart/MyLineChart';
import SpecialChart from './SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
    //react spring theke hello er ta and normal ta bhalo kore dekhbo and coutome korbo
  })
  return (
    <div className="App">
      <animated.div style={props}>I will fade in</animated.div>
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
