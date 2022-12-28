import { NavLink, Outlet } from "react-router-dom";
import logo from "/logo.svg";
import { ScrollRestoration } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <NavLink to="/games-cocktails-app/">
          <img src={logo} alt="Cheer App Logo" className={"logo"} />
        </NavLink>

        <nav className={"nav-block"}>
          <NavLink to="/games-cocktails-app/cocktails" className={"nav-item"}>
            Cocktails
          </NavLink>
          <NavLink to="/games-cocktails-app/games" className={"nav-item"}>
            Party games
          </NavLink>
        </nav>
      </header>
      <main>
        <ScrollRestoration />
        <Outlet></Outlet>
      </main>
      <footer>
        <div className="footer">
          <NavLink to="/games-cocktails-app/">
            <img src={logo} alt="Cheer App Logo" className={"logo"} />
          </NavLink>

          <nav className={"nav-block"}>
            <NavLink to="/games-cocktails-app/cocktails" className={"nav-item"}>
              Cocktails
            </NavLink>
            <NavLink to="/games-cocktails-app/games" className={"nav-item"}>
              Party games
            </NavLink>
          </nav>
        </div>
        <div className="footer bottom">
          <article>
            <h5>
              Created by:{" "}
              <span>
                Dmytro Zhuravlyov, Kyryl Savytskyi & Liubomyr Olianych
              </span>
            </h5>
            <br />
            <h6>Cheer App 2022 © all rights reserved</h6>
          </article>
        </div>
      </footer>
    </>
  );
}
