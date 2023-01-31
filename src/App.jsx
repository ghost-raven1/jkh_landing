import "./styles/app.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import {
  getNewsListAsync,
  getServicesListAsync,
} from "./store/reducers/common/catalog.js";
import AppServiceCard from "./components/AppServiceCard/AppServiceCard.jsx";
import AppSlider from "./components/AppSlider/AppSlider.jsx";

function App() {
  const dispatch = useDispatch();

  const { servicesList, servicesListCount, newsList } =
    useSelector((state) => state.commonCatalog);

  useLayoutEffect(() => {
    dispatch(getServicesListAsync({ page: 1, page_size: 15 }));
    dispatch(getNewsListAsync({ page: 1, page_size: 15 }));
  }, []);

  return (
      <div className="app">
        <div className="app__header header">
          <div className="header__logo">
            <img className="logo" src="src/assets/icons/logo.svg" alt="" />
            <h1 className="header__title">Сахаспецтранс</h1>
          </div>
          <div className="header__links links">
            <a className="links__link" href="https://corp.ss-trans.tech/" target="_blank">Для Юр.лиц</a>
          </div>
        </div>
        <div className="app__body body">
          <div className="body__services services">
            <h2 className="services__title">Список услуг:</h2>
            <div className="services__list">
                {!!servicesListCount && servicesList.map((service, idx) => {
                    return (
                        <AppServiceCard key={idx} service={service} />
                    )
                })}
            </div>
          </div>
          <div className="body__news news">
            <h2 className="news__title">Жизнь организации:</h2>
            <div className="news__list">
              <AppSlider itemsArr={newsList} height="100%" width="100%" />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
