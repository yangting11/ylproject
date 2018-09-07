import React from 'react'
import ReactDOM from 'react-dom'

//样式处理
let setstyle={
    color:'green'
};
let jsx = (
    <div className="setclass" style={setstyle}>你是不是撒</div>
)

//数据处理
let name = "yangting";
let flag = true;
let names = ['yt','ii','oo']
let jsx = (
    <div>
        {/*这里是react的变量使用*/}
        <p>你好，我是{name}</p>
        {/*这里是条件判断*/}
        {
            flag ?<p>i am {name}</p>:<p>i am not {name}</p>
        }
        {/*这里是数组操作*/}
        {
            names.map((name,index)=><p key={index}>hello,{name}</p>)
        }
    </div>
)
ReactDOM.render(
    jsx,
    document.getElementById('app')
)

//组建的用法
class ES6Component extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'yt'
        }
    }
    render(){
        setTimeout(()=>{
            this.setState({
                name:'ytyt  '
            })
        },2000)
        return <h1>{this.state.name},{this.props.name}</h1>
    }
}

ReactDOM.render(
    <div><ES6Component name="yangting"/></div>,
    document.getElementById('app')
)

//事件处理方式一
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'yangting',
            age:18
        }
        this.addAge = this.addAge.bind(this);//绑定作用于  麻烦，可用箭头函数
    }
    addAge(){
        this.setState({
            age:this.state.age+1
        })
    }
    render(){
        return(
            <div>
                <p>你好，这里是测试组建的使用{this.state.name}--{this.state.age}</p>
                <button onClick={this.addAge}>加一岁</button>  这样写就要bind（this）绑定作用域
                {/* <button onClick={(e)=>{this.addAge(e)}}>加一岁</button> */}
            </div>

        )
    }
}
ReactDOM.render(
    <Component/>,
    document.getElementById('app')
)

//时间处理方式二
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'yangting',
            age:18
        }
        // this.addAge = this.addAge.bind(this);//绑定作用于  麻烦，可用箭头函数
    }
    addAge(){
        this.setState({
            age:this.state.age+1
        })
    }
    changeValue(e){
        this.setState({
            age:e.target.value
        })
    }
    render(){
        return(
            <div>
                <p>你好，这里是测试组建的使用{this.state.name}--{this.state.age}</p>
                {/* <button onClick={this.addAge}>加一岁</button>  这样写就要bind（this）绑定作用域 */}
                <button onClick={(e)=>{this.addAge(e)}}>加一岁</button>
                <input type="text" onChange={(e)=>{this.changeValue(e)}}/>
            </div>

        )
    }
}
ReactDOM.render(
    <Component/>,
    document.getElementById('app')
)

// 组建类型
class Component extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'yangting',
            age:18
        }
        // this.addAge = this.addAge.bind(this);//绑定作用于  麻烦，可用箭头函数
    }
    addAge(){
        this.setState({
            age:this.state.age+1
        })
    }
    changeValue(e){
        this.setState({
            age:e.target.value
        })
    }
    render(){
        return(
            <div>
                <p>你好，这里是测试组建的使用{this.state.name}--{this.state.age}</p>
                {/* <button onClick={this.addAge}>加一岁</button>  这样写就要bind（this）绑定作用域 */}
                <button onClick={(e)=>{this.addAge(e)}}>加一岁</button>
                <input type="text" onChange={(e)=>{this.changeValue(e)}}/>
            </div>

        )
    }
}
class Title extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <h1>{this.props.children}</h1>
    }
}


class App extends React.Component{
    render(){
        return (
            <div className="">
                {/*容器式组建*/}
                <Title title="title">
                    <span>111111111111111</span>
                    <i>11111111112222222222222</i>
                </Title>
                {/*单纯组件*/}
                <Component/>
            </div>
        )
    }
}

//子组件给父组件传值
class Child extends React.Component{
    constructor(props){
        super(props);
        
        // this.addAge = this.addAge.bind(this);//绑定作用于  麻烦，可用箭头函数
    }
    addAge(){
        this.props.onBgColorChange('green')
    }

    render(){
        return(
            <div>
                <h1>父组件背景色 {this.props.bgColor}</h1>
                <button onClick={(e)=>{this.addAge(e)}}>改变父组件颜色值</button>
            </div>

        )
    }
}



class Father extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bgColor:'#f60'
        }
    }
    bgColorChange(color){
        this.setState({
            bgColor:color
        })
    }
    render(props){
        return (
            <div style={{background:this.state.bgColor}}>
                <Child bgColor={this.state.bgColor} onBgColorChange={(color)=>{this.bgColorChange(color)}}></Child>
            </div>
        )
    }
}


class App extends React.Component{
    render(){
        return (
            <div className="">
                {/*容器式组建*/}
                <Title title="title">
                    <span>111111111111111</span>
                    <i>11111111112222222222222</i>
                </Title>
                {/*单纯组件*/}
                <Component/>
            </div>
        )
    }
}

ReactDOM.render(
    <Father/>,
    document.getElementById('app')
)


//子组件之间传值 数据传递和状态提升
class Child extends React.Component{
    constructor(props){
        super(props);
        
        // this.addAge = this.addAge.bind(this);//绑定作用于  麻烦，可用箭头函数
    }
    addAge(){
        this.props.onBgChild2Change('green')
    }

    render(){
        return(
            <div>
                <h1>child1 {this.props.bgColor}</h1>
                <button onClick={(e)=>{this.addAge(e)}}>改变child2背景颜色</button>
            </div>

        )
    }
}

class Child2 extends React.Component{
    constructor(props){
        super(props);
        
        // this.addAge = this.addAge.bind(this);//绑定作用于  麻烦，可用箭头函数
    }
    addAge(){
        this.props.onBgColorChange('green')
    }

    render(){
        return(
            <div style={{background:this.props.bgColor}}>
                <h1>child2 {this.props.bgColor}</h1>
                {/* <button onClick={(e)=>{this.addAge(e)}}>改变父组件颜色值</button> */}
            </div>

        )
    }
}

class Father extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bgColor:'#f60',
            child2Color:'#ccc'
        }
    }
    bgColorChange(color){
        this.setState({
            child2Color:color
        })
    }
    render(props){
        return (
            <div>
                <Child onBgChild2Change={(color)=>{this.bgColorChange(color)}}></Child>
                <Child2 bgColor={this.state.child2Color}></Child2>
            </div>
        )
    }
}


class App extends React.Component{
    render(){
        return (
            <div className="">
                {/*容器式组建*/}
                <Title title="title">
                    <span>111111111111111</span>
                    <i>11111111112222222222222</i>
                </Title>
                {/*单纯组件*/}
                <Component/>
            </div>
        )
    }
}

ReactDOM.render(
    <Father/>,
    document.getElementById('app')
)


//生命周期
class Component extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor")
        this.state={
            name:'app'
        }
    }
    componentWillMount(){
        console.log('willMount')
    }
    componentDidMount(){
        console.log('didmount')
    }
    componentWillUpdate(){
        console.log('willupdate')
    }
    componentDidUpdate(){
        console.log('didupdate')
    }
    componentWillReceiveProps(){
        console.log('willrecive')
    }
    shouldComponentUpdate(){
        console.log('shouldupdate');
        return true
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    click(e){
        this.setState({
            name:'yy'
        })
    }
    render(){
        return (
            <div className="" name={this.props.name}>
                {this.state.name}--
                <button onClick={(e)=>{this.click(e)}}>点击修改</button>
            </div>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props)
        console.log("constructor")
        this.state={
            data:'oldpropsapp',
            hasChild:true
        }
    }
    changeProps(){
        this.setState({
            data:'ytytprops'
        })
    }
    deleteChild(){
        this.setState({
            hasChild:false
        })
    }
    render(){
        return (
            <div>
                {
                    this.state.hasChild?<Component data={this.state.data}/>:null
                }
            
            <button onClick={(e)=>{this.changeProps(e)}}>改变props</button>
            <button onClick={(e)=>{this.deleteChild(e)}}>删除子组件</button>
        </div>
        )
    }
}

ReactDOM.render(
    <App name="yangting"/>,
    document.getElementById('app')
)


//这里是react-router
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
