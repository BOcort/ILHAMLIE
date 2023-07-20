// import React from 'react'
import PropTypes from 'prop-types'
export default function AchievementCard(props) {
    AchievementCard.propTypes = {
        id : PropTypes.number.isRequired,
        title : PropTypes.string.isRequired,
        detail : PropTypes.string.isRequired,
        DateProject : PropTypes.string.isRequired,
        types : PropTypes.arrayOf(PropTypes.string).isRequired,
        img : PropTypes.string.isRequired
    }
    return (
        <div className="card w-full hover:transition-shadow ease-out hover:ease-in hover:delay-300 hover:bg-opacity-80 hover:cursor-pointer active:cursor-pointer bg-gray-700 text-left shadow-xl ">
            <figure><img src={props.img} alt={props.title} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {props.title}
                    <div className="badge badge-secondary">{props.DateProject}</div>
                </h2>
                <p >{props.detail}</p>
                <div className="card-actions justify-end">
                    {props.types.map((tipe ,i) => (
                        <div className="badge badge-outline" key={i}>{tipe}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}
