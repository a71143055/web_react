function ClickButton() {
    function handleClick() {
        alert("버튼을 클릭하였습니다.");
    }

    return(
        <button onClick={handleClick}>
            클릭해보세요~
        </button>
    )
}

export default ClickButton