import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams();
    // console.log(id);
    const result = blog.filter((b) => b.id === Number(id));
    // console.log(result);

    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                        <p>Ratione aperiam doloremque totam dolore reprehenderit, iusto quis explicabo recusandae pariatur ab quo harum voluptas voluptatem at earum eos, voluptate fugiat laudantium ad iure praesentium molestias excepturi debitis. Sint corporis dolore perferendis labore ipsum alias deserunt cupiditate eius veniam. Non cumque placeat itaque molestias consequatur. Quas soluta amet velit laboriosam, veritatis reiciendis natus ratione quo blanditiis mollitia eius obcaecati ut porro inventore impedit repellendus illum! Aspernatur magni, maiores cumque quasi placeat esse exercitationem dolorem sapiente ratione. Numquam veritatis omnis optio ipsum tempore commodi dolore voluptates non molestias perferendis! Vitae aliquam ab nisi quidem nemo harum cupiditate, sit atque consequuntur suscipit consectetur quis.</p>
                                                                        <blockquote>
                                                                            <p>Dynamically recaptiualize distributed technologies is whereas trunkey channels and automically provide access ro resource levelling expertise vias worldwide deliverables uplisticly extend aserese are idverse vortals.</p>
                                                                            <cite>
                                                                                <a href="#">...Melissa Hunter</a>
                                                                            </cite>
                                                                        </blockquote>
                                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus debitis adipisci alias odit aperiam voluptatum, nostrum officia fuga, vitae magni aliquid praesentium autem? Ducimus praesentium molestiae, nemo consequatur tempora facere?</p>
                                                                        <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus debitis adipisci alias odit aperiam voluptatum, nostrum officia fuga, vitae magni aliquid praesentium autem? Ducimus praesentium molestiae, nemo consequatur tempora facere?</p>

                                                                        <div className="video-thumb">
                                                                            <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                            <a href="https://youtu.be/kmy_YNhl0mw" className='video-button popup' target='_blank'>
                                                                                <i className='icofont-ui-play'></i>                                                  </a>
                                                                        </div>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum beatae doloremque id, sapiente dignissimos quaerat saepe sequi deserunt recusandae illum nam? Nam praesentium rem quaerat? Corporis esse necessitatibus numquam eum.</p>
                                                                        <div className="tags-section">
                                                                            <ul className="tags lab-ul">
                                                                                <li>
                                                                                    <a href="#">Agency</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">Business</a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#">Personal</a>
                                                                                </li>
                                                                            </ul>
                                                                            <ul className="lab-ul social-icons">
                                                                                {

                                                                                    socialList.map((val, i) => (
                                                                                        <li key={i}>
                                                                                            <a href="#" className={val.className}>
                                                                                                <i className={val.iconName}></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    ))}
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div className="navigations-part">
                                            <div className="left">
                                                <a href="#" className='prev'>
                                                    <i className='icofont-double-left'></i> Previous Blog
                                                </a>
                                                <a href="#" className='title'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat?
                                                </a>
                                            </div>
                                            <div className="right">
                                                <a href="#" className='next'>
                                                    <i className='icofont-double-right'></i> Next Blog
                                                </a>
                                                <a href="#" className='title'>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quaerat?
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tags/>
                                <PopularPost/>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog