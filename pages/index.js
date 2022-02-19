import styles from '../styles/Home.module.scss'
import Link from 'next/link';

import React, { useState } from 'react';

import { compare,removeNoData } from '../lib/function';
import Layout, {siteTitle} from '../components/layout';
import Head from 'next/head';

export async function getStaticProps() {
  const res = await fetch("https://api.covid19tracker.ca/provinces");
  const data = await res.json();
  const x = data.sort(compare);
  removeNoData(x);
  return{
    props: {provinces:x}
  }
}

export default function Home({provinces}) {

  const [province, setProvince] = useState(provinces[0].code);

  function handleChange(e){
    setProvince(e.target.value);
  }

  return (
    <Layout>
      <Head>
        <title>
          {siteTitle}
        </title>
      </Head>
      <div className={styles.wrapper}>
        <p>Please select a province</p>
        <select value={province} onChange={handleChange}>
          {provinces.map((prov, key)=>(
            <option className='options' key={key} value={prov.code}>{prov.name}</option>
            ))}
        </select>
        <div>
          <Link href={'/stats/'+province} passHref>
            <button className={styles.button}>View Covid Data</button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
