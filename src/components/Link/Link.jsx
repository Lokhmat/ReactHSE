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
        <Link className = {cx("Link",{[`Link-theme-${this.props.theme}`]:true})} to={`/${this.props.id}`}>
		
		<div className = {cx("Text")}>
            <div>{this.props.name}</div>
		</div>
	    
        </Link>
    )
    }
}

export const LinkComp = connect(mapStateToProps)(LinkClass);