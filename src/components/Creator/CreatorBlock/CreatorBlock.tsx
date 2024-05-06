import { FC } from 'react';
import './CreatorBlock.scss';

interface ICreatorBlock {
   text: string;

   type: React.HTMLInputTypeAttribute;

   value: string;
   setValue: React.Dispatch<React.SetStateAction<string>>;

   error?: boolean;
}

const CreatorBlock: FC<ICreatorBlock> = ({ text, type, value, setValue, error }) => {
   return (
      <div className='creator_block'>
         <p>{text}</p>
         <input type={type} value={value} onChange={(e) => setValue(e.target.value)} className={error ? 'creator--error' : ''} />
      </div>
   );
};

export default CreatorBlock;
