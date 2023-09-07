import Counter from './components/Counter.jsx';
import Fetch from './components/Fetch.jsx';
import SelectColor from './components/SelectColor.jsx';

export default function App() {
  return (
    <div>
      <section>
        <h1>Counter</h1>
        <Counter />
      </section>

      <section>
        <h1>Favorite color</h1>
        <SelectColor />
      </section>

      <section>
        <h1>Fetch</h1>
        <Fetch requestURL="https://pokeapi.co/api/v2/pokemon/ditto" />
      </section>
    </div>
  );
}
