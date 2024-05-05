import { useState } from 'react';
import './Creator.scss';
import { getCompletedResume } from '../../utils/getCompletedResume';

const Creator = () => {
   const [name, setName] = useState('');
   const [surname, setSurname] = useState('');
   const [patronymic, setPatronymic] = useState('');

   const [completedResume, setCompletedResume] = useState('');

   return (
      <div className='creator'>
         <div className='creator_block'>
            <p>Введите свое имя: </p>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
         </div>

         <div className='creator_block'>
            <p>Введите свою фамилию: </p>
            <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} />
         </div>

         <div className='creator_block'>
            <p>Введите свое отчество: </p>
            <input type='text' value={patronymic} onChange={(e) => setPatronymic(e.target.value)} />
         </div>

         <button
            className='creator_button'
            onClick={() => {
               setCompletedResume(getCompletedResume(name, surname, patronymic));
            }}
         >
            Составить резюме
         </button>

         <div className='creator_result'>
            <p>Ваше готовое резюме: </p>
            <p>{completedResume}</p>
         </div>
      </div>
   );
};

export default Creator;
