import './styles.css'
import Image from './react.svg'
import Counter from './Counter'

export const App = () => {
  return (
    <div>
      {' '}
      <h1>React TypeScript-{process.env.name}</h1>
      <img src={Image} alt="impImage" height="300" width="300" />
      <Counter />
    </div>
  )
}
