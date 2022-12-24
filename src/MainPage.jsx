import { Link } from 'react-router-dom'
import { ROUTES } from './router/router'

export default function MainPage() {
  return (
    <div className="app-info">
      <h1>Best coctails and board games for your party</h1>
      <Link to={ROUTES.cocktailsListPage}>Fing the perfect coctail → </Link>
      <br />
      <Link to={ROUTES.gamesListPage}>Fing the game → </Link>
    </div>
  )
}
