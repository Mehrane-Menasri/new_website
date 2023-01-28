import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div>

            <section className='section bg-primary mt-5'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-8 mx-auto my-5">
                            <div className="accordion accordion-flush shadow" id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            SOURCING PRODUITS
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <table className="table table-danger table-hover table-striped table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            FINANCEMENT
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <table className="table table-danger table-hover table-striped table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            TRANSPORT & LOGISTIQUE
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <table className="table table-danger table-hover table-striped table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            DOCUMENTATION
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">
                                            <table className="table table-danger table-hover table-striped table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Otto</td>
                                                        <td>@mdo</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Thornton</td>
                                                        <td>@fat</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section border-bottom mt-5'>
                <div className='container-fluid'>
                    <div className='card shadow'>
                        <div className='row p-3'>
                            <div className='col-md-5 p-4 border-start bg-danger text-white'>
                                <h2>ما هي الخدمات التي نقدمها</h2>
                                <hr className='underline' />
                            </div>
                            <div className='col-md-7 p-4'>
                                <div className='row text-center'>
                                    <div className='col-md-6 mb-4'>
                                        <div className="card bg-secondary text-white">
                                            <div className="card-body">
                                                <h5 className="card-title">التسويق الالكتروني</h5>
                                                <h2 className='my-4'><i className="bi bi-megaphone"></i></h2>
                                                <p className="card-text">لديك مشروعك الخاص، وتبحث عن الطريقة الأنسب لتسويقه عبر الإنترنت نوفر لك كافة وسائل التسويق الالكتروني ونعملُ لك عليها، لتسويق مُنتجك ونشر  هويتك لأكبر قدر ممكن من العملاء المحتملين.</p>
                                                <Link className="card-link">Card link</Link>
                                                <Link className="card-link">Another link</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-4'>
                                        <div className="card bg-secondary text-white">
                                            <div className="card-body">
                                                <h5 className="card-title">تصميم المواقع</h5>
                                                <h2 className='my-4'><i className="bi bi-palette"></i></h2>
                                                <p className="card-text">في الوقت الذي تكون هوية شركتك هي النافذة الأولى والوجه الأبرز أمام العملاء فمن الضروري أن تنعكس جودة الخدمات التي تقدمها مع جودة المحتوى البصري الذي تعرضه لعملائك.</p>
                                                <Link className="card-link">Card link</Link>
                                                <Link className="card-link">Another link</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-4'>
                                        <div className="card bg-secondary text-white">
                                            <div className="card-body">
                                                <h5 className="card-title">برمجة المواقع</h5>
                                                <h2 className='my-4'><i className="bi bi-code-slash"></i></h2>
                                                <p className="card-text">العالم أصبح يعيش داخل الإنترنت ، و أنت ما لذي يؤخرك حتى الآن عنهم ..!؟
اصنع مجتمعك الخاص بنشاطك التجاري على الإنترنت و اجعله مزاراً للكثير من العملاء ، اجعل منه مقراً عالمياً يسهل الوصول إليه في أي زمان و من أي مكان.</p>
                                                <Link className="card-link">Card link</Link>
                                                <Link className="card-link">Another link</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-4'>
                                        <div className="card bg-secondary text-white">
                                            <div className="card-body">
                                                <h5 className="card-title">استضافة المواقع</h5>
                                                <h2 className='my-4'><i className="bi bi-hdd-rack"></i></h2>
                                                <p className="card-text">احصل على الاستضافة الامنة و السريع التي تتناسب مع جميع احتياجاتك و بأسعار منافسة تجعل تواجدك على الانترنت دائما متميزا..</p>
                                                <Link className="card-link">Card link</Link>
                                                <Link className="card-link">Another link</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services