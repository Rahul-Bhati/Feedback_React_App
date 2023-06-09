import React from 'react'
import { Link } from 'react-router-dom'
import Card from './../shared/Card';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is React app to leave feedback for a service or product.</p>
        <p>Version 1.0.0</p>
        <p>
          <Link to='/'>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage