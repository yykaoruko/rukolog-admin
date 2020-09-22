import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getIssues, getIssue } from '../gateways';

export default function Page(props) {
  return <div>{props.toString()}</div>
}

Page.getInitialProps = async (ctx) => {
  const promises = [
    getIssues(),
    getIssue({ id: 4 }),
  ]
  return await Promise.all(promises).then(responses => responses);
}