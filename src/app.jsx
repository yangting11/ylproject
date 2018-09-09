import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route,Link,Switch,Redirect} from 'react-router-dom'
import Home from 'page/home/index.jsx';
import Edit from 'page/edit/index.jsx';
import Layout from 'components/layout/index.jsx'
import 'components/layout/theme.css'
import Login from 'page/login/Login.jsx'
class App extends React.Component{
    render(){
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/login" component={Login}></Route>
                        {/*用逻辑判断使用什么组件*/}
                        <Route path="/" render={(props)=>(
                                <Layout>
                                    <Switch>
                                        <Route exact path="/" component={Home}></Route>
                                        <Route exact path="/edit" component={Edit}></Route>
                                    </Switch>
                                </Layout>
                            )
                        }>   
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)




