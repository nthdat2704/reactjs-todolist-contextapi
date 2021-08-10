import Header from './components/Header'
import Todos from './components/Todos'
import ThemeToggle from './components/ThemeToggle'
import TodoContextProvider from './components/contexts/TodoContext'
import ThemeContextProvider from './components/contexts/ThemeContext'
import AuthContextProvider from './components/contexts/AuthContext'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Header />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>

    </div>
  );
}

export default App;
