import { useState, useEffect } from 'react'

import { useLoaderData, useLocation, useNavigate, Link } from 'react-router-dom'

export default function CocktailsList() {
  const [cocktailName, setCocktailName] = useState('')
  const [error, setError] = useState(false)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const coctails = useLoaderData()
  console.log('coctails >', coctails)

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
      <h1>COCKTAILS</h1>
      <button>Clear</button>
      <div className="cocktails_search">
        <form
          onSubmit={(e) => {
            // searchByName(e)
          }}
          action=""
        >
          <input
            onChange={(e) => {
              console.log('e.target.value >>> ', e.target.value)
              setCocktailName(e.target.value)
              setSearch(e.target.value)
            }}
            type="text"
            name=""
            value={cocktailName}
            id=""
          />
          <button
            onClick={(e) => {
              // searchByName(e)
            }}
          >
            Search
          </button>
        </form>
      </div>
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
        >
          Random Cocktails
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
        >
          Non-Alcoholic
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
                alt=""
              />
            </div>
            <Link
              to={`/games-cocktails-app/cocktail/${el.idDrink}`}
              className="cocktail_name"
            >
              {el.strDrink}
            </Link>
            <div className="cocktail_alcoholic">{el.strAlcoholic}</div>
            <div className="cocktail_category">{el.strCategory}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
