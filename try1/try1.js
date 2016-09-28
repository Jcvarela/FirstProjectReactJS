/**
 * Created by jordih on 9/21/2016.
 */
    // tutorial1-raw.js

    var hello=5;
var Multistep = require('react-multistep').Multistep;
var Button= React.createClass({
    handleClick:function () {
        hello++;
        //this.setState({counter:hello});
        this.setState();
    },
    render:function () {
        return (<button onClick= {this.handleClick}>{hello}</button> );
    }
});
var Result =React.createClass({
    render:function(){
        return(<div>XXX</div>)
    }
});

var Main=React.createClass({
    render:function () {
        return(<div>
           <Button/>
            <Result/>
        </div>)
    }
});



ReactDOM.render(<Main/>,document.getElementById("root"));


const steps = [
    {name: 'StepOne', component: <StepOne/>},
    {name: 'StepTwo', component: <StepTwo/>},
    {name: 'StepThree', component: <StepThree/>},
    {name: 'StepFour', component: <StepFour/>}
];
<Multistep showNavigation={true} steps={steps}/>
