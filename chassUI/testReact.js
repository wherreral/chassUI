    class Board extends React.Component{
        
        renderSquare(i){
            return <Square value={i} />;    
        }
        
        render(){
            return(
            <div>
               
                <div className='row'>
                    <div className='col'>
                        <img src={'public/black_pawn.png'} className='pieceImage'/>
                    </div>
                    <div className='col'>2</div>
                    <div className='col'>3</div>
                    <div className='col'>4</div>
                    <div className='col'>5</div>
                    <div className='col'>6</div>
                    <div className='col'>7</div>
                    <div className='col'>8</div>
                </div>
                <div className='row'>
                    <div className='col'>1</div>
                    <div className='col'>2</div>
                    <div className='col'>3</div>
                    <div className='col'>4</div>
                    <div className='col'>5</div>
                    <div className='col'>6</div>
                    <div className='col'>7</div>
                    <div className='col'>8</div>
                </div>
                <div className='row'>
                    <div className='col'>1</div>
                    <div className='col'>2</div>
                    <div className='col'>3</div>
                    <div className='col'>4</div>
                    <div className='col'>5</div>
                    <div className='col'>6</div>
                    <div className='col'>7</div>
                    <div className='col'>8</div>
                </div>
                <div className='row'>
                    <div className='col'>1</div>
                    <div className='col'>2</div>
                    <div className='col'>3</div>
                    <div className='col'>4</div>
                    <div className='col'>5</div>
                    <div className='col'>6</div>
                    <div className='col'>7</div>
                    <div className='col'>8</div>
                </div>
                <div className='row'>
                    <div className='col'>1</div>
                    <div className='col'>2</div>
                    <div className='col'>3</div>
                    <div className='col'>4</div>
                    <div className='col'>5</div>
                    <div className='col'>6</div>
                    <div className='col'>7</div>
                    <div className='col'>8</div>
                </div>
                <div className='row'>
                    <div className='col'>1</div>
                    <div className='col'>2</div>
                    <div className='col'>3</div>
                    <div className='col'>4</div>
                    <div className='col'>5</div>
                    <div className='col'>6</div>
                    <div className='col'>7</div>
                    <div className='col'>8</div>
                </div>
                <div className='row'>
                    <div className='col'>1</div>
                    <div className='col'>2</div>
                    <div className='col'>3</div>
                    <div className='col'>4</div>
                    <div className='col'>5</div>
                    <div className='col'>6</div>
                    <div className='col'>7</div>
                    <div className='col'>8</div>
                </div>
                <div className='row'>
                    <div  id="a1" className='col'>1</div>
                    <div className='col'>2</div>
                    <div className='col'>3</div>
                    <div className='col'>4</div>
                    <div className='col'>5</div>
                    <div className='col'>6</div>
                    <div className='col'>7</div>
                    <div className='col'>8</div>
                </div>
                
                
                
            </div>
            );
        }
    }

    class Square extends React.Component {
      render() {
        return (
          <button className="square">
            {this.props.value}
          </button>
        );
      }
    }

    const element = <Welcome name="Sara" />;
        ReactDOM.render(
          element,
          document.getElementById('root')
        );

    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

    function tick() {
      const element = (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
      );
      ReactDOM.render(
        element,
        document.getElementById('root')
      );
    }
    
    setInterval(tick, 1000);
    
    
    ReactDOM.render(
            <Board />,
            document.getElementById('board')
        );

    ReactDOM.render(
        <h2>Welcome to React!</h2>,
        document.getElementById('container')
    );

    