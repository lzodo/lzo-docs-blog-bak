import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import $ from 'jquery';
import '../../static/css/fullpage.min.css';
import fullpage from '../../static/js/fullpage.min.js';

console.log(fullpage)



function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout>
      <div id="fullpage">
          <div className="section">Some section</div>
          <div className="section">Some section</div>
          <div className="section">Some section</div>
          <div className="section">Some section</div>
      </div>

    </Layout>
  );
  // $(document).ready(function() {
  //    fullpage.init('#fullpage');
  // });
}


export default Home;
