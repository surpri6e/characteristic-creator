import { TGender } from '../types/TGender';
import { dateHelper } from './dateHelper';

export const getCompletedCharacteristic = (userName: string, surname: string, patronymic: string, date: string, gender: TGender): string => {
   userName = userName[0].toUpperCase() + userName.slice(1, userName.length);
   surname = surname[0].toUpperCase() + surname.slice(1, surname.length);
   patronymic = patronymic[0].toUpperCase() + patronymic.slice(1, patronymic.length);

   const normalDate = dateHelper(date);

   return `
    Характеристика на человека ${userName} ${surname} ${patronymic}. Пол - ${gender === 'man' ? 'мужской' : 'женский'}.\n
    ${gender === 'man' ? 'Он родился' : 'Она родилась'} ${normalDate.day} ${normalDate.month} в ${normalDate.year} году.\n 
    `;
};
