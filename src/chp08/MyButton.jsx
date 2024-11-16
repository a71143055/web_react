import React from "react";

class MyButton extends React.Component{
    constructor(props) {
        super(props);

        this.state={isToggleOn:true}
    }

    handleClick() {
        this.setState(prevState =>({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return(
            <button onClick={() => this.handleClick()}>
                My Button {this.state.isToggleOn ? "켜짐" : "꺼짐"}
            </button>
        );
    }
}

export default MyButton;