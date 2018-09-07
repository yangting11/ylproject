import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom'

class A extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {/* <div>component A 带参数的路由 {this.props.match.params.id}</div> */}
                <Switch>
                <Route exact path={`${this.props.match.path}/:id`} render={(route)=>{
                        return <div>当前是带参数的A组建，参数是：{route.match.params.id}</div>
                    }}></Route>
                    <Route exact path={`${this.props.match.path}`} render={(route)=>{
                        return <div>当前是不带参数的A组建</div>
                    }}></Route>
                </Switch>
            </div>
        )
    }
}

class B extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>component B</div>
        )
    }
}

class Wrapper extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Link to="/a">组建A</Link>
                <br/>
                <Link to="/a/1">带参数组建A</Link>
                <br/>
                <Link to="/a/sub">/a/sub</Link>
                <br/>
                <Link to="/b">组建B</Link>
                {this.props.children}
            </div>
        )
    }
}


ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a" component={A}></Route>
            <Route path="/b" component={B}></Route>
        </Wrapper>
    </Router>,
    document.getElementById('app')
)




