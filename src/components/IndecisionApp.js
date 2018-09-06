import React from 'react';
import AddOptions from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';

export default class IndecisionApp extends React.Component{
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