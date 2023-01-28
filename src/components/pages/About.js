import React from 'react'
import { Link } from 'react-router-dom'
import Vmc from './inc/Vmc'
import bg from '../img/bg1.png'

const About = () => {
    return (
        <div>

            <section className='section'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-md-7 about py-5">
                            <h2>
                            من نحن
                            </h2>
                        </div>
                        <div className="col-md-5 about-r bg-danger text-white py-5 px-5">
                            <p className='py-5'>
                                
                            منذ اللحظة الأولى التي انطلقنا فيها ونحن نضع عنصر الإبداع والتميز نصب أعيننا، لنجعل من برمجة و تصميم المواقع تخصصنا الزاخر بخبراتٍ طويلة ومؤهلة. بنخبة من المتخصصين وعلى مشارف العام 2022 جمعنا كل عتادنا واجتمعنا في ميدان التخصص لنغير ونطوٍّر ونبدأ نشاطنا الواسع في السوق الجزائرية ونضع أولى خطواتنا في مجال تصميم و تطوير المواقع. لنتوسع بعدها في السوق العربية، ونعمل في مجال التسويق الرقمي للعملاء والشركات العربية، ونسعى لنحقق النقلة النوعية التي لطالما كنا ولا زلنا نجعل من هذه النقلة ومن تطوير التسويق الإلكتروني جزءً لا يتجزأ من سياساتها الداخلية. نعملُ بسياسة “الجودة أولاً”، نقدم خدمات متميزة وفريدة من نوعها نسعى من خلالها على كسب ثقة عملائنا.
                            
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className='container'>
                    <div className="row p-3 shadow border">
                        <div className="col-md-12 text-center bg-danger text-white mb-5 pt-3">
                            <h2>أهدافنا</h2>
                            <p className='mt-4 mb-5'>هدفنا هو مساعدة عملائنا على إنجاز أشياء رائعة من خلال التسويق عبر الإنترنت</p>
                        </div>
                        <div className="col-md-4 p-5 border bg-primary text-white rounded-pill">
                            <h2>
                                <i class="bi bi-cursor"></i> الأهداف
                            </h2>
                            <p className='mt-4'>
                            هدفنا هو مساعدة عملائنا على إنجاز أشياء رائعة من خلال التواجد عبر الإنترنت.
                            </p>
                        </div>
                        <div className="col-md-4 p-5 border bg-primary text-white rounded-pill">
                            <h2>
                                <i class="bi bi-envelope-paper"></i> الرسالة
                            </h2>
                            <p className='mt-4'>
                            نحن نركز بين أفضل ما في التفكير التصميمي ، وأبحاث المستخدمين القيمة.
                            </p>
                        </div>
                        <div className="col-md-4 p-5 border bg-primary text-white rounded-pill">
                            <h2>
                                <i class="bi bi-geo"></i> القيمة
                            </h2>
                            <p className='mt-4'>
                            خلق قيمة دائمة لعملائنا ، وتوفير الخدمة بنزاهة.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section bg-danger text-white'>
                <div className='container'>
                    <div className="row text-center">
                        <div className="col-md-2 shadow rounded-pill p-3">
                            <h3>
                                <i className="bi mx-auto bi-newspaper"></i>
                            </h3>
                            <p className='mt-4'>
                                المدونات و مواقع الأخبار
                            </p>
                        </div>
                        <div className="col-md-2 shadow rounded-pill p-3">
                            <h3>
                                <i className="bi mx-auto bi-person-circle"></i>
                            </h3>
                            <p className='mt-4'>
                                المواقع الشخصية
                            </p>
                        </div>
                        <div className="col-md-2 shadow rounded-pill p-3">
                            <h3>
                                <i className="bi mx-auto bi-briefcase"></i>
                            </h3>
                            <p className='mt-4'>
                                مواقع الشركات
                            </p>
                        </div>
                        <div className="col-md-2 shadow rounded-pill p-3">
                            <h3>
                                <i className="bi mx-auto bi-airplane"></i>
                            </h3>
                            <p className='mt-4'>
                                صفحات الهبوط
                            </p>
                        </div>
                        <div className="col-md-2 shadow rounded-pill p-3">
                            <h3>
                                <i className="bi mx-auto bi-shop-window"></i>
                            </h3>
                            <p className='mt-4'>
                                المتاجر الإلكترونية
                            </p>
                        </div>
                        <div className="col-md-2 shadow rounded-pill p-3">
                            <h3>
                                <i className="bi mx-auto bi-chat"></i>
                            </h3>
                            <p className='mt-4'>
                                مواقع التواصل
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About