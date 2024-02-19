export default function Counter() {


    const buttonStyle = {
        fontSize: "16px",
        backgroundColor: "#00a5ab",
        width: "100px",
        margin: "10px",
        color: "white",
        padding: "15px",
        borderRadius: "30px"

    }; // 따로 빼내서 진행

    function incrementCounterFunction(){
        console.log('increment clicked')
    }


    // onClick시에 함수 넣고 싶으면 중괄호 안에 함수이름으로 넣고 진행
    // js에서는 style에 - 표시가 허가되지 않음.
    return (
        <div className="Counter">
            <span className="count">0</span>
            <div>
                <button className="counterButton" 
                onClick={incrementCounterFunction}
                style={buttonStyle}
                >+1</button>
                
            </div>
        </div>


    )
}