const newItem = ['all', ...new Set(item.map((ite) => ite.category))];
const App = () => {
    const [input, setInput] = useState(item);
    const [category, setCategory] = useState(newItem)

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
        <div className='App'>
            <div className="selecter">
                <div className="selectedfield"><p>Select social media</p></div>
            </div>
            <form>
                <select onClick={onChange} className='hi'>
                    {
                        category.map((item) =>
                            <option value={item}>{item}</option>
                        )
                    }
                </select>
            </form>
            <Menu item={input} />
        </div>
    );
