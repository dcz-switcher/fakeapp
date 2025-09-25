import { Button, Typography } from "mds-react";

function MasDetailView({current = false, stacked = false, onClose}) {
    const currentClass = current ? 'current' : '';
    const stackedClass = stacked ? 'stacked' : '';

    const closeHandler = () => {
        onClose()
    }


    return (
        <>
        <div className={`view ${currentClass} ${stackedClass}`}>
            <Typography variant="h1">Mas detail view</Typography>

            <Button variant="secondary" className="mds-stack-t--48" onClick={closeHandler}>Close</Button>
        </div>
        </>
    )
}

export default MasDetailView;