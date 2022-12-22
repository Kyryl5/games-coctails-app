import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <p>
          _______↓___________↓____________↓___________ <br />
          This is header with links to games & coctails{' '}
        </p>
        <NavLink to="/games-cocktails-app/"> →Home</NavLink>
        <NavLink to="/games-cocktails-app/games"> →to Games List</NavLink>
        <NavLink to="/games-cocktails-app/cocktails">
          {' '}
          →to Coctails List
        </NavLink>
        <p>_______↑___________↑____________↑___________</p>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}
