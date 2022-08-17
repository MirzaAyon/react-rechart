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

/* 
===== Quiz======
1.How will you declare a button with primary color using React Bootstrap?
ans: You have selected "<Button className=”btn btn-primary”> Click Me </Button>" but correct answer is "<Button variant="primary"> Click Me</Button>".

3.Which bootstrap class will you use to make images responsive?
ans:img fluid

4.Why do we use fragments in react? (google it)
ans: You have selected "Allows you to return one element We always use fragment" but correct answer is "It lets you group a list of children without adding extra nodes to the DOM.".

7
import  ___?___  from “react-bootstrap”
ans: You have selected "{row}" but correct answer is "{Row}".

9.Which react-bootstrap component you will use for width: 100% across all viewport and device sizes. (check the documents)
ans : <Container fluid/>

13
Where we should add @tailwind base; @tailwind components; @tailwind utilities; when initializing a project with tailwind.
ans:You have selected "Inside app.css" but correct answer is "Inside index.css".

14.How we can use the shorthand version for Cards with body only, and no other children ?
ans:You have selected "<Card.body></Card>" but correct answer is "<Card body></Card>".

15
How we can create a fade in animation using react spring ?
ans:You have selected "useSpring({ to: opacity = 1 , from: opacity = 0 })" but correct answer is "useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })".
*/
