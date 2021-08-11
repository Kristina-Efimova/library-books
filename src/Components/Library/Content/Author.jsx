import S from './Content.module.css'
import avatar from '../../../img/avatar_author-lg.png'
import heartImg from '../../../img/heart.svg'
import favoriteActive from '../../../img/favoriteActive.svg'
import {ExitButton} from './ExitButoon/ExitButton'

export const Author = ({page, info, favorites, onFavorites, removeFavorite, changePage}) => {

  let favoriteStatus = favorites.filter(el => el.page.name === page.name).length === 1

  if (!page) {
    return (
      <h1>Выбери автора</h1>
    )
  }

  const addFavorites = () => {
    onFavorites(page, info)
  }
  const windowWidth = () =>{
    let w = window.innerWidth
    window.onresize = () => {
      w = window.innerWidth
    }

    return w
  }
  return (
    <div className={S.description}>
      {windowWidth() < 760 && <div>
        <ExitButton changePage={changePage} />
      </div>}
      <div className={S.top}>
        <div className={S.avatar}>
          {info.photos ?
            <img
              src={`http://covers.openlibrary.org/b/id/${info.photos[0]}-M.jpg`}
              alt='label' align='left'
              className={S.book} />
            :
            <img src={avatar} alt='автор' />
          }
        </div>
        <div className={S.content}>
          <h1 className={S.h1}>
            {page.name}
          </h1>
          <p>Дата рождения: {info.birth_date}</p>
          <p>Лучшая работа: {page.top_work} </p>
        </div>
      </div>
      {favoriteStatus ?
        <button onClick={() => removeFavorite(page.key)}>
          <img src={favoriteActive} alt='like' className={S.like_book} />
        </button>
        :
        <button onClick={addFavorites}>
          <img src={heartImg} alt='like' className={S.like_book} />
        </button>
      }
      <p className={S.p}>{info.bio.value} </p>
    </div>
  )
}