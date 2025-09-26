import { Icon, Typography } from "mds-react";

function UniversCard ({picto, title, onClick}) {
    return (
        <div className="card-univers" onClick={onClick}>
            <Icon baseClassName="picto" color="color-macif--1" size="large" className="mds-inline--12">{picto}</Icon>
            <Typography color="text">{title}</Typography>
        </div>
    )
}

export default UniversCard;