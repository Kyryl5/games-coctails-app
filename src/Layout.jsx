import { NavLink, Outlet } from "react-router-dom";
import GoToTopButton from "./UiElements/GoToTopButton";
import logo from "/logo.svg";
import { ScrollRestoration } from "react-router-dom";
import { ROUTES } from "./router/router";

export default function Layout() {
	return (
		<>
			<header>
				<NavLink to={ROUTES.mainPage}>
					<img src={logo} alt="Cheer App Logo" className={"logo"} />
				</NavLink>

				<nav className={"nav-block"}>
					<NavLink to={ROUTES.cocktailsListPage} className={"nav-item"}>
						Cocktails
					</NavLink>
					<NavLink to={ROUTES.gamesListPage} className={"nav-item"}>
						Party games
					</NavLink>
				</nav>
			</header>
			<main>
				<ScrollRestoration />
				<Outlet></Outlet>
			</main>
			<GoToTopButton />
			<footer>
				<div className="footer">
					<NavLink to={ROUTES.mainPage}>
						<img src={logo} alt="Cheer App Logo" className={"logo"} />
					</NavLink>

					<nav className={"nav-block"}>
						<NavLink to={ROUTES.cocktailsListPage} className={"nav-item"}>
							Cocktails
						</NavLink>
						<NavLink to={ROUTES.gamesListPage} className={"nav-item"}>
							Party games
						</NavLink>
					</nav>
				</div>
				<div className="footer bottom">
					<article>
						<h5>
							Created by:{" "}
							<span>Dmytro Zhuravlov, Kyryl Savytskyi & Liubomyr Olianych</span>
						</h5>
						<br />
						<h6>Cheer App 2022 © all rights reserved</h6>
					</article>
				</div>
			</footer>
		</>
	);
}
