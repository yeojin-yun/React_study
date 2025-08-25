function AboutPage() {
    return <div>
        <div className="About">
            <h1>소개 페이지</h1>
        <button className="About-buttn">Login</button>
        <button className="About-buttn">Sign up</button>
        </div>
        <div className="About-size-containger">
            <button className="About-size-px">px-buttn</button>
            <button className="About-size-percent">percent-buttn</button>
            <button className="About-size-vw">vw-buttn</button>
        </div>
    </div>
}

export default AboutPage;