import React from 'react'

// import './sidebar.css'

import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className = 'sidebar'>
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <div>
                            {item.display_name}
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar
