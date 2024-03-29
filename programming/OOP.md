### Основные принципы ООП:
1. Абстракция
2. Инкапсуляция
3. Наследование
4. Полиморфизм


#### 1 Абстракция
- выделение наиболее важных характеристик и информации об объекте

Абстракция всегда связана с обобщением некоторой информации о свойствах предметов или объектов, поэтому главное — это отделить значимую информацию от незначимой в контексте решаемой задачи.
С помощью абстракции мы выделяем общее для всех объектов класса.

#### 2 Инкапсуляция
- исключение вмешательства в конструкцию и работу объекта

Атрибуты и поведение объекта объединяются в одном классе, внутренняя реализация объекта скрывается от пользователя, а для работы с объектом предоставляется открытый интерфейс.
Задача - определить, какие атрибуты и методы будут доступны для открытого доступа, а какие являются внутренней реализацией объекта и должны быть недоступны для изменений.
(модификаторы доступа private, protected, public, default), геттеры и сеттеры

#### 3 Наследование
- использование уже существующих классов для описания новых

Переиспользование и расширение имеющегося кода
при переопределении методов, используется аннотация `@Override`

#### 4 Полиморфизм
- использование объектов с одинаковым интерфейсом без информации о внутреннем устройстве объекта

Примерно знаем, как устроены все подобные объекты, и понимаем как с ними работать, даже не зная как все устроено внутри

В итоге, следуйте следующим советам:
- (1) выделяйте главные характеристики объекта;
- (2) старайтесь всегда скрывать методы и поля, относящиеся к внутренней реализации класса
- (3) выделяйте общие свойства и поведение и используйте наследование при создании объектов;
- (4) используйте абстрактные типы для описания объектов;
