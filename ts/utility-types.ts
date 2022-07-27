/**
 * required - все поля объекта обязательны
 * partial - все поля объекта опциональны
 *
 * record - определяет тип с определенным типом полей и их значений
 * omit - удаляет перечисленные свойства из типа
 * pick - удаляет из типа все свойства, кроме перечисленных
 *
 * readonly - все поля только для чтения
 * nonnullable - все поля не null и undefined
 */

// Record<string, number> is equivalent to { [key: string]: number }
const nameAgeMap: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
};

interface Person {
    name: string;
    age: number;
    location?: string;
}

//Omit
const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};

//Pick
const bob2: Pick<Person, 'name'> = {
    name: 'Bob'
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
