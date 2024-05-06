import { IDate } from '../types/IDate';

const monthHelper = {
   '01': 'января',
   '02': 'февраля',
   '03': 'марта',
   '04': 'апреля',
   '05': 'мая',
   '06': 'июня',
   '07': 'июля',
   '08': 'августа',
   '09': 'сентября',
   '10': 'октября',
   '11': 'ноября',
   '12': 'декабря',
};

export const dateHelper = (date: string): IDate => {
   const arr = date.split('-');

   const year = arr[0];
   const day = arr[2][0] === '0' ? arr[2][1] : arr[2];

   const month = monthHelper[arr[1] as '01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12'];

   return {
      year,
      day,
      month,
   };
};
