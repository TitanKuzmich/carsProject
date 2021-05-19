import React from 'react'
import {DriveEta} from '@material-ui/icons'
import style from './style.module.scss'

const Logo = () => {
    return (
        <div className={style.logoContainer}>
            <DriveEta/>
            <p className={style.logoText}>Cars Stat</p>
        </div>
    )
}

export default Logo
