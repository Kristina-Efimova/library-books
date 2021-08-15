import S from './Header.module.css'
import bookImg from '../../../img/book.png'
import {Dispatch, FC, PropsWithChildren, ReactNode, SetStateAction} from 'react'

interface PropsType  {
  sidebar: boolean,
    //todo: лучше уж просто (open: boolean) => void
  onSidebar: Dispatch<SetStateAction<boolean>>,
    //todo FC сам добавит children, здесь они не нужны
  children?: ReactNode,
}
export const Header : FC<PropsType> = ({sidebar,onSidebar})=> {
  return (
    <header className={S.header}>
      <img src={bookImg} alt='label' />
      <h1 className={S.title}>Library</h1>
      <button onClick={() => onSidebar(!sidebar)} className={sidebar ? S.burger + ' ' + S.active : S.burger}>
        <span></span>
      </button>
    </header>
  )
}

