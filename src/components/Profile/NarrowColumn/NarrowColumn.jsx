import React from 'react';
import s from './NarrowColumn.module.scss';
import { NavLink } from 'react-router-dom';

const NarrowColumn = props => {
    return (
        <div className={s.narrowColumn}>
            <div className={s.narrowColumnAvatar}>
                <NavLink to={'./'}>
                    <img src="/assets/icons/arrow-left.svg" className={s.arrowLeft} alt="icon: arrow left" />
                </NavLink>
                <div>
                    <img className={s.avatar} alt="image: employee avatar" src={props.data.avatarSrc} />
                    <div className={props.edit.isEdit ? s.hidden : ''}>
                        <div className={s.gender}>{props.data.gender}</div>
                        <div className={s.nameEn}>{`${props.data.firstName} ${props.data.lastName}`}</div>
                        <div className={s.nameRu}>
                            {`${props.data.firstNameNative} ${props.data.middleNameNative} ${props.data.lastNameNative}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NarrowColumn;
