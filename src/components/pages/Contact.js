import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className='bg-light'>
            <section className='section border-bottom mt-5'>
                <div className='container-fluid'>
                    <div className='card shadow'>
                        <div className='row p-3'>
                            <div className='col-md-7 contact p-4'>
                                <h1>تواصل معنا</h1>
                                <h5 className='my-4'>لا تتردد في الاتصال بنا لطلب أي معلومات.</h5>
                                <button className='btn btn-outline-danger w-50 py-3'>قم بتنزيل الكتيب الخاص بنا</button>
                            </div>
                            <div className='col-md-5 p-4 border-start bg-danger text-white'>
                                <h2>معلومات الاتصال</h2>
                                <hr className='underline bg-white' />
                                <div><p className='mb-2'><i class="fa fa-map-marker"></i> 28000 المسيلة، الجزائر.</p></div>
                                <div><p className='mb-2'><i class="fa fa-phone"></i> +213 781 411 509</p></div>
                                <div><p className='mb-2'><i class="fa fa-phone"></i> +213 664 798 043</p></div>
                                <div><p className='mb-2'><i class="fa fa-envelope"></i> mehranemen@gamil.com</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact