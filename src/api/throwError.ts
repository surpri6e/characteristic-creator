export class ThrowError {
   public static checkOnSize = (value: string, setValue: React.Dispatch<React.SetStateAction<boolean>>) => {
      if (value.length === 0 || value.length > 100) {
         setValue(true);
         setTimeout(() => setValue(false), 1000);
      }

      return value.length === 0 || value.length > 100;
   };
}
