import NavigationBar from './NavigationBar.js';
import CardOptions from './CardOptions.js';
import LoginPage from './LoginPage.js';
import RegisterPage from './RegisterPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <NavigationBar />
        <CardOptions /> */}
        <LoginPage />
        {/* <RegisterPage /> */}
      </header>
    </div>
  );
}

export default App;
