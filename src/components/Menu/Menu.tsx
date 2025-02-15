import "./Menu.css";
import {v4 as uuid} from 'uuid';
import {NavLink} from "react-router-dom";
import "./Menu.css";

export default function Menu(onClick) {
    const MENU = [
        {el: "На главную", to: "/", id: uuid()}, 
        {el: "Обо мне", to: "about", id: uuid()}, 
        {el: "Отзывы", to: "comments", id: uuid()},
        {el: "Блог", to: "blog", id: uuid()}
    ]
    return (
        <ul className= "menu">
            {MENU.map(({el, to, id}) => <NavLink onClick={onClick} key={id} to={to} > {el} </NavLink>)}
        </ul> 
    )
}




