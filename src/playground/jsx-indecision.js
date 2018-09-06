const appRoot = document.getElementById('app');
console.log('App.js is running!');

// JSX - JavaScript XML
// CONDITIONAL RENDER

const app = {

    title: "My List",
    subtitle: "Put Your Desire",
    options:[]

};

const user = {   
    name: "COCO",
    year: 1987,
    location: "Curitiba-PR"
};

//Reset Array

const resetVetor = () =>{
    app.options = [];
    console.log('Reset')
    rederApp();
};

//Select Random activity from list

const selectList = () =>{
    const randomSelect = Math.floor(Math.random() * app.options.length);
    alert(app.options[randomSelect])
    console.log(randomSelect);
    console.log('random select');
    rederApp();
};

//  <p>{app.options.length > 0 ? app.options: '0 - Options'}</p>
//e = event object
const formSubmit = (e) => {
    e.preventDefault();
    // console.log('Form Send!');
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        rederApp();
    }

};

const rederApp = () => {
    const template1 = (
        <div>
            <h1>{app.title ? app.title: 'No Title'}</h1>
                {app.subtitle && <p>{app.subtitle}</p> }
            <p>{app.options.length}</p>
            <button disabled={app.options.length < 2} onClick={selectList}>Let Computer, find what you do next ! </button>
            <ol>
                {
                    app.options.map((valores) => <li key={valores}> {valores} </li>)
                   
                }
            
            </ol>
            <form onSubmit={formSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
            <button onClick={resetVetor}>Reset All</button>

        </div>
    );

    ReactDOM.render(template1, appRoot);
}
rederApp();
