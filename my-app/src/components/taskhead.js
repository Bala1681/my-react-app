import React from 'react';
import Task from '../components/Task';
export function Taskhead() {
  return(
    <div>
        <section className="pricing py-5">
            <div className="container">
                <div className="row">
                    <Task user="Single User" type="FREE" price="0" class1="text-muted" class2="text-muted" class3="text-muted" class4="text-muted" tick1="fa fa-times" tick2="fa fa-times" tick3="fa fa-times" tick4="fa fa-times" name="fa fa-check" ></Task>
                    <Task  user="5Users" type="PRO" price="9" class4="text-muted" tick1="fa fa-check" tick2="fa fa-check" tick3="fa fa-check" tick4="fa fa-times" name="fa fa-check"></Task>
                    <Task user="Unlimited Users" type="PREMIUM" price="49" tick1="fa fa-check" tick2="fa fa-check" tick3="fa fa-check" tick4="fa fa-check" name="fa fa-check"></Task>
                </div>
             </div>
        </section>
</div>
  ) ;
}
