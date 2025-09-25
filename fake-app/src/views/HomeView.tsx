import { Link, Typography } from "mds-react";

function HomeView ({current = false, navTo}){

    const currentClass = current ? 'current' : '';

    const clickHandler = (e:any) => {
        e.preventDefault();
        console.log('click');
        navTo("MasDetailView");
    }

    return (
        <>
        <div className={`view ${currentClass}`}>
            <Typography variant="h1">Home View</Typography>
            <Link href="#" onClick={(e) => clickHandler(e)}>nav to other view</Link>
        </div>
        </>
    )
}

export default HomeView;