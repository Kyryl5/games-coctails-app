import { NavLink, Outlet } from 'react-router-dom'
import logo from '/games-cocktails-app/public/logo.svg'

export default function Layout() {
  return (
    <>
      <header>
        <NavLink to="/games-cocktails-app/">
          <img src={logo} alt="Cheer App Logo" className={'logo'} />
        </NavLink>

        <nav className={'nav-block'}>
          {/* <NavLink to="/games-cocktails-app/" className={"nav-item"}>
            Home
          </NavLink> */}
          <NavLink to="/games-cocktails-app/cocktails" className={'nav-item'}>
            Cocktails
          </NavLink>
          <NavLink to="/games-cocktails-app/games" className={'nav-item'}>
            Party games
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}
