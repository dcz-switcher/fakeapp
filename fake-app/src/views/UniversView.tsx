import { Button, Link, Typography } from "mds-react";


function UniversView({stacked = false, onClose, navTo}) {
    const stackedClass = stacked ? 'stacked' : '';

    const closeHandler = () => {
        onClose()
    }


    return (
        <>
        <div className={`view ${stackedClass}`}>
            <Typography variant="h1">Univers view</Typography>

            <Button variant="secondary" className="mds-stack-t--48" onClick={closeHandler}>Close</Button>

            <div className="mds-stack-t--48">
                <Link href="#" onClick={() => navTo("ProductView")}>go to product view</Link>
            </div>
        </div>
        </>
    )
}

export default UniversView;