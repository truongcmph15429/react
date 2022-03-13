const Show = (pops) => {
    return <ul>
    {pops.age.map(item => 
         <li>{item.name}</li>
    )}
    </ul>}


export default Show;

