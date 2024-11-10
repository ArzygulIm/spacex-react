import {Link} from "react-router-dom";
import Header from "../../components/Header/Header.jsx";
import './Home.css';

const Home = () => {
    return (
        <section id={'home'}>
            <Header/>
            <div className="container">
                <div className="main__wrap">
                    <div className={"travel"}>
                        <h5>Путешествие</h5>
                        <p>на красную планету</p>
                        <div className="link-container">
                            <Link to={"/start"}>Начать путешествие</Link>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className="col-6">
                            <div className="main__box">
                                <p>мы</p>
                                <h6>1</h6>
                                <p>на рынке</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main__box">
                                <p>гарантируем</p>
                                <h6>50%</h6>
                                <p>безопасность</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main__box">
                                <p>календарик за</p>
                                <h6>2001г.</h6>
                                <p>в подарок</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main__box">
                                <p>путешествие</p>
                                <h6>597</h6>
                                <p>дней</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;