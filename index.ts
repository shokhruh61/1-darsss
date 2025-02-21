function kvadrat(arr: number[]): number[] {
  return arr.map((num) => num * num);
}
console.log(kvadrat([1, 2, 3])); // [1, 4, 9]

function saralash(arr: string[]): string[] {
  return arr.sort((a, b) => a.length - b.length);
}
console.log(saralash(["olma", "banan", "anor"])); // ["anor", "olma", "banan"]

function ismBormi(arr: string[], ism: string): boolean {
  return arr.includes(ism);
}
console.log(ismBormi(["Ali", "Vali"], "Ali")); // true

function juftSonlar(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}
console.log(juftSonlar([1, 2, 3, 4])); // [2, 4]

function minMax(arr: number[]): { min: number; max: number } {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}
console.log(minMax([1, 2, 3])); // { min: 1, max: 3 }

const talaba = { ism: "Ali", yosh: 20, kurs: 2 };
function talabaMalumot(talaba: {
  ism: string;
  yosh: number;
  kurs: number;
}): void {
  console.log(`Ism: ${talaba.ism}, Yosh: ${talaba.yosh}, Kurs: ${talaba.kurs}`);
}
talabaMalumot(talaba); // Ism: Ali, Yosh: 20, Kurs: 2

const mashina = { model: "Cobalt", yil: 2020, rang: "oq" };
function mashinaMalumot(mashina: {
  model: string;
  yil: number;
  rang: string;
}): void {
  console.log(
    `Model: ${mashina.model}, Yil: ${mashina.yil}, Rang: ${mashina.rang}`
  );
}
mashinaMalumot(mashina); // Model: Cobalt, Yil: 2020, Rang: oq

const kitob = { nom: "TypeScript", muallif: "Ali", sahifalar: 200 };
const kitobNusxa = { ...kitob };
console.log(kitobNusxa); // { nom: "TypeScript", muallif: "Ali", sahifalar: 200 }

function kalitlar(obj: object): string[] {
  return Object.keys(obj);
}
console.log(kalitlar({ ism: "Ali", yosh: 20 })); // ["ism", "yosh"]

function qiymatlar(obj: object): any[] {
  return Object.values(obj);
}
console.log(qiymatlar({ ism: "Ali", yosh: 20 })); // ["Ali", 20]

interface Shaxs {
  ism: string;
  familiya: string;
  yosh: number;
}
const shaxs: Shaxs = { ism: "Ali", familiya: "Valiyev", yosh: 25 };
console.log(shaxs); // { ism: "Ali", familiya: "Valiyev", yosh: 25 }

interface Ishchi {
  id: number;
  ism: string;
  lavozim: string;
  maosh: number;
}
const ishchi: Ishchi = {
  id: 1,
  ism: "Vali",
  lavozim: "Dasturchi",
  maosh: 1000,
};
console.log(ishchi); // { id: 1, ism: "Vali", lavozim: "Dasturchi", maosh: 1000 }

interface Telefon {
  brend: string;
  model: string;
  narx: number;
}
const telefonlar: Telefon[] = [
  { brend: "Apple", model: "iPhone 12", narx: 800 },
  { brend: "Samsung", model: "Galaxy S21", narx: 700 },
];
console.log(telefonlar);

interface Student {
  readonly id: number;
  readonly ism: string;
  readonly yosh: number;
  readonly kurs: number;
}
const student: Student = { id: 1, ism: "Ali", yosh: 20, kurs: 2 };
console.log(student); // { id: 1, ism: "Ali", yosh: 20, kurs: 2 }

let anyVar: any = 10;
anyVar = "Salom";
console.log(anyVar); // Salom

function tipniTekshirish(value: any): string {
  return typeof value;
}
console.log(tipniTekshirish(10)); // number

function faqatString(arr: any[]): string[] {
  return arr.filter((item) => typeof item === "string");
}
console.log(faqatString([1, "Salom", true, "Dunyo"])); // ["Salom", "Dunyo"]

enum Kunlar {
  Dushanba,
  Seshanba,
  Chorshanba,
  Payshanba,
  Juma,
  Shanba,
  Yakshanba,
}
console.log(Kunlar.Dushanba); // 0

enum Mavsum {
  Qish,
  Bahor,
  Yoz,
  Kuz,
}
function mavsumNominiTop(mavsum: Mavsum): string {
  return Mavsum[mavsum];
}
console.log(mavsumNominiTop(Mavsum.Bahor)); // Bahor

enum Yoqilgi {
  Benzin = 10000,
  Gaz = 5000,
  Elektr = 2000,
}
function yoqilgiNarx(yoqilgi: Yoqilgi): number {
  return yoqilgi;
}
console.log(yoqilgiNarx(Yoqilgi.Benzin)); // 10000
