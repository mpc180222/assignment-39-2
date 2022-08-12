const App = () =>
(
    <div>
        <Tweet username = "jloomis" name = "jeff loomis" message = "My first tweet" date = "Aug 12 2022" />
        <Tweet username = "kmerrow" name = "keith merrow" message = "My favorite tweet" date = "Aug 11 2022" />
        <Tweet username = "scabral" name = "stephanie cabral" message = "My least fav tweet" date = "Aug 10 2022" />

    </div>



)

ReactDOM.render(<App/>, document.getElementById("root"))