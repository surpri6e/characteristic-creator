import { TCharacteristicType } from '../types/TCharacteristicType';
import { TGender } from '../types/TGender';
import { dateHelper } from './dateHelper';
import { forNegativeCharacteristic, forPositiveCharacteristic } from './randomPart';

export const getCompletedCharacteristic = (
   userName: string,
   surname: string,
   patronymic: string,
   date: string,
   gender: TGender,
   type: TCharacteristicType,
   address: string,
   studyPlace: string,
   workPlace: string,
): string => {
   userName = userName[0].toUpperCase() + userName.slice(1, userName.length);
   surname = surname[0].toUpperCase() + surname.slice(1, surname.length);
   patronymic = patronymic[0].toUpperCase() + patronymic.slice(1, patronymic.length);

   const normalDate = dateHelper(date);

   const positiveCharacteristic = `
      Отношение к спиртным напиткам и курению - резко негативное. Ведет здоровый образ жизни. ${forPositiveCharacteristic(gender)}
      ${
         studyPlace
            ? `
               ${gender === 'man' ? 'Проходил' : 'Проходила'} обучение в образовательном учреждении: ${studyPlace}. В коллективе ${gender === 'man' ? 'чувствувовал' : 'чувствувовала'} себя свободно.
               ${gender === 'man' ? 'Учился' : 'Училась'} на отличном уровне. На оценки - "4" и "5".
               Ни разу не ${gender === 'man' ? 'прогуливал' : 'прогуливала'} занятия.`
            : 'Не имеет никакого образования.'
      }
      ${
         workPlace
            ? `
               От прошлых работадателей ${gender === 'man' ? 'получал' : 'получала'} только положительные характеристики. Крайне рекомендуется для приема на работу.
               Имеет обширные знания в области и огромный опыт.
               Последнее место работы: ${workPlace}.`
            : 'Не имеет никакого места работы.'
      }


      В коллективе позиционирует себя лидирующе.
   `;

   const negativeCharacteristic = `
      Отношение к спиртным напиткам и курению - положительное. ${gender === 'man' ? 'Склонен' : 'Склонена'} к психопатии и нервным срывам. ${forNegativeCharacteristic(gender)}
      ${
         studyPlace
            ? `
               ${gender === 'man' ? 'Проходил' : 'Проходила'} обучение в образовательном учреждении: ${studyPlace}. В коллективе ${gender === 'man' ? 'чувствувовал' : 'чувствувовала'} себя загноно.
               ${gender === 'man' ? 'Учился' : 'Училась'} на плохом уровне. На оценки - "2" и "3".
               Часто ${gender === 'man' ? 'прогуливал' : 'прогуливала'} занятия.`
            : 'Не имеет никакого образования.'
      }
      ${
         workPlace
            ? `
               От прошлых работадателей ${gender === 'man' ? 'получал' : 'получала'} только негативный характеристики. Не рекомендуется для приема на работу.
               Последнее место работы: ${workPlace}.`
            : 'Не имеет никакого места работы.'
      }


      В коллективе позиционирует себя доминантно.
   `;

   return (
      `
         Характеристика на человека ${userName} ${surname} ${patronymic}. Пол - ${gender === 'man' ? 'мужской' : 'женский'}.
         ${gender === 'man' ? 'Он родился' : 'Она родилась'} ${normalDate.day} ${normalDate.month} в ${normalDate.year} году. 
         ${type === '+' ? positiveCharacteristic : negativeCharacteristic}
         ${address ? `Проживает по адресу: ${address}.` : `Не имеет постоянного места проживания.`}
      `.replace(/\s+/g, ' ') + `\nДата создания: ${'06.05.2024'}`
   );
};
