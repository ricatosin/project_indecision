// // babel src/playground/counter.js --out-file=public/scripts/app.js --presets=env,react  --watch | live-server public


//Example of Using State in React



class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleMinus = this.handleMinus.bind(this);
        this.handlePLus = this.handlePLus.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount(){
            console.log("Mount")
            const estado = localStorage.getItem('valor');
            const count = parseInt(estado, 10);
            if(!isNaN(count)){
                this.setState(() => ({count}))    // used the same count name of the state propety
            }
    }
    componentDidUpdate(prevProps, prevState){
        if(this.prevState !== this.state.count){
            localStorage.setItem('valor', this.state.count);
        }   
        console.log('Update !');
    }
    handleMinus(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handlePLus(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleReset(){
        this.setState((prevState) => {
            return {
                count: prevState.count = 0
            };
        });
        
    }
    render(){
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlePLus}>+1</button>
                <button onClick={this.handleMinus}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        ); 
    }

}
//Default value for counter

ReactDOM.render(<Counter />,document.getElementById('app'));
























// let count = 0;
// const somate = () => {
//     count++;
//     renderCounterApp();
    
// };

// const minus = () => {
//     count --;
//     renderCounterApp();
    
// };


// const reset = () => {
//     count = 0;
//     renderCounterApp();
    
// };
 
// const appRoot = document.getElementById('app');


// const renderCounterApp = () => {
//     const template2 = (      
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={somate}> + 1</button>
//             <button onClick={minus}> - 1</button>
//             <button onClick={reset}> RESET </button>

//         </div>
//     );
//     ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();





