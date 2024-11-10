import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header.jsx";
import "./Technology.css"
import RenderComponent from "../../components/RenderComponent/RenderComponent.jsx";

const Technology = () => {
    const [technologies, setTechnologies] = useState([])
    const [navValue, setNavValue] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const technologiesResponse = await axios.get('http://127.0.0.1:8000/api/technology/')
            setTechnologies(technologiesResponse.data)
        } catch (err) {
            console.log(err)
            setError('Ошибка при загрузке данных');
        } finally {
            setLoading(false);
        }
    };

    const fetchRockets = async () => {
        try {
            const rocketsResponse = await axios.get('http://127.0.0.1:8000/api/rockets/');
            setTechnologies(rocketsResponse.data)

        } catch (err) {
            console.log(err)
            setError('Ошибка при загрузке данных');
        } finally {
            setLoading(false);
        }
    };

    const fetchSatellites = async () => {
        try {
            const satellitesResponse = await axios.get('http://127.0.0.1:8000/api/satellites/');
            setTechnologies(satellitesResponse.data)
        } catch (err) {
            console.log(err)
            setError('Ошибка при загрузке данных');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>{error}</p>;

    console.log(technologies)
    return (
        <div>
            <Header/>
            <div className="tech__wrap">
                <div className="container">
                    <div className="tech-btns__wrap">
                        <button className={'tech__btns'} onClick={fetchData}>Все</button>
                        <button className={'tech__btns'} onClick={fetchRockets}>Ракеты</button>
                        <button className={'tech__btns'} onClick={fetchSatellites}>Спутники</button>
                    </div>
                    <RenderComponent data={technologies}/>
                </div>
            </div>

        </div>
    );
};

export default Technology;