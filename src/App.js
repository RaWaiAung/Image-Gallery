import React, { useState } from 'react'
import item from './item';
import Menu from './Menu'
const newItem = ['all', ...new Set(item.map((ite) => ite.category))];
const App = () => {
    const [input, setInput] = useState(item);
    const [category] = useState(newItem)

    const onChange = (e) => {
        const category = e.target.value;

        if (category === 'all') {
            setInput(item);
            return;
        };

        const newInput = item.filter((item) => item.category === category);
        console.log(newInput);
        setInput(newInput)
    }
    return (
        <div className='container'>
                <h1>Image Gallery</h1>
                <div className='categories'>
                    {
                        category.map(item =>
                            <button className='btn' key={item.id} value={item} onClick={onChange}>{item}</button>
                        )
                    }
                </div>

            <Menu item={input} />
        </div>
    );
}
export default App;