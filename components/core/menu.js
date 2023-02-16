import Link from "next/link";
import { useState } from "react";

function Menu(props) {
    const [activeMenu, setActiveMenu] = useState(props.active ?? '')
    let menuItems = [
        {name: "Teams", icon: "/icons/group.svg", asLink: "/directory/teams", hrefLink: "/directory/teams" },
        {name: "Members", icon: "/icons/person.svg", asLink: "/directory/members", hrefLink: "/directory/members" }
    ]


    return <>
        <div className="menu">
          {menuItems.map(m => <div className={`menu__item ${m.name === activeMenu ? 'menu__item--active': ''}`}>
            <img src={m.icon} className="menu__item__img" />
            <Link  as={m.asLink} href={m.hrefLink} legacyBehavior>
                <a onClick={e => setActiveMenu(m.name)} className="menu__item__link">{m.name}</a>
            </Link>
        </div>)}
        </div>
        <style jsx>
            {
                `
                 .menu {display: flex; opacity: 1;}
                 .menu__item { padding: 8px 12px; display: flex;  opacity: 1; align-items: center;  border-radius: 5px; margin-right: 16px; font-size: 13px;}
                 .menu__item__img {width: 24px; height: 24px; margin-right: 8px;}
                 .menu__item__link {text-decoration: none; color: black; cursor: pointer; opacity: 1;}
                 .menu__item--active {background: #f1f5f9;}
                
                
                `
            }
        </style>
    </>
}

export default Menu;