import styles from'./HomePage.module.scss'
import React from 'react'
import { handleThemeChange } from '../../actions/theme'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'
import { LinkComp } from '../Link/Link.jsx';

const cx = classNames.bind(styles)

const mapStateToProps = (state) =>({
        theme : state.theme.theme,
        tasks : state.tasks
})

const mapDispatchToProps = (dispatch) =>({
	dispatchOnThemeChange : () =>dispatch(handleThemeChange())
})

class HomePageClass extends React.Component{

    changeTheme = () =>{
        this.props.dispatchOnThemeChange()
    }

    render(){
        return(
            <div className = {cx("Home",{[`Home-theme-${this.props.theme}`]:true})}>
			<div className = {cx("Radio",{[`Radio-theme-${this.props.theme}`]:true})}>
				<label>Dark</label>
				<input type="checkbox" className={cx("toggle")} onChange = {this.changeTheme}/>
				<label>Light</label>
			</div>
			<h2 className = {cx("Heading",{[`Heading-theme-${this.props.theme}`]:true})}>My ToDoList</h2>
			{this.props.tasks.map(x=> <LinkComp name = {x.name} id = {x.id} key={x.id}></LinkComp>)}
			</div>
        )
    }
}

export const HomePage = connect(mapStateToProps,mapDispatchToProps)(HomePageClass)