import React from 'react'
import { Link } from 'react-router-dom'
import Slider from '../includes/Slider'
import Vmc from './inc/Vmc'
import img1 from '../img/bg1.png'
import img2 from '../img/bg2.jpg'
import img3 from '../img/bg3.jpg'

const Home = () => {

    return (
        <>
            <Slider />
            <div className="container mt-5">

                <div className="row text-center">
                    <div className="col-md-8 mx-auto">
                        <div className="card shadow">
                        <div className="card-body bg-primary text-white">
                            <h2 className="card-title">أهم ميزات تصميم موقع إلكتروني</h2>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="row text-center my-5">
                    <div className="col-md-4 col-6 mb-4">
                        <div className="card shadow p-3 bg-secondary text-white">
                            <i className="bi bi-list-columns"></i>
                            <h4 className='my-3'>تصميم مواقع مخصصة</h4>
                            <p>نقوم بتصميم مواقع فريدة و معدلة حسب احتياجات و متطلبات كل عميل</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="card shadow p-3 bg-secondary text-white">
                            <i className="bi bi-kanban"></i>
                            <h4 className='my-3'>محتوى سهل الإدارة</h4>
                            <p>نقوم بتطوير مواقع باستخدام وردبرس بحيث يمكنك إضافة المحتوى وتحريره وحذفه سهل وسريع</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="card shadow p-3 bg-secondary text-white">
                            <i className="bi bi-search"></i>
                            <h4 className='my-3'>متوافق مع محركات البحث</h4>
                            <p>نتبع المعايير القياسية لجوجل لإجراء اعدادات تحسين محركات البحث لموقعك </p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="card shadow p-3 bg-secondary text-white">
                            <i className="bi bi-browser-chrome"></i>
                            <h4 className='my-3'>التكامل مع الشبكات الاجتماعية</h4>
                            <p>سوف نقوم بتصميم يتيح لعملائك التنقل بين موقعك و صفحاتك على مواقع التواصل المتعددة</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="card shadow p-3 bg-secondary text-white">
                            <i className="bi bi-shield-check"></i>
                            <h4 className='my-3'>الحماية</h4>
                            <p>توفير اعلى و سائل الحماية المتاحة من ناحية الكود البرمجي و امن الخوادم و تفعيل SSL</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="card shadow p-3 bg-secondary text-white">
                            <i className="bi bi-arrows-fullscreen"></i>
                            <h4 className='my-3'>متجاوب مع كل الاجهزة</h4>
                            <p>التجاوب مع شاشات الجوال و التابلت و الكمبيوتر بحيث يشعر زائر موقعك بالراحة و سهولة التصفح</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="card shadow p-3 bg-secondary text-white">
                            <i className="bi bi-map"></i>
                            <h4 className='my-3'>خرائط جوجل</h4>
                            <p>تتضمن جميع صفحات الويب الخاصة بنا نماذج الاتصال وخرائط جوجل</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="card shadow p-3 bg-secondary text-white">
                            <i className="bi bi-translate"></i>
                            <h4 className='my-3'>دعم لغات متعددة</h4>
                            <p>جميع المواقع التي نقوم بتصميمها تدعم تعدد اللغات و ما عليك الى طلب ذلك</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-6 mb-4">
                        <div className="card shadow p-3 bg-secondary text-white">
                            <i className="bi bi-hourglass"></i>
                            <h4 className='my-3'>التسليم في أسرع وقت</h4>
                            <p>نضعُ لك خطة زمنية قياسية ومنافسة نوضح لك فيها كل التفاصيل الزمنية لعملك</p>
                        </div>
                    </div>
                </div>
   
            </div>
            
            <div className="container-fluid">
                    <div className="row bg-danger py-5">
                        <div className="col-md-6 mx-auto scrollby">
                            <nav id="navbar-example" className="navbar bg-body-tertiary px-3 mb-3">
                                <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link" href="#scrollspyHeading1">First</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#scrollspyHeading2">Second</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#scrollspyHeading3">Third</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#scrollspyHeading4">Fourth</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#scrollspyHeading5">Fifth</a>
                                </li>
                                </ul>
                            </nav>
                            <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
                                <h4 id="scrollspyHeading1">First heading</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ut aut delectus, sequi ex quae eum possimus maiores at debitis. Nisi officiis ducimus, fuga odio minima inventore quod nemo obcaecati aliquid id deleniti sunt ex voluptates cumque quaerat exercitationem recusandae, libero, autem debitis veritatis nostrum amet voluptatibus quasi est. Rem debitis molestias quidem eveniet voluptatem eius? Dolorem fuga exercitationem ullam voluptatem amet! Id a quaerat quos qui vel harum quibusdam fugit iusto maiores eum fugiat neque esse molestias, praesentium voluptas ipsum animi aut commodi vitae accusantium dolorum perspiciatis magnam. Quos at veritatis quae reiciendis ipsa aut cumque possimus autem alias!</p>
                                <h4 id="scrollspyHeading2">Second heading</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ut aut delectus, sequi ex quae eum possimus maiores at debitis. Nisi officiis ducimus, fuga odio minima inventore quod nemo obcaecati aliquid id deleniti sunt ex voluptates cumque quaerat exercitationem recusandae, libero, autem debitis veritatis nostrum amet voluptatibus quasi est. Rem debitis molestias quidem eveniet voluptatem eius? Dolorem fuga exercitationem ullam voluptatem amet! Id a quaerat quos qui vel harum quibusdam fugit iusto maiores eum fugiat neque esse molestias, praesentium voluptas ipsum animi aut commodi vitae accusantium dolorum perspiciatis magnam. Quos at veritatis quae reiciendis ipsa aut cumque possimus autem alias!</p>
                                <h4 id="scrollspyHeading3">Third heading</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ut aut delectus, sequi ex quae eum possimus maiores at debitis. Nisi officiis ducimus, fuga odio minima inventore quod nemo obcaecati aliquid id deleniti sunt ex voluptates cumque quaerat exercitationem recusandae, libero, autem debitis veritatis nostrum amet voluptatibus quasi est. Rem debitis molestias quidem eveniet voluptatem eius? Dolorem fuga exercitationem ullam voluptatem amet! Id a quaerat quos qui vel harum quibusdam fugit iusto maiores eum fugiat neque esse molestias, praesentium voluptas ipsum animi aut commodi vitae accusantium dolorum perspiciatis magnam. Quos at veritatis quae reiciendis ipsa aut cumque possimus autem alias!</p>
                                <h4 id="scrollspyHeading4">Fourth heading</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ut aut delectus, sequi ex quae eum possimus maiores at debitis. Nisi officiis ducimus, fuga odio minima inventore quod nemo obcaecati aliquid id deleniti sunt ex voluptates cumque quaerat exercitationem recusandae, libero, autem debitis veritatis nostrum amet voluptatibus quasi est. Rem debitis molestias quidem eveniet voluptatem eius? Dolorem fuga exercitationem ullam voluptatem amet! Id a quaerat quos qui vel harum quibusdam fugit iusto maiores eum fugiat neque esse molestias, praesentium voluptas ipsum animi aut commodi vitae accusantium dolorum perspiciatis magnam. Quos at veritatis quae reiciendis ipsa aut cumque possimus autem alias!</p>
                                <h4 id="scrollspyHeading5">Fifth heading</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ut aut delectus, sequi ex quae eum possimus maiores at debitis. Nisi officiis ducimus, fuga odio minima inventore quod nemo obcaecati aliquid id deleniti sunt ex voluptates cumque quaerat exercitationem recusandae, libero, autem debitis veritatis nostrum amet voluptatibus quasi est. Rem debitis molestias quidem eveniet voluptatem eius? Dolorem fuga exercitationem ullam voluptatem amet! Id a quaerat quos qui vel harum quibusdam fugit iusto maiores eum fugiat neque esse molestias, praesentium voluptas ipsum animi aut commodi vitae accusantium dolorum perspiciatis magnam. Quos at veritatis quae reiciendis ipsa aut cumque possimus autem alias!</p>
                            </div>
                        </div>
                    </div>
                </div>  
        </>
    )
}

export default Home