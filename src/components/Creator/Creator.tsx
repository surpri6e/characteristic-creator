import { useState } from 'react';
import './Creator.scss';
import { getCompletedCharacteristic } from '../../utils/getCompletedCharacteristic';
import { TGender } from '../../types/TGender';
import CreatorBlock from './CreatorBlock/CreatorBlock';
import { ThrowError } from '../../api/throwError';
import { TCharacteristicType } from '../../types/TCharacteristicType';
import { TFamily } from '../../types/TFamily';

const Creator = () => {
   // Values
   const [name, setName] = useState('');
   const [surname, setSurname] = useState('');
   const [patronymic, setPatronymic] = useState('');
   const [date, setDate] = useState('');
   const [good, setGood] = useState('');
   const [bad, setBad] = useState('');

   // Values error
   const [nameError, setNameError] = useState(false);
   const [surnameError, setSurnameError] = useState(false);
   const [patronymicError, setPatronymicError] = useState(false);
   const [dateError, setDateError] = useState(false);
   const [goodError, setGoodError] = useState(false);
   const [badError, setBadError] = useState(false);

   // Optional values
   const [address, setAddress] = useState('');
   const [studyPlace, setStudyPlace] = useState('');
   const [workPlace, setWorkPlace] = useState('');
   const [sport, setSport] = useState('');

   // Select values
   const [gender, setGender] = useState<TGender>('man');
   const [type, setType] = useState<TCharacteristicType>('-');
   const [family, setFamily] = useState<TFamily>('+');

   // Result
   const [completedCharacteristic, setCompletedCharacteristic] = useState('Она будет здесь...');

   return (
      <div className='creator'>
         <CreatorBlock error={nameError} setValue={setName} value={name} text='Имя: ' type='text' />
         <CreatorBlock error={surnameError} setValue={setSurname} value={surname} text='Фамилия: ' type='text' />
         <CreatorBlock error={patronymicError} setValue={setPatronymic} value={patronymic} text='Отчество: ' type='text' />
         <CreatorBlock error={dateError} setValue={setDate} value={date} text='Дата рождения: ' type='date' />

         <div className='creator_block'>
            <p>Пол человека: </p>
            <select value={gender} onChange={(e) => setGender(e.target.value as TGender)}>
               <option value='man'>Мужской</option>
               <option value='woman'>Женский</option>
            </select>
         </div>

         <div className='creator_block'>
            <p>Тип характеристики: </p>
            <select value={type} onChange={(e) => setType(e.target.value as TCharacteristicType)}>
               <option value='-'>Отрицательный</option>
               <option value='+'>Положительный</option>
            </select>
         </div>

         <CreatorBlock setValue={setAddress} value={address} text='Место жительства: ' type='text' />

         <CreatorBlock setValue={setWorkPlace} value={workPlace} text='Место работы: ' type='text' />
         <CreatorBlock setValue={setStudyPlace} value={studyPlace} text='Место обучения: ' type='text' />

         <CreatorBlock setValue={setSport} value={sport} text='Спорт: ' type='text' />
         <CreatorBlock error={goodError} setValue={setGood} value={good} text='Хорошие качества(Вин. п): ' type='text' />
         <CreatorBlock error={badError} setValue={setBad} value={bad} text='Плохие качества: ' type='text' />

         <div className='creator_block'>
            <p>Семья: </p>
            <select value={family} onChange={(e) => setFamily(e.target.value as TFamily)}>
               <option value='+'>Благополучная</option>
               <option value='-'>Неблагополучная</option>
            </select>
         </div>

         <button
            className='creator_button'
            onClick={() => {
               ThrowError.checkOnSize(name, setNameError);
               ThrowError.checkOnSize(surname, setSurnameError);
               ThrowError.checkOnSize(patronymic, setPatronymicError);
               ThrowError.checkOnSize(date, setDateError);
               ThrowError.checkOnSize(good, setGoodError);
               ThrowError.checkOnSize(bad, setBadError);

               if (
                  !ThrowError.checkOnSize(name, setNameError) &&
                  !ThrowError.checkOnSize(surname, setSurnameError) &&
                  !ThrowError.checkOnSize(patronymic, setPatronymicError) &&
                  !ThrowError.checkOnSize(good, setGoodError) &&
                  !ThrowError.checkOnSize(bad, setBadError) &&
                  !ThrowError.checkOnSize(date, setDateError)
               ) {
                  setCompletedCharacteristic(
                     getCompletedCharacteristic(name, surname, patronymic, date, gender, type, address, studyPlace, workPlace, sport, good, bad, family),
                  );
               }
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
