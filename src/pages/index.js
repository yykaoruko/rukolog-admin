import { ProtectedRouteContainer } from '~/src/components/router'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Page(props) {
  return (
    <ProtectedRouteContainer>
      <div>top</div>
    </ProtectedRouteContainer>
  )
}
