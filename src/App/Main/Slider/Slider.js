import React from 'react'

const Slider = () => {
    return (
        <section className="slider pos-rel">
            <div className="container">
                <div className="row slider-row">
                    <div className="slider-content">
                        <div className="col-xs-12 col-sm-10 col-lg-8" data-scroll-discover="true">
                            <p className="name">Agro</p>
                            <h2 className="title text-white">Farming company</h2>
                            <p className="text-center">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
                            </p>
                            <div className="slider__btn">
                                <a href="/" className=" btn btn-discover">discover</a>
                            </div>
                            <div className="slider__btn_space-below"></div>
                        </div>
                    </div>
                </div>
            </div>
            <span className="scroll-discover"></span>
        </section>  
    )
}

export default Slider