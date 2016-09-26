

var CommentBox = React.createClass({

  render: function() {
     return (
        <div> hello </div>

         // React.createElement('div', {className: "commentBox"},
        // "Hello, world! I am a CommentBox." + this.state.info
        // )
    )
  }
});
ReactDOM.render(<CommentBox/>,document.getElementById("root"));

var infoBox = React.createClass({
  info: "something something ...",

  render: function(){
    return (
          React.createElement("div",null, "test")
    )
  }
 });

ReactDOM.render(React.createElement(infoBox,null),document.getElementById('root2'));


var MyButton = React.createClass({
  localHandleClick : function(){

  },
  render: function(){
    return(<button onClick={this.localHandleClick}> +{this.props.inc} </button>)
  }
});

var Result = React.createClass({
  render : function(){
    return (
        <div>{this.props.five}</div>
    )
  }
});

var Hello= React.createClass({

  render:function () {
    return <div> {this.props.localCounter }</div>;
  }
});



var Main = React.createClass({
  getInitialState: function () {
    return {counter:0};
  },
  handleClick:function(increment){
    this.setState( {counter:this.state.counter + 1   });
  },
  render: function(){
    return (
        <div>
          <MyButton inc={1}/>
          <MyButton inc={2}/>
          <MyButton inc={10}/>
          <MyButton inc={100}/>
          <Result localCounter={this.state.counter}/>

        </div>
    )
  }
});

ReactDOM.render(<Main/>,document.getElementById("root3"));