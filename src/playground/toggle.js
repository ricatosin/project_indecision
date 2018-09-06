class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.hasChanged = this.hasChanged.bind(this);
        this.state = {
            toggle: false,
            pcode: "Hidden",
            btncode: "Show-me"
        }

    }
    hasChanged(){
    if(!this.state.toggle){
        this.btnVal = "Show Me";
        console.log('Toggle False');
        this.setState((someValue) =>{
            return{
                toggle: someValue.toggle = true,
                pcode: "",
                btncode: "Show Me"
            }
        })
        
    }  
    else if(this.state.toggle){
        console.log('Toggle True');
        this.setState((someValue) =>{
            return{
                toggle: someValue.toggle = false,
                pcode: "Can see me Know",
                btncode: "Hide-me"
            }
        })
    }
    }
    render(){
    return (    
        <div>
            <button onClick={this.hasChanged}>{this.state.btncode}</button>
            <p>{this.state.pcode}</p>
        </div>
         )
    }

}
//const obj1 = new Toggle('oi');

ReactDOM.render(< Toggle />, document.getElementById('app'));


















// const appRoot = document.getElementById('app');


// const toggle = {

//     show: 0,
//     message: "Hello",
//     btnMsg1: 'Show',
//     pMsg:''
  

// }

// const stateToggle = () => {
    
//     const real = toggle.show;
//     if(real== 0){
//         toggle.btnMsg1 = "Hide";
//         toggle.show = 1;
//         toggle.pMsg = <p>'You Can see me !!!!'</p>
//     }
//     if(real== 1){
//         toggle.btnMsg1 = "Show";
//         toggle.show = 0;
//         toggle.pMsg = ''
//     }

// render();
// }


// //template creation

// const render = () => {
//     const template = (
        
//     <div>
//             <h1>Hello</h1>
//             <button onClick={stateToggle}> {toggle.btnMsg1} </button>
//             {toggle.pMsg}
            
//     </div>

//     );
// ReactDOM.render(template, appRoot);
// }

// render();