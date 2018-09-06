// babel src/app.js --out-file=public/scripts/app.js --presets=env,react  --watch | live-server public
// MAIN COMPONENT INDECISION APP .

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleDeleteOne = this.handleDeleteOne.bind(this)
        this.state = {
            options: props.options
        };
    }
    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options)
                this.setState(() => ({options}))    
        } catch (e){
            //do nothing
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const jston = JSON.stringify(this.state.options);
            localStorage.setItem('options', jston);
            console.log("Saving Data")
        }
    }
    componentWillUnmount(){
        console.log("Unmount Component")
    }
    // CHOSE SOME OF THE OPTIONS TO PICK AS A RANDOM CHOICE TO DO !
    handlePick(){
        const randomSelect = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomSelect])
    }

    // METHOD THAT DELETE ALL OPTIONS IN THE ARRAY OPTIONS 
    handleDeleteOptions(){
        this.setState(()=> ({options:[]}));
    }
    //// METHOD SELECT ONE OF OPTIONS IN THE ARRAY TO DELETE
    handleDeleteOne(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option)
        }))
           
        
    }
    // METHOD TO ADD OPTIONS IN THE ARRAY OS OPTIONS WHEN WHE FIRE BUTTON ADD
    handleAddOption(option){
        if(!option){
            return 'Entre com um Valor Valido';
        }  else if(this.state.options.indexOf(option)> -1){
            return 'Este item ja esta na lista !';
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
    

    render(){
        const title = 'Indecision';
        const subtitle = "Let me take wath to do !";
        return (
            <div>
                <Header title={title} subtitle={subtitle}  />
                <Action handlePick={this.state.handlePick}/>
                <Options options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions} handleDeleteOne={this.handleDeleteOne}/>
                <AddOptions  handleAddOption={this.handleAddOption}/>
            </div>    
        );
    }
 
}
// DEFAULT ARRAY STATE.
IndecisionApp.defaultProps = {
    options: []
}


// HEADER COMPONENT
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>    
    );
};


//HEADER DEFAUL COMPONENT CASE NO TITLE IS DEFINED OR ANY OTHER THING
Header.defaultProps = {
    title: 'Indecision'
}

class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

            //this.props.handleAddOption(option);
        this.setState(() => ({error}));
        if(!error){
            e.target.elements.option.value = ''; //if sucessfull send data clean inpit
        }
    }
    render(){

        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                 <form onSubmit={this.handleAddOption} >
                    <input type="text" name="option"></input>
                    <button>Add</button>
                 
                 </form>
            </div>
        );
    }
}


const Options = (props) => {
    return(
        <div>
         
        <button onClick={props.handleDeleteOptions}> Remove All </button>
        {

            //this.props.options.map((valor) => <p key={valor}>{valor}</p>)
            props.options.map((option) => (
                <Option 
                key={option}  
                optionText={option} 
                handleDeleteOne = {props.handleDeleteOne}
                />
            
            
            ))
            
        }
        </div>
            
    );
};

const Option = (props) => {
    return(
        <div>
                {props.optionText}
                <button 
                    onClick={(e) =>{
                        props.handleDeleteOne(props.optionText)
                        
                        }
                    }        
                >
                X    
                </button>
        </div>
    );
}

const Action = (props) => {
    return(
     <div>
        <button onClick={props.handlePick}> Button </button>
     </div>
    );  
};



 ReactDOM.render(<IndecisionApp />, document.getElementById('app'));