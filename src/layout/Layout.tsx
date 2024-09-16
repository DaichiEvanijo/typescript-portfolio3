import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

import useLocalStorage from "../hooks/useLocalStorage"
import { useEffect } from "react"

const Layout = () => {

  const [theme, setTheme] = useLocalStorage<string>("theme", "light")

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  },[theme])
  

  return (
    <div>
      <Header theme={theme} setTheme={setTheme}/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout