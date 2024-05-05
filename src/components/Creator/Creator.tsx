import { useState } from 'react';
import './Creator.scss';
import { getCompletedCharacteristic } from '../../utils/getCompletedCharacteristic';

const Creator = () => {
   const [name, setName] = useState('');
   const [surname, setSurname] = useState('');
   const [patronymic, setPatronymic] = useState('');
   const [years, setYears] = useState('');

   const [gender, setGender] = useState<'man' | 'woman'>('man');

   const [completedCharacteristic, setCompletedCharacteristic] = useState('Она будет здесь...');

   const [nameError, setNameError] = useState(false);
   const [surnameError, setSurnameError] = useState(false);
   const [patronymicError, setPatronymicError] = useState(false);
   const [yearsError, setYearsError] = useState(false);

   return (
      <div className='creator'>
         <div className='creator_block'>
            <p>Введите имя: </p>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} className={nameError ? 'creator--error' : ''} />
         </div>

         <div className='creator_block'>
            <p>Введите фамилию: </p>
            <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} className={surnameError ? 'creator--error' : ''} />
         </div>

         <div className='creator_block'>
            <p>Введите отчество: </p>
            <input type='text' value={patronymic} onChange={(e) => setPatronymic(e.target.value)} className={patronymicError ? 'creator--error' : ''} />
         </div>

         <div className='creator_block'>
            <p>День и месяц рождения: </p>
            <input type='date' />
         </div>

         <div className='creator_block'>
            <p>Введите кол-во лет: </p>
            <input type='number' value={years} onChange={(e) => setYears(e.target.value)} className={yearsError ? 'creator--error' : ''} />
         </div>

         <div className='creator_block'>
            <p>Пол человека: </p>
            <select value={gender} onChange={(e) => setGender(e.target.value as 'man' | 'woman')}>
               <option value='man'>Мужской</option>
               <option value='woman'>Женский</option>
            </select>
         </div>

         <button
            className='creator_button'
            onClick={() => {
               if (name.length === 0 || name.length > 100) {
                  setNameError(true);
                  setTimeout(() => setNameError(false), 1000);
               }

               if (surname.length === 0 || surname.length > 100) {
                  setSurnameError(true);
                  setTimeout(() => setSurnameError(false), 1000);
               }

               if (patronymic.length === 0 || patronymic.length > 100) {
                  setPatronymicError(true);
                  setTimeout(() => setPatronymicError(false), 1000);
               }

               if (years.length === 0 || Number(years) <= 0 || Number(years) > 120) {
                  setYearsError(true);
                  setTimeout(() => setYearsError(false), 1000);
               }

               if (
                  !(name.length === 0 || name.length > 100) &&
                  !(surname.length === 0 || surname.length > 100) &&
                  !(patronymic.length === 0 || patronymic.length > 100) &&
                  !(years.length === 0 || Number(years) <= 0 || Number(years) > 120)
               )
                  setCompletedCharacteristic(getCompletedCharacteristic(name, surname, patronymic, years, gender));
            }}
         >
            Составить хар-ку
         </button>

         <div className='creator_result'>
            <p>Готовая характеристика: </p>
            <p>{completedCharacteristic}</p>
         </div>

         <button
            className='creator_button'
            onClick={() => {
               navigator.clipboard.writeText(completedCharacteristic);
            }}
         >
            Скопировать хар-ку
         </button>
      </div>
   );
};

export default Creator;
