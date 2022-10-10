import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faEnvelope, faGear, faAdd,faRightFromBracket, faChartSimple, faFileLines, faCircleInfo, faChartColumn, faSquarePollVertical, faMoon, faCartShopping, faUser as solidUser, faBagShopping, faCaretDown, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'
import { faDash, faUser,faClipboard, faSun } from '@fortawesome/free-regular-svg-icons'
import { faYoutube, faTwitter, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import profile from './img/profile.jpeg'
// import {profile.jpeg as profile} from './img'
export const Caret =()=>{
    return (<FontAwesomeIcon icon={faCaretDown}/>)
}
export const Bars =()=>{
    return (<FontAwesomeIcon icon={faBars} />)
}

export const LogoutIcon =()=>{
    return(
        <FontAwesomeIcon icon={faRightFromBracket}/>
    )
}

export const BackArrow = ()=>{
    return(
        <FontAwesomeIcon icon={faArrowLeft}/>
    )
}

export const AddBtnIcon = ()=>{
    return(
        <FontAwesomeIcon icon={faAdd} />
    )
}
export const LightTheme = ()=>{
    return(
        <FontAwesomeIcon icon={faSun}/>
    )
}

export const DarkTheme = ()=>{
    return(
        <FontAwesomeIcon icon={faMoon}/>
    )
}

export const asideLink = [
    { 'icon': <FontAwesomeIcon className="aside-icon" icon={faSquare} />, 'des': 'Dashboard' },
    { 'icon': <FontAwesomeIcon className="aside-icon" icon={faUser}/>, 'des': 'Customers' },
    { 'icon': <FontAwesomeIcon className="aside-icon" icon={faFileLines} />, 'des': 'Orders' },
    { 'icon': <FontAwesomeIcon className="aside-icon" icon={faChartSimple} />, 'des': 'Analytics' },
    { 'icon': <FontAwesomeIcon className="aside-icon" icon={faEnvelope}/>, 'des': 'Messages', 'count': <p>26</p> },
    { 'icon':  <FontAwesomeIcon className="aside-icon" icon={faClipboard} />, 'des': 'Products' },
    { 'icon':<FontAwesomeIcon className="aside-icon" icon={faCircleInfo} />, 'des': 'Reports' },
    { 'icon': <FontAwesomeIcon className="aside-icon" icon={faGear}/>, 'des': 'Settings' },
    { 'icon': <FontAwesomeIcon className="aside-icon" icon={faAdd}/>, 'des': 'Add Products' },
   
]
export const CardInfoSal = ()=>{
    return(
        <section className="left">
            <article className="card" id="sale">
                 <FontAwesomeIcon icon={faSquarePollVertical} />
            </article>
            <section className="info">
                <h3>Total Sales</h3>
                <h2>21,250</h2>
            </section>
        </section>
        

    )
}
export const CardInfoExp = ()=>{
    return(
        <section className="left">
            <article className="card" id="expenses">
                 <FontAwesomeIcon icon={faSquarePollVertical} />
            </article>
            <section className="info">
                <h3>Total Expenses</h3>
                <h2>5,250</h2>
            </section>
        </section>
        

    )
}
export const CardInfoInc = ()=>{
    return(
        <section className="left">
            <article className="card" id="income">
                 <FontAwesomeIcon icon={faChartColumn} />
            </article>
            <section className="info">
                <h3>Total Income</h3>
                <h2>15,250</h2>
            </section>
        </section>
        

    )
}

export const table = [
    {'idd':'1000','stock':'Apple Watch','payment':'cash','status':'Pending', 'action':'action','caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1001','stock':'Mac Book pro','payment':'transfer','status':'Supplied','action':'action','caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1002','stock':'Apple Watch','payment':'POS','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1003','stock':'Hover Board','payment':'transfer','status':'Delivered','action':'action','caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1004','stock':'Apple Watch','payment':'POS','status':'Reversed','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1005','stock':'Hover Board','payment':'transfer','status':'Returned','action':'action', 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1006','stock':'Apple Watch','payment':'POS','status':'Supplied','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1007','stock':'Hover Board','payment':'transfer','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1008','stock':'Apple Watch','payment':'POS','status':'Reversed','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1009','stock':'Hover Board','payment':'transfer','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1010','stock':'Apple Watch','payment':'POS','status':'Supplied','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1011','stock':'Shades','payment':'cash','status':'Pending','action':'action'  , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1011','stock':'Shades','payment':'cash','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1011','stock':'Shades','payment':'cash','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1011','stock':'Shades','payment':'cash','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1011','stock':'Shades','payment':'cash','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1011','stock':'Shades','payment':'cash','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1011','stock':'Shades','payment':'cash','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1011','stock':'Shades','payment':'cash','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1011','stock':'Shades','payment':'cash','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1011','stock':'Shades','payment':'cash','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1011','stock':'Shades','payment':'cash','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
    {'idd':'1011','stock':'Shades','payment':'cash','status':'Pending','action':'action' , 'caret': <FontAwesomeIcon icon={faCaretDown}/>},
]

export const customer = [
    {'pic':profile,'name':'David Iroegbu', 'note':'received the order of i watch', 'time':'2'},
    {'pic':profile,'name':'David Iroegbu', 'note':'received the order of i watch', 'time':'2'},
    {'pic':profile,'name':'David Iroegbu', 'note':'received the order of i watch', 'time':'2'},
    {'pic':profile,'name':'David Iroegbu', 'note':'received the order of i watch', 'time':'2'},
    {'pic':profile,'name':'David Iroegbu', 'note':'received the order of i watch', 'time':'2'},
    {'pic':profile,'name':'David Iroegbu', 'note':'received the order of i watch', 'time':'2'},
    {'pic':profile,'name':'David Iroegbu', 'note':'received the order of i watch', 'time':'2'},
    {'pic':profile,'name':'David Iroegbu', 'note':'received the order of i watch', 'time':'2'},
    
]

export const analytic = [
    {'icon':<FontAwesomeIcon icon={faCartShopping} />,'name':'ONLINE ORDER','percent':'71%','id':3484},
    {'icon':<FontAwesomeIcon icon={faBagShopping} />,'name':'OFFLINE ORDER','percent':'31%','id':3384},
    {'icon':<FontAwesomeIcon icon={solidUser}/>,'name':'NEW CUSTOMER','percent':'55%','id':2353},
]

export function OnlineAnalytics() {
     return (
        <article className="card analytic-card online">
            <section className="icon"><FontAwesomeIcon icon={faCartShopping}/></section>
            <section className="title">
                <h3>ONLINE ORDER</h3>
                <small>last 24hrs</small>
            </section>
            <section className="percent">
                +71%
            </section>
            <section className="id">
                3484
            </section>
        </article>
    )
}

export function OfflineAnalytics() {
     return (
        <article className="card analytic-card offline">
            <section className="icon"><FontAwesomeIcon icon={faBagShopping}/></section>
            <section className="title">
                <h3>OFFLINE ORDER</h3>
                <small>last 24hrs</small>
            </section>
            <section className="percent">
                -47%
            </section>
            <section className="id">
                1345
            </section>
        </article>
    )
}

export function CustomerAnalytics() {
     return (
        <article className="card analytic-card new-customer">
            <section className="icon"><FontAwesomeIcon icon={solidUser}/></section>
            <section className="title">
                <h3>NEW CUSTOMER</h3>
                <small>last 24hrs</small>
            </section>
            <section className="percent">
                +67%
            </section>
            <section className="id">
                2345
            </section>
        </article>
    )
}