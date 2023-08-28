import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Stories from "./components/Stories";
import './styles/progressBar.css'

const App = () => {
  return (
    <div>
      <Search/>
      <Pagination/>
      <Stories/>
    </div>
  )
}

export default App