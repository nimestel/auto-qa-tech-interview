## HTTP протокол

HTTP (HyperText Transfer Protocol) — протокол передачи данных, изначально предназначенный для 
передачи гипертекстовых документов.

HTTP является протоколом прикладного уровня модели OSI.

Протокол HTTP предполагает использование клиент-серверной структуры передачи данных. 

Задача HTTP — обмен данными между пользовательским приложением, осуществляющим доступ к 
веб-ресурсам (обычно это веб-браузер) и веб-сервером.

Также HTTP часто используется как протокол передачи информации для других протоколов прикладного уровня, таких как SOAP, XML-RPC и WebDAV. В таком случае говорят, что протокол HTTP используется как «транспорт».

API многих программных продуктов также подразумевает использование HTTP для передачи данных — сами данные при этом могут иметь любой формат, например, XML или JSON.

Как правило, передача данных по протоколу HTTP осуществляется через TCP/IP-соединения.

##Структура HTTP-сообщения

Каждое HTTP-сообщение состоит из трёх частей, которые передаются в таком порядке:

![HTTP structure](https://github.com/nimestel/auto-qa-tech-interview/blob/master/screenshots/http_structure.png 
"Структура HTTP сообщения")

1. Стартовая строка (Starting line) — определяет тип сообщения
2. Заголовки (Headers) — характеризуют тело сообщения, параметры передачи и пр.
3. Тело сообщения (Message Body) — непосредственно данные сообщения. Обязательно должно 
   отделяться от заголовков пустой строкой!

Тело сообщения может отсутствовать, но стартовая строка и заголовок являются обязательными элементами. 

### Структура HTTP запроса

HTTP запрос состоит из трех частей в таком порядке:
1. строка запроса (Request Line) – указывает метод передачи, URL-адрес, к которому нужно обратиться и версию протокола HTTP

2. заголовки (Message Headers) – описывают тело сообщений, передают различные параметры и др. сведения и информацию

Между заголовками и телом сообщения — пустая строка-разделитель, символ перевода строки

3. тело сообщения (Entity Body) - сами данные, которые передаются в запросе. Необязательный 
   параметр и может отсутствовать.

Шаблон стартовой строки запроса:
```
Method URI HTTP/Version
```
- Метод (Method) — тип запроса, одно слово заглавными буквами. 
- URI определяет путь к запрашиваемому документу.
- Версия (Version) — пара разделённых точкой цифр. Например: 1.0.
  
Пример:
```
GET /wiki/HTTP HTTP/1.0
Host: ru.wikipedia.org
```
Первая строка — строка запроса, вторая — заголовков. Тела сообщения нет.

### Структура HTTP ответа

1. Код состояния HTTP (Например, HTTP / 1.1 301 — перемещен навсегда, означает, что 
   запрошенный 
ресурс был постоянно перемещен и перенаправлялся на какой-либо другой ресурс).
2. Заголовки (пример — Content-Type: html)

Пустая строка.

3. Тело сообщения, которое не является обязательным.

Все строки в ответе сервера должны заканчиваться символом возврата каретки и перевода строки. Как и в случае с запросом, пустая строка в ответе должна содержать только возврат каретки и перевод строки без пробелов.

Шаблон стартовой строки ответа:
```
HTTP/Версия КодСостояния Пояснение, 
```

- Версия — пара разделённых точкой цифр, как в запросе;
- Код состояния (Status Code) — три цифры. По коду состояния определяется дальнейшее 
  содержимое сообщения и поведение клиента;
- Пояснение (Reason Phrase) — текстовое короткое пояснение к коду ответа для пользователя. 
  Никак не влияет на сообщение и является необязательным.
  
Пример:
```
HTTP/1.0 200 OK
```


## Ключевые абстракции HTTP

###Ресурс

Ресурс — это ключевая абстракция, на которой концентрируется протокол HTTP. Ресурс — это все, что вы хотите показать внешнему миру через ваше приложение. Например, если мы пишем приложение для управления задачами, экземпляры ресурсов будут следующие:

- Конкретный пользователь
- Конкретная задача
- Список задач

###URI ресурса

Способ, которым мы идентифицируем ресурс для предоставления, состоит в том, чтобы назначить ему URI — универсальный идентификатор ресурса. Например:

- Создать пользователя: POST /users
- Удалить пользователя: DELETE /users/1
- Получить всех пользователей: GET /users
- Получить одного пользователя: GET /users/1

### URI vs URL

- uri - очень детальный конечный адрес ресурса (www.domen.com/article1.html)
- url - общий адрес сайта на котором находится ресурс (www.domen.com)

по URI к ресурсу можно адресно обратиться, найти его

по URL можно найти только расположение в целом

URI всегда включает в себя URL, поэтому любой URL является URI