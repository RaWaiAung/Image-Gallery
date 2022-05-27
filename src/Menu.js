import React from 'react'

const Menu = ({ item }) => {
    console.log(item);
    return <div className='image-container'>
        {item.map((item) => {
            const { id, title, photo, category } = item;
            return <article key={id} className='image-list'>
                <img src={photo} alt="" srcset="" />
                <span>{category}</span>
                <p>{title}</p>
            </article>
        })}
    </div>;
}

export default Menu;
