import { useEffect } from "react";

function App() {
  useEffect(() => {
    //! TypeScript örneklerimi bu kısımda sırayla yorum satırlarına alarak yazıyorum.
    //? Temel tipler -> string, number, boolean
    //? any -> ne atanırsa onu al
    // let firstName: string = "Gizem";
    // let age: number = 22;
    // let result: boolean = true;
    // let x: undefined = undefined;
    // let y: null = null;
    // let age: any = "25";
    // let age: any = true;
    //? Union Types | --> o da olabilir o da olabilir dememizi sağlıyor.
    // let age: string | number = "25";
    // let age: string | number = 25;
    //? Literal Types --> şu değerlerden bir tanesi setlenebilir demek için kullanılıyor.
    // let statusResult: "pending" | "approved" | "rejected";
    //? Array --> :number[] veya :Array<number> şeklinde tanımlanabilir.
    // let names: string[] = ["Gizem", "Sena", "Bera"];
    // let numbers: number[] = [1, 2, 3, 4];
    // let mixedArray: (string | number)[] = ["Gizem", "Sena", "Bera"];
    //? type --> kendi tipimizi oluşturmamızı sağlar.
    // type User = {
    //   name: string;
    //   age: number;
    // };
    // const obj1: User = {
    //   name: "Gizem",
    //   age: 22,
    // };
    // let array: User[] = [{ name: "Gizem", age: 22 }];
    //? interface --> kendi tipimizi oluşturmamızı sağlar.
    //? interface ve type ın arasındaki fark (=) eşittir işareti kulanımı
    // interface User {
    //   name: string;
    //   age: number;
    // }
    // const obj2: User = {
    //   name: "Gizem",
    //   age: 22,
    // };
    //? optional type --> ? hangisinin yanında ? varsa onu kullansada olur kullanmasada olur demektir.
    // interface User {
    //   name: string;
    //   age?: number;
    // }
    // const obj3: User = {
    //   name: "Gizem",
    // };
    //? Function
    //? 3. :number returndan dönen cevabın type'ını belirliyor
    // function topla(a: number, b: number): number | string {
    //   return a + b;
    // }
    // function write(array: Array<string>): void {
    //   array.forEach((value: string) => console.log(value));
    // }
    // let array: Array<string> = ["Gizem", "Sena", "Bera"];
    // write(array);
    // interface User {
    //   name: string;
    //   age: number;
    // }
    // function writeConsole(array: Array<User>): void {
    //   array.forEach((value: User) => console.log(value.name));
    // }
    // const obj1: User = {
    //   name: "Gizem",
    //   age: 22,
    // };
    // const obj2: User = {
    //   name: "Sena",
    //   age: 22,
    // };
    // let myArray: Array<User> = [obj1, obj2];
    // writeConsole(myArray);
    //? Bir fonksiyon generic olarak nasıl yazılır nasıl bir bütüne hizmet eder?
    // function yazdir<T>(array: T[]): void {
    //   console.log(array);
    // }
    // yazdir(["Gizem", "Sinem"]);
    // yazdir([true, false]);
    // yazdir([1, 2, 3]);
    // interface GenericType<T> {
    //   name: string;
    //   age: number;
    //   salary: T[];
    // }
    // const obj1: GenericType<string> = {
    //   name: "Gizem",
    //   age: 22,
    //   salary: ["50000", "100000", "150000"],
    // };
    // const obj2: GenericType<number> = {
    //   name: "Sinem",
    //   age: 22,
    //   salary: [50000, 100000, 150000],
    // };
    // function write<T>(array: GenericType<T>[]): void {
    //   array.forEach((value: GenericType<T>) => console.log(value));
    // }
    // let array: GenericType<string | number>[] = [obj1, obj2];
    // write(array);
    //? Extending - Miras Alma
    // interface OrtakAlanlar {
    //   id: string;
    //   olusturmaTarihi: string;
    //   olusturanKisi: string;
    // }
    // interface Musteri extends OrtakAlanlar {
    //   musteriNo: string;
    // }
    // interface Kurum extends OrtakAlanlar {
    //   kurumNo: string;
    // }
    // const kurum: Kurum = {
    //   id: "1",
    //   olusturmaTarihi: "24.07.2025",
    //   olusturanKisi: "Gizem",
    //   kurumNo: "5029",
    // };
    //? Partical--> optional yapar tıpkı ? gibi ama birsürü olsa bir sürü ? mi koyucaz hayır işte onun yerine bunu kullanıyoruz.
    //? Required--> her şeyi doldurmak zorunda bırakır.
    //? Readonly--> sadece okunabilir yapar.
    //? Pick--> sadece belirtilen değişkeni almak için kullanılır.
    //? omit->sadece belirtilenin dışındakileri almak için kullanılır (belirtilen yokmuş gibi davranır).
    // interface User {
    //   name: string;
    //   age: number;
    //   lastName: string;
    //   tckn: string;
    // }
    // const user1: Partial<User> = {
    //   name: "Gizem",
    //   age: 22,
    // };
    // const user2: Pick<User, "name"> = {
    //   name: "Gizem",
    // };
  }, []);

  return (
    <div>
      <h2>Console'dan çıktılara bakabilirsin</h2>
    </div>
  );
}

export default App;
