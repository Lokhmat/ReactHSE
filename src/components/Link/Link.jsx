import React from 'react';
import styles from './Link.module.scss'
import classNames from 'classnames/bind'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const mapStateToProps = (state) =>({
	theme : state.theme.theme
})


class LinkClass extends React.Component{

	render(){

	return(
        <Link to={`/${this.props.id}`}>
		<div className = {cx("Task",{[`Task-theme-${this.props.theme}`]:true})}>
		<div className = {cx("Text",{[`Text-theme-${this.props.theme}`]:true})}>
            <p>{this.props.name}</p>
		</div>
	    </div>
        </Link>
    )
    }
}

export const LinkComp = connect(mapStateToProps)(LinkClass);