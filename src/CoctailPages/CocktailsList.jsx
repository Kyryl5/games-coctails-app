import { useState, useEffect } from 'react'
import {
  useLoaderData,
  useSearchParams,
  useLocation,
  useNavigate,
  Link,
} from 'react-router-dom'
import { ROUTES } from '../router/router'

export default function CocktailsList() {
  const [error, setError] = useState(false)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const coctails = useLoaderData()
  console.log('coctails >', coctails)
  console.log('location >', location)
  const [searchParams, setSearchParams] = useSearchParams()
  console.log('searchParams search >', searchParams.get('search'))
  console.log('searchParams  filter>', searchParams.get('filter'))
  useEffect(() => {
    if (searchParams.get('search')) {
      setSearch(searchParams.get('search'))
    }
    if (searchParams.get('filter')) {
      setFilter(searchParams.get('filter'))
    }
  }, [])

  useEffect(() => {
    if (search) {
      if (filter) {
        navigate(`${location.pathname}?search=${search}&filter=${filter}`)
      } else {
        navigate(`${location.pathname}?search=${search}`)
      }
    } else {
      if (filter) {
        navigate(`${location.pathname}?&filter=${filter}`)
      } else {
        navigate(`${location.pathname}`)
      }
    }
  }, [search])

  return (
    <div className="cocktails">
      <h1>Find your favorite coctail</h1>
      <div className="cocktails_search">
        <label htmlFor="search">
          {' '}
          Find one of more than 100 coctails by name
        </label>
        <input
          onChange={(e) => {
            setSearch(e.target.value)
          }}
          value={search}
          id="search"
          autocomplete="off"
        />
      </div>
      <Link to={ROUTES.randomCocktailPage}>Give me a random one →</Link>

      <div className="navigation">
        <button
          onClick={() => {
            if (search) {
              navigate(`${location.pathname}?search=${search}`)
            } else {
              navigate(`${location.pathname}`)
            }
            setFilter('')
          }}
          style={{ border: filter === '' && '1px solid red' }}
        >
          All Cocktails
        </button>
        <button
          onClick={() => {
            setFilter('alcoholic')
            if (search) {
              navigate(`${location.pathname}?search=${search}&filter=alcoholic`)
            } else {
              navigate(`${location.pathname}?filter=alcoholic`)
            }
          }}
          style={{ border: filter === 'alcoholic' && '1px solid red' }}
        >
          Alcoholic
        </button>
        <button
          onClick={() => {
            setFilter('non-alcoholic')
            if (search) {
              navigate(
                `${location.pathname}?search=${search}&filter=non-alcoholic`
              )
            } else {
              navigate(`${location.pathname}?filter=non-alcoholic`)
            }
          }}
          style={{ border: filter === 'non-alcoholic' && '1px solid red' }}
        >
          Non Alcoholic
        </button>
      </div>
      <div className="cocktail_list">
        {error ? <div>Something went wrong</div> : null}
        {coctails?.map((el) => (
          <div className="cocktail" key={el.idDrink}>
            <div className="cocktail_image">
              <img
                style={{ width: '200px', height: '200px' }}
                src={el.strDrinkThumb}
                alt={el.strDrink}
              />
            </div>
            <p>{el.strDrink}</p>
            <Link
              to={`/games-cocktails-app/cocktail/${el.idDrink}`}
              className="cocktail_name"
            >
              Coctail Details →{' '}
            </Link>
          </div>
        ))}
        {coctails.length === 0 && (
          <p>
            No such cocktail found... <br /> In the future you can add your own
            cocktail
          </p>
        )}
      </div>
    </div>
  )
}
