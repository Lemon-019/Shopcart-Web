import React from 'react'
import PageHeader from '../components/PageHeader'
import GoogleMap from '../components/GoogleMap';

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
    "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
    {
        imgUrl: "/images/icon/01.png",
        imgAlt: "contact icon",
        title: "Office Address",
        desc: "1201 park street, Fifth Avenue",
    },
    {
        imgUrl: "/images/icon/02.png",
        imgAlt: "contact icon",
        title: "Phone number",
        desc: "+22698 745 632,02 982 745",
    },
    {
        imgUrl: "/images/icon/03.png",
        imgAlt: "contact icon",
        title: "Send email",
        desc: "admin@shopcart.com",
    },
    {
        imgUrl: "/images/icon/04.png",
        imgAlt: "contact icon",
        title: "Our website",
        desc: "www.shopcart.com",
    },
];

const Contact = () => {
    return (
        <div>
            <PageHeader title={"Get In Touch With Us"} curPage={"Contact Us"} />
            <div className="map-address-section padding-tb section-bg">
                <div className="container">
                    <div className="section-header text-center">
                        <div className="subtitle">
                            <span className="subtitle">{subTitle}</span>
                            <h2 className="title">{title}</h2>
                        </div>

                        <div className="section-wrapper">
                            <div className="row flex-row-reverse">
                                <div className="col-xl-4 col-lg-5 col-12">
                                    <div className="contact-wrapper">
                                        {
                                            contactList.map((val, i) => (
                                                <div key={i} className="contact-item">
                                                    <div className="contact-thumb">
                                                        <img src={val.imgUrl} alt={val.imgAlt} />
                                                    </div>
                                                    <div className="contact-content">
                                                        <h6 className='title'>{val.title}</h6>
                                                        <p>{val.desc}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>

                                {/* google map */}
                                <div className="col-xl-8 col-lg-7 col-12">
                                    <GoogleMap/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-section padding-tb">
                <div className="container">
                    <div className="section-header text-center">
                        <span className='subtitle'>{conSubTitle}</span>
                        <h2 className="title">{conTitle}</h2>
                    </div>
                    <div className="section-wrapper">
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" name='name' placeholder="Your Name *"></input>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" name='email' placeholder="Your Email *"></input>
                            </div>
                            <div className="form-group">
                                <input type="number" className="form-control" id="number" name='number' placeholder="Phone Number *"></input>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="subject" name='subject' placeholder="Subject *"></input>
                            </div>
                            <div className="form-group w-100">
                                <textarea name="message" id="message" rows="8" placeholder='Your Message'></textarea>
                            </div>
                            <div className="form-group w-100 text-center">
                                <button className="lab-btn">
                                    <span>{btnText}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact