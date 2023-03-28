import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

class Transitioncomp extends Component {
    state={
        show:true
    }

    showDiv=()=>{
        this.setState({
            show:!this.state.show
        })
    }
    render() {
        return (

            <div>


                <Transition 
                in={this.state.show} 
                timeout={{
                    enter:2000,
                    exit:50
                }}


             /*    enter={false}
                exit={false} */


                onEnter={()=>{
                    console.log('Enter')
                }}
                onExit={(node)=>{
                    console.log(node)

                }}
                >
                    {state=>
                     <div  className={`square square-${state}`}> 
                            {`square square-${state}`}

                    </div> }

                </Transition>
            <button onClick={this.showDiv}>Toggle It</button>

            </div>
        );
    }
}

export default Transitioncomp;
