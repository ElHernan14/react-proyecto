import {
    BrowserRouter as Router,
    Routes as Switch,
    Route, 
    Link
  } from "react-router-dom";
import Home from "../views/Home";
import FourOrFour from "../views/404";
import Search from "../views/Search";
import PokemonDetail from "../views/PokemonDetail";
import ScrollToTop from "../components/ScrollToTop";

export default function Routes() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path="/" element={<Home />} exact/>
                <Route path="*"element={<FourOrFour />}/>
                <Route path="/search"element={<Search />}/>
                <Route path="/pokemon/:id" element={<PokemonDetail />}/> 
            </Switch>
        </Router>
    )
}