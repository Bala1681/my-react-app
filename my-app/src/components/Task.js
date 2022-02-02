import React from 'react'
import "../css/Task.css"



export default function Task(props){
    return(
        
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.type}</h5>
            <h6 className="card-price text-center">${props.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className={props.name}></i></span>{props.user}</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>5GB Storage</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Unlimited Public Projects</li>
              <li><span className="fa-li"><i className="fa fa-check"></i></span>Community Access</li>
              <li className={props.class1}><span className="fa-li"><i className={props.tick1}></i></span>Unlimited
                Private Projects</li>
              <li className={props.class2}><span className="fa-li"><i className={props.tick2}></i></span>Dedicated
                Phone Support</li>
              <li className={props.class3}><span className="fa-li"><i className={props.tick3}></i></span>Free Subdomain
              </li>
              <li className={props.class4}><span className="fa-li"><i className={props.tick4}></i></span>Monthly Status
                Reports</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase" className="button1">Button</a>
            </div>
          </div>
        </div>
      </div>
      
    )
}


