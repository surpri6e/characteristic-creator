const yearsHelper = (years: string): string => {
   if (years === '1') return 'год';
   if (years === '2' || years === '3' || years === '4') return 'года';

   return 'лет';
};

export const getCompletedCharacteristic = (userName: string, surname: string, patronymic: string, years: string, gender: 'man' | 'woman'): string => {
   userName = userName[0].toUpperCase() + userName.slice(1, userName.length);
   surname = surname[0].toUpperCase() + surname.slice(1, surname.length);
   patronymic = patronymic[0].toUpperCase() + patronymic.slice(1, patronymic.length);

   return `
    Характеристика на человека ${userName} ${surname} ${patronymic}. Пол - ${gender === 'man' ? 'мужской' : 'женский'}.\n
    ${gender === 'man' ? 'Он родился' : 'Она родилась'} в ${new Date().getFullYear() - 1 - Number(years)} году. 
    На данный момент ${gender === 'man' ? 'ему' : 'ей'} ${years} ${yearsHelper(years)}.\n
    `;
};
