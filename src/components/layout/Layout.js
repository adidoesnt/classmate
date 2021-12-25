import Navigator from "./Navigator"

function Layout(props) {
    return <div>
        <Navigator/>
        <main>{props.children}</main>
    </div>
}

export default Layout;