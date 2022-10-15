import React from 'react'
import './SelectStyles.css'

import BoraBora from '../../Assets/assets/borabora.jpg'
import BoraBora2 from '../../Assets/assets/borabora2.jpg'
import Maldives from '../../Assets/assets/maldives.jpg'
import Maldives2 from '../../Assets/assets/maldives2.jpg'
import Maldives3 from '../../Assets/assets/maldives3.jpg'
import KeyWest from '../../Assets/assets/keywest.jpg'

import SelectsImg from '../SelectsImg/SelectsImg'


function Selects() {
    return (
        <div name='views' className='selects'>
            <div className='container'>
            <SelectsImg bgImg={BoraBora} text='Bora Bora' />
                <SelectsImg bgImg={BoraBora2} text='Emerald Bay' />
                <SelectsImg bgImg={Maldives} text='Maldives' />
                <SelectsImg bgImg={Maldives2} text='Grenada' />
                <SelectsImg bgImg={Maldives3} text='Barbados' />
                <SelectsImg bgImg={KeyWest} text='Key West' />
            </div>

        </div>
    )
}

export default Selects