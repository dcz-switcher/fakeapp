import { Badge, Link, Typography } from "mds-react";
import UniversCard from "../localComponents/UniversCard";
import ProductCard from "../localComponents/ProductCard";

export const universList = [
    {picto: "chat", title: "Animaux de compagnie", id: 10},
    {picto: "parasol", title: "Jeux de plage", id: 20},
    {picto: "chat", title: "Animaux de compagnie", id: 30},
    {picto: "parasol", title: "Jeux de plage", id: 40},
    {picto: "chat", title: "Animaux de compagnie", id: 50},
    {picto: "parasol", title: "Jeux de plage", id: 60},
    {picto: "chat", title: "Animaux de compagnie", id: 70},
    {picto: "parasol", title: "Jeux de plage", id: 80},
    {picto: "chat", title: "Animaux de compagnie", id: 90}
];


function HomeView ({current = false, navTo}){

    const currentClass = current ? 'current' : '';

    const clickHandler = (e:any) => {
        e.preventDefault();
        navTo("UniversView");
    }

    return (
        <div className={`view ${currentClass}`}>
            <div className="mds-container-fluid">
                <div className="mds-row mds-stack-b--12">
                    <div className="mds-col mds-squish-inset--12-24">

                        <Typography variant="h2">Explorez les avantages !</Typography>
                        <div className="mds-display--flex" style={{gap: 12, flexWrap: "wrap", justifyContent: "space-between"}}>
                            {universList.map(el => {
                                return (
                                    <UniversCard key={el.id} {...el} onClick={clickHandler}/>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="mds-row mds-background-color__color-2020">
                    <div className="mds-col">
                        <div className="mds-inset--12">
                            <Badge className="mds-background-color__color-2100"  label="NOS OFFRES À LA UNE"/>
                            <Typography variant="h3">Voyages & autre chose</Typography>
                        </div>
                        <div className="carousel mds-stack-b--48">
                                <ProductCard title="French days" subTitle="Par ici les bonnes affaires"/>
                                <ProductCard title="French days" subTitle="Par ici les bonnes affaires"/>
                                <ProductCard title="French days" subTitle="Par ici les bonnes affaires"/>
                                <ProductCard title="French days" subTitle="Par ici les bonnes affaires"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeView;