import React from 'react'
import { Link} from 'react-router-dom'
import Head from './head'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Main</div>
      <Link to="/dashboard/profile/b852a34a-a317-4c2d-bc22-e2183c2c25d0">Go To Profile</Link>
      <Link to="/dashboard/">Go To Root</Link>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
