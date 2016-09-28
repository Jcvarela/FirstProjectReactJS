/**
 * Created by jordih on 9/26/2016.
 */


var StepOne=React.createClass({

    render: function () {
        return (
            <div> hello </div>
        )
    }

});



/*var Multistep = require(['node_modules/react-multistep/src/index.js']).Multistep;*/
const steps = [
    {name: 'StepOne', component: <StepOne/>}
];

var mult = React.createClass({
   render:function () {
       return
        <Multistep initialStep={1} steps={steps}/>
   }

});



ReactDOM.render(<mult/>,document.getElementById("root3"));