function InputTest() {
    function handleChange(event) {
        console.log("입력된 값 : ", event.target.value)
    }

    return(
        <input type="text" onChange={handleChange} placeholder="임의의 문자열을 입력해 주세요."/>
    );
}

export default InputTest;