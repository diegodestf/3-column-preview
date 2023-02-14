import { Helmet } from 'react-helmet';
import { Car } from './components/Car';

function App() {
  return (
    <div className="App">
      <Helmet>
        <html lang="en" />
        <title>3 Column Preview</title>
      </Helmet>
      <Car />
    </div>
  );
}

export default App;
