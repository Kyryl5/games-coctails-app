import BrandButton from './UiElements/brandButton'
import { ROUTES } from './router/router'

export default function MainPage() {
  return (
    <div className="app-info">
      <section className="hero-screen">
        <div className="hero-content">
          <h1>Best cocktails and board games for your party</h1>
          <BrandButton
            buttontext={'find the perfect cocktail'}
            buttonlink={ROUTES.cocktailsListPage}
          />
        </div>
      </section>
    </div>
  )
}
