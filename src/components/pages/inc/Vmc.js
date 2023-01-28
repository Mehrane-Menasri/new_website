import React from 'react'
import { Link } from 'react-router-dom'

const Vmc = () => {
    return (
        <section className='section bg-light'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center mb-4'>
                        <h3 className='main-heading'>Vision Mission & Values</h3>
                        <div className='underline mx-auto'></div>
                        <p>
                            Add .carousel-fade to your carousel to animate slides with a fade transition instead of a slide. Depending on your carousel content.
                        </p>
                    </div>
                    <div className='col-md-4 text-center mb-3'>
                        <div class="card shadow py-4">
                            <div class="card-body">
                                <h5 class="card-title">Our Vision</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" class="btn btn-outline-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 text-center mb-3'>
                        <div class="card shadow py-4">
                            <div class="card-body">
                                <h5 class="card-title">Our Mission</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" class="btn btn-outline-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 text-center mb-3'>
                        <div class="card shadow py-4">
                            <div class="card-body">
                                <h5 class="card-title">Our Values</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/" class="btn btn-outline-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Vmc