import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='footer pt-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-3 mb-4'>
                            <div className='my-5'>
                                <h1 className='mb-4'>WEBDEV</h1>
                                <button className='btn btn-outline-danger px-4 py-3'>تنزيل الكتيب الخاص بنا</button>
                            </div>
                        </div>
                        <div className='col-md-3 mb-4'>
                            <h6 className="card-title">معلومات الموقع</h6>
                            <hr />
                            <p>
                            من أفضل المواقع انشئ في مطلع عام2020م ويقدم خدمات استضافة المواقع – برمجة المواقع –تصميم المواقع – الاستشارات التقنية – والعديد من الخدمات الأخرى</p>
                        </div>
                        <div className='col-md-3 mb-4'>
                            <h6 className="card-title">روابط سريعة</h6>
                            <hr />
                            <div><Link className='text-dark' to="/">الرئيسية</Link></div>
                            <div><Link className='text-dark' to="/about">من نحن؟</Link></div>
                            <div><Link className='text-dark' to="/projects">المشاريع</Link></div>
                            <div><Link className='text-dark' to="/services">الخدمات</Link></div>
                            <div><Link className='text-dark' to="/contact">اتصل بنا</Link></div>
                        </div>
                        <div className='col-md-3 mb-4'>
                            <h6 className="card-title">معلومات الاتصال</h6>
                            <hr />
                            <div><p className='mb-1'><i className="bi bi-geo-alt"></i> 28000 المسيلة، الجزائر.</p></div>
                            <div><p className='mb-1'><i className="bi bi-telephone"></i> +213 781 411 509</p></div>
                            <div><p className='mb-1'><i className="bi bi-telephone"></i> +213 664 798 043</p></div>
                            <div><p className='mb-1'><i className="bi bi-envelope-open"></i> mehranemen@gamil.com</p></div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='col-md-12 bg-danger p-3 text-white'>© جميع الحقوق محفوظة - 2023</div>
                </div>
            </section>
    )
}

export default Footer