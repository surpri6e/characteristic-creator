import { useState } from 'react';
import './Creator.scss';
import { getCompletedCharacteristic } from '../../utils/getCompletedCharacteristic';
import { TGender } from '../../types/TGender';
import CreatorBlock from './CreatorBlock/CreatorBlock';
import { ThrowError } from '../../api/throwError';
import { TCharacteristicType } from '../../types/TCharacteristicType';

const Creator = () => {
   const [name, setName] = useState('');
   const [surname, setSurname] = useState('');
   const [patronymic, setPatronymic] = useState('');
   const [date, setDate] = useState('');

   const [address, setAddress] = useState('');
   const [studyPlace, setStudyPlace] = useState('');
   const [workPlace, setWorkPlace] = useState('');

   const [gender, setGender] = useState<TGender>('man');
   const [type, setType] = useState<TCharacteristicType>('-');

   console.log(type);

   const [completedCharacteristic, setCompletedCharacteristic] = useState('Она будет здесь...');

   const [nameError, setNameError] = useState(false);
   const [surnameError, setSurnameError] = useState(false);
   const [patronymicError, setPatronymicError] = useState(false);
   const [dateError, setDateError] = useState(false);

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

         {/* <CreatorBlock error={dateError} setValue={setDate} value={date} text='Ключевые навыки: ' type='date' />
         <CreatorBlock error={dateError} setValue={setDate} value={date} text='Спорт: ' type='date' />
         <CreatorBlock error={dateError} setValue={setDate} value={date} text='Место рождения: ' type='date' />
         <CreatorBlock error={dateError} setValue={setDate} value={date} text='Хорошие качества ' type='date' />
         <CreatorBlock error={dateError} setValue={setDate} value={date} text='Плохие качества ' type='date' />
         <CreatorBlock error={dateError} setValue={setDate} value={date} text='Какой цитатой можно описать человека ' type='date' />
         //
         <CreatorBlock error={dateError} setValue={setDate} value={date} text='Отношение к курению и  ' type='date' /> */}
         <button
            className='creator_button'
            onClick={() => {
               ThrowError.checkOnSize(name, setNameError);
               ThrowError.checkOnSize(surname, setSurnameError);
               ThrowError.checkOnSize(patronymic, setPatronymicError);
               ThrowError.checkOnSize(date, setDateError);

               if (
                  !ThrowError.checkOnSize(name, setNameError) &&
                  !ThrowError.checkOnSize(surname, setSurnameError) &&
                  !ThrowError.checkOnSize(patronymic, setPatronymicError) &&
                  !ThrowError.checkOnSize(date, setDateError)
               ) {
                  setCompletedCharacteristic(getCompletedCharacteristic(name, surname, patronymic, date, gender, type, address, studyPlace, workPlace));
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
