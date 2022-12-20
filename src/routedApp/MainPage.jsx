import { NavLink, Outlet } from 'react-router-dom'

export default function MainPage() {
  return (
    <>
      <header>
        <p>
          _______↓___________↓____________↓___________ <br />
          This is header with links to games & coctails{' '}
        </p>
        <NavLink to="/games-coctails-app/"> →Home</NavLink>
        <NavLink to="/games-coctails-app/games"> →to Games List</NavLink>
        <NavLink to="/games-coctails-app/coctails"> →to Coctails List</NavLink>
        <p>_______↑___________↑____________↑___________</p>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}
