import Login from "./compoments/Login"
import UserContextProvider from "./context/UserContextProvider"
import Profile from "./compoments/Profile"

const App = () => {
 


  return (
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
