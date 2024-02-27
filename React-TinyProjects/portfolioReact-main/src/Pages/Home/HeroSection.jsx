export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I am Facundo Allende </p>
                    <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Full Stack Developer</span>
                    </h1>
                    <p className="hero--section--description">
                    Programmer passionate about software development and technological solutions. Committed to daily learning to improve my skills!!!
                    <br /> 
                    </p>
                </div>
                
                <a href="https://wa.link/u00jug">                
                    <button className="btn btn--primary" >Get in touch</button>
                </a>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.jpg" alt="Hero Section" />
            </div>
        </section>   
        )
}