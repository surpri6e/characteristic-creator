import { getRandomNumber } from 'rkey';
import { TGender } from '../types/TGender';

export const forNegativeCharacteristic = (gender: TGender): string => {
   const phrasesMan = [
      'Не раз был замечен в компании так называемых "гопников".',
      'Устраивал общественные беспорядки на глазах очевидцев.',
      'Наблюдается у психиатра и психотеропевта.',
   ];

   const phrasesWoman = [
      'Не раз была замечена в компании так называемых "гопников".',
      'Устраивала общественные беспорядки на глазах очевидцев.',
      'Наблюдается у психиатра и психотеропевта.',
   ];

   return gender === 'man' ? phrasesMan[getRandomNumber(0, phrasesMan.length - 1)] : phrasesWoman[getRandomNumber(0, phrasesWoman.length - 1)];
};

export const forPositiveCharacteristic = (gender: TGender): string => {
   const phrasesMan = ['Данный человек умеет поднять настроение в компании.', 'Всегда трудолюбив и готов прийти на помощь'];

   const phrasesWoman = ['Данный человек умеет поднять настроение в компании.', 'Всегда трудолюбива и готова прийти на помощь'];

   return gender === 'man' ? phrasesMan[getRandomNumber(0, phrasesMan.length - 1)] : phrasesWoman[getRandomNumber(0, phrasesWoman.length - 1)];
};
