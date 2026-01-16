import React from "react";
import { NavLink } from "react-router-dom";
import "./RegistrDetails.scss";

const Registrdetails = () => {
  return (
    <div id="details">
      <div className="container">
        <div className="details">
          <div className="details--punkt" data-aos = "fade-right">
            <div className="h1">
              <h1>Преимущества членства</h1>
            </div>
            <div className="p">
              <p>
                ✓ Find something to watch on <br /> your subscribed streaming{" "}
                <br /> services
              </p>{" "}
              <br />
              <p>
                ✓ Журналировать <br /> отслеживаемые фильмы и <br />{" "}
                телепередачи
              </p>{" "}
              <br />
              <p>
                ✓ Отслеживать избранные <br /> фильмы и сериалы и <br />
                получать на их основе <br /> рекомендации
              </p>{" "}
              <br />
              <p>
                ✓ Создание и ведение <br /> персонального списка <br />{" "}
                отслеживания
              </p>{" "}
              <br />
              <p>
                ✓ Создание собственных <br /> смешанных списков <br />
                (фильмы и ТВ)
              </p>{" "}
              <br />
              <p>
                ✓ Участие в обсуждениях <br /> фильмов и телепередач
              </p>{" "}
              <br />
              <p>
                ✓ Внесение и улучшение <br />
                информации в нашей базе <br /> данных
              </p>
            </div>
          </div>
          <div className="details--inputs" data-aos = "fade-left">
            <h1>Зарегистрировать учётную запись</h1>
            <p>
              Создание учётной записи свободно и просто. Заполните форму ниже,
              чтобы начать. Для продолжения требуется JavaScript.
            </p>
            <div className="inputs-1">
              <div className="input">
                <h6>Имя пользователя</h6>
                <input type="text" />
              </div>
              <div className="input">
                <h6>Пароль (4 characters minimum) </h6>
                <input type="password" />
              </div>
              <div className="input">
                <h6>Подтверждение пароля</h6>
                <input type="password" />
              </div>
              <div className="input">
                <h6>Э-почта</h6>
                <input type="email" />
              </div>
            </div>
            <p>
              Нажимая кнопку «Зарегистрироваться» ниже, я подтверждаю, что я
              прочитал и согласен с Условиями использования TMDB и Политикой
              <br /> конфиденциальности.
            </p>
            <div className="btns">
              <button className="btns1">Регистрация</button>
              <button className="btns2">
                <NavLink to={"/"}>Отменить</NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrdetails;
