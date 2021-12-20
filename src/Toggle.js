import React from 'react'

class Toggle extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        //콜백에서 'this'가 작동하려면 아래와 같이 바인딩 해주어야 함
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    //두번째 방법은 'this'가 handleClick 내에서 바인딩되도록 함.
   /* handleClick = () => {
        console.log('this is:')
    }
*/

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }

}

export default Toggle
