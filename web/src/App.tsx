import { YMaps, Map } from 'react-yandex-maps';

const App = () => (
  <YMaps>
    <div>
      <Map defaultState={{ center: [55.75, 37.62], zoom: 10 }}
        width="99vw"
        height="66vh" />
    </div>
  </YMaps>
);

export default App;
