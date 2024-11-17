import React from "react";

function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>{number}</li>
    );

    return(
        <ul>{listItems}</ul>
    );
};

function AppNumberList() {
    const numbers = [1,2,3,4,5,6,7];
    return(
        <div>
            <h1>숫자 리스트</h1>
            <NumberList numbers={numbers}/>
        </div>
    );
}

export default AppNumberList;