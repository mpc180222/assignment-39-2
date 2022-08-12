const App = () => 
(
    <div>
       <Person name = "Matt" age = {32} hobbies = {['guitar','fitness','politics']} />
        <Person name = "Boristhesecond" age = {49} hobbies = {['surfing','eating','not sure']}/>
        <Person name = "Lauramay" age = {17} hobbies = {['dancing','music','movies']}/>
       
    </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))