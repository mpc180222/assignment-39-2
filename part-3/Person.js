

const Person = (props) => {
   
    let h3Text;
    if(props.age > 18) h3Text = 'please go vote!';
    else h3Text = 'you must be 18';


    return(
        <div>
            <p>Learn some info about this person</p>
            <h3>{h3Text}</h3>
            <p>{props.name.length > 6 ? props.name.slice(0,6) : props.name }</p>
            <ul>
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
            
        </div>
       
    )

}