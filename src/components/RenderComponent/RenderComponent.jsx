import React from 'react';

const RenderComponent = ({data}) => {
    return (
        <div className="row">
            {data && data.map(el => {
                return (
                    <div className="col-3" key={el.id}>
                        <div className="tech__box">
                            <img src={`${el.image}`} alt=""/>
                            <h6>{`Имя: ${el.name}`}</h6>
                            <p>{`Описание: ${el.description}`}</p>

                            {el.mission_type ? <p>{`Миссия: ${el.mission_type}`}</p> : null}
                            {el.mass || el.diameter || el.height ? <div>
                                <span>{`Масса: ${el.mass}`}</span>
                                <span>{`Высота: ${el.height}`}</span>
                                <span>{`Диаметр: ${el.diameter}`}</span>
                            </div> : null}

                            {el.country ? <p>{`Страна: ${el.country}`}</p> : null}

                            {el.orbit_type?<p>{`Тип орбиты: ${el.orbit_type}`}</p>:null}

                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default RenderComponent;