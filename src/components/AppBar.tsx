import { SearchBar } from "./SearchBar"

export const AppBar = () => {
    return <div className="grid grid-cols-3">
        <div><img src="logo.png" className="max-w-xs"></img></div>
        <div><SearchBar></SearchBar></div>
        <div>SignIN</div>
    </div>
}