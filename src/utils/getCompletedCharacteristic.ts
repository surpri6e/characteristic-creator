import { TCharacteristicType } from '../types/TCharacteristicType';
import { TFamily } from '../types/TFamily';
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
   sport: string,
   good: string,
   bad: string,
   family: TFamily,
): string => {
   userName = userName[0].toUpperCase() + userName.slice(1, userName.length);
   surname = surname[0].toUpperCase() + surname.slice(1, surname.length);
   patronymic = patronymic[0].toUpperCase() + patronymic.slice(1, patronymic.length);

   sport = sport ? sport[0].toLowerCase() + sport.slice(1, sport.length) : '';
   good = good ? good[0].toLowerCase() + good.slice(1, good.length) : '';
   bad = bad ? bad[0].toLowerCase() + bad.slice(1, bad.length) : '';

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
               ${gender === 'man' ? 'Проходил' : 'Проходила'} обучение в образовательном учреждении: ${studyPlace}. В коллективе ${gender === 'man' ? 'чувствувовал' : 'чувствувовала'} неприязнь к окружающим.
               ${gender === 'man' ? 'Учился' : 'Училась'} на плохом уровне. На оценки - "2" и "3".
               Часто ${gender === 'man' ? 'прогуливал' : 'прогуливала'} занятия.`
            : 'Не имеет никакого образования.'
      }
      ${
         workPlace
            ? `
               От прошлых работадателей ${gender === 'man' ? 'получал' : 'получала'} только негативные характеристики. Не рекомендуется для приема на работу.
               Последнее место работы: ${workPlace}.`
            : 'Не имеет никакого места работы.'
      }


      В коллективе позиционирует себя доминантно.
   `;

   const newDate = dateHelper(
      `${new Date().getFullYear()}-${new Date().getMonth() + 1 < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1}-${new Date().getDate()}`,
   );

   return (
      `
         Характеристика на человека ${surname} ${userName} ${patronymic}. Пол - ${gender === 'man' ? 'мужской' : 'женский'}.
         ${gender === 'man' ? 'Он родился' : 'Она родилась'} ${normalDate.day} ${normalDate.month} в ${normalDate.year} году. 
         Из ${family === '+' ? 'благополучной, обеспеченной' : 'неблагополучной'} семьи.
         ${type === '+' ? positiveCharacteristic : negativeCharacteristic}
         ${sport ? `Любимым видом спорта является - ${sport}` : 'Любимый вид спорта не выявлен'}.
         ${address ? `Проживает по адресу: ${address}.` : `Не имеет постоянного места проживания.`}
         Из положительных качеств можно выявить: ${good}. Отрицательные: ${bad}.
      `.replace(/\s+/g, ' ') + `\n\nДата создания: ${newDate.day} ${newDate.month} ${newDate.year} года.`
   );
};
