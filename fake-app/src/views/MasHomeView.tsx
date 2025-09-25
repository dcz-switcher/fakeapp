import { Typography } from "mds-react";

function MasHomeView({current = false, stacked = false}) {
    const currentClass = current ? 'current' : '';
    const stackedClass = stacked ? 'stacked' : '';

    return (
        <>
        <div className={`view ${currentClass} ${stackedClass}`}>
            <Typography variant="h1">Mas Home view</Typography>
        </div>
        </>
    )
}

export default MasHomeView;