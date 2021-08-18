import { UserProps } from './User';
export class Attributes<T> {
  constructor(private data: T) {}

  //Generic Constraints, Value of K can only be of type of key of T
  /* 
   interface UserProps {
    name: string;
    age:number;
    id:number;
   }
    So T is User Props 
    K extends keyof T means .. either name, age or id
    Type of K and return value T[K] means either UserProps[name] or age or id
    const attrs = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: 'asdf',
});
const name = attrs.get('name');  // name: string, age: number, id:number
const age = attrs.get('age');
const id = attrs.get('id');
    */
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }
  set(update: T): void {
    Object.assign(this.data, update);
  }
}
