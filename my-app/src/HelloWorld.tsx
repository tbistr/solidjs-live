export function HelloWorld() {
    const name = "Solid";
    const style = { "background-color": "#2c4f7c", color: "#FFF" }
    return <>
        <div>
            <h1>Welcome</h1>
        </div>
        <div style={style}>Hello {name}!</div>
    </>
}
