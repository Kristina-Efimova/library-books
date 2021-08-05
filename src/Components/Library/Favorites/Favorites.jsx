import S from './Favorites.module.css'
import heartImg from '../../../img/heart.svg'
import {AuthorsJSON} from '../../../Fetch/Authors'


export const Favorites = ({onData}) => {
    return (
        <div className={S.container }>
            <div className={S.favorites}>
                <img src={heartImg} alt="favorites icon"/>
                <span className={S.title}>Избранное</span>
            </div>
            <div className={S.category}>
                <ul className={S.category__list}>
                    <li className={S.category__item} onClick={() => onData(AuthorsJSON)}>
                        Авторы
                    </li>
                    <li className={S.category__item}>
                        Детективы
                    </li>
                </ul>
            </div>
        </div>
    );
};

