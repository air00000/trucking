import React, {FC} from 'react'
import style from "./SelectField.module.scss"

const SelectField: FC = () => {

    return (<>
        <label className={style.label}>Куда</label>
        <div className={style.input_wrapper}>
            <select id="countries"
                    className={style.select}>
                <option selected>Выберите город</option>
                <option value="1">Москва</option>
                <option value="2">Казань</option>
                <option value="3">Набережные Челны</option>
            </select>
        </div>
    </>)
}

export default SelectField
