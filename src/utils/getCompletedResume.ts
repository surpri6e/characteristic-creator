export const getCompletedResume = (userName: string, surname: string, patronymic: string) => {
   userName = userName[0].toUpperCase() + userName.slice(1, userName.length);
   surname = surname[0].toUpperCase() + surname.slice(1, surname.length);
   patronymic = patronymic[0].toUpperCase() + patronymic.slice(1, patronymic.length);

   return `
    Здравствуйте, меня зовут ${userName} ${surname} ${patronymic} мне ... лет, я родилась в городе  
    `;
};
