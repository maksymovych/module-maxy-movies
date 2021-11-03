import LogIn from "../components/Pages/logIn/LogIn";
import Error from "../components/Pages/error/Error";
import Movies from "../components/Pages/Movies/Movies";
import Session from "../components/Pages/Session/Session";
import Profile from "../components/Pages/Profile/Profile";

export const routes = [
  { path: "/movie/:id", component: "Movie", isPrivate: true },
  { path: "/movies", component: Movies, isPrivate: true },
  { path: "/favorits", component: "favorits", isPrivate: true },
  { path: "/profile", component: Profile, isPrivate: true },
  { path: "/session", component: Session },
  { path: "/login", component: LogIn },
  { path: "/error", component: Error },
];
