import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <p>_______↓___________↓____________↓___________</p>
        <NavLink to="/games-cocktails-app/"> Cheer App</NavLink>
        <NavLink to="/games-cocktails-app/cocktails"> Coctails</NavLink>
        <NavLink to="/games-cocktails-app/games"> Party Games</NavLink>

        <p>_______↑___________↑____________↑___________</p>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <p>_______↓___________↓____________↓___________</p>
        <NavLink to="/games-cocktails-app/"> Cheer App</NavLink>
        <NavLink to="/games-cocktails-app/cocktails"> Coctails</NavLink>
        <NavLink to="/games-cocktails-app/games"> Party Games</NavLink>
        <p>Created by ...</p>
        <p>Cheer App ...</p>
        <p>_______↑___________↑____________↑___________</p>
      </footer>
    </>
  )
}
