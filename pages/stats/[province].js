import Link from "next/link";

import Layout from "../../components/layout";

import Styles from '../../styles/stats.module.scss';

export async function getServerSideProps({ params }) {
    const province = await params.province;
    const res = await fetch("https://api.covid19tracker.ca/reports/province/"+province);
    const data = await res.json();
    return {
        props: {covidData:data}
    }
}


export default function Stats({covidData}){
    
    let province;

    switch(covidData.province){
        case "NS":
            province = "Nova Scotia";
            break;
        case "ON":
            province = "Ontario";
            break;
        case "QC":
            province = "Quebec";
            break;
        case "AB":
            province = "Alberta";
            break;
        case "NB":
            province = "New Brunswick";
            break;
        case "MB":
            province = "Manitoba";
            break;
        case "BC":
            province = "British Columbia";
            break;
        case "PE":
            province = "Prince Edward Island";
            break;
        case "SK":
            province = "Saskatchewan";
            break;
        case "NL":
            province = "Newfoundland and Labrador";
            break;
        case "NT":
            province = "Northwest Territories";
            break;
        case "YT":
            province = "Yukon";
            break;
        case "NU":
            province = "Nunavut";
            break;
    }
    const currentData = covidData.data[covidData.data.length - 1];

    return (
        <Layout>
            <Head>
                <title>
                {siteTitle}
                </title>
            </Head>
            <div>
                <h2>{province}</h2>
            </div>
            <div className={Styles.cards}>
                <div className={Styles.cases}><h4>Total Cases</h4>{currentData.total_cases}</div>
                <div className={Styles.fatal}><h4>Total Fatalities</h4>{currentData.total_fatalities}</div>
                <div className={Styles.recov}><h4>Total Recoveries</h4>{currentData.total_recoveries}</div>
                <div className={Styles.vacc}><h4>Total Vaccinated</h4>{currentData.total_vaccinated}</div>   
            </div>
            <div>
                <Link href={'/'} passHref>
                    <button className={Styles.button}>Back To Home</button>
                </Link>
            </div>
        </Layout>
    )
}