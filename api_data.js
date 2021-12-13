define({ "api": [
  {
    "type": "post",
    "url": "accounts/auth/",
    "title": "Авторизация через почту",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"token\": {\n        \"refresh\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6M\",\n        \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNT\"\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Информация о токене пользователя</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.refresh",
            "description": "<p>Refresh токен для продления основного токена</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.access",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "1.Error-Response:",
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"Неверный емейл или пароль\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": 2,\n    \"error_message\": \"30\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Неверный емейл или пароль</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "2",
            "description": "<p>Время блокировки в секундах</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "auth",
    "group": "Аутентификация",
    "description": "<p>Авторизация через почту (форма логина)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Валидный e-mail - адрес почты</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль пользователя, минимум <code>6</code> символов (минимум <code>1</code> цифра и <code>1</code> буква)</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/exists/",
    "title": "Проверка емайла в БД",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"status\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p><code>True</code> - существует, <code>False</code> - не существует</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "exists",
    "group": "Аутентификация",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Валидный e-mail - адрес почты</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/registration/",
    "title": "Регистрация через почту",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"token\": {\n        \"refresh\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6M\",\n        \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNT\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Информация о токене пользователя</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.refresh",
            "description": "<p>Refresh токен для продления основного токена</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.access",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "registration",
    "group": "Аутентификация",
    "description": "<p>Регистрация через почту (форма регистрации)</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Валидный e-mail - адрес почты</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Пароль пользователя, минимум <code>6</code> символов (минимум <code>1</code> цифра и <code>1</code> буква)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Имя пользователя</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/resend_activate/",
    "title": "Письмо активации",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Мы отправили вам письмо на user@example.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Письмо отправлено</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"30\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Время блокировки в секундах</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "resend_activate",
    "group": "Аутентификация",
    "description": "<p>Переотправка письма активации</p>",
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/reset_password/",
    "title": "Сброс пароля",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Новый пароль отправлен на user@example.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Новый пароль отправлен на почту</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "reset_password",
    "group": "Аутентификация",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Эл. почта пользователя</p>"
          }
        ]
      }
    },
    "description": "<p>Если пользователь есть в системе отправляем новый пароль, если нет отправляем приглашение</p>",
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/social_auth/:backend/",
    "title": "Авторизация через соц. сети",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"token\": {\n        \"refresh\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6M\",\n        \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNT\"\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "token",
            "description": "<p>Информация о токене пользователя</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.refresh",
            "description": "<p>Refresh токен для продления основного токена</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "token.access",
            "description": "<p>Токен пользователя</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": [\n        \"400 Client Error: Bad Request for url: https://graph.facebook.com/v8.0/me?fields=id%2C+name%2C+email\"\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Невалидный токен или пользователь не дал необходимые разрешения</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "social_auth",
    "group": "Аутентификация",
    "description": "<p>Возможные варианты backend - <code>facebook, google-oauth2, yandex-oauth2, vk-oauth2, apple-id</code></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>Токен полученный от соц. сети</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>Валидный e-mail, обязательное поле если backend <code>vk-oauth2</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>Имя пользователя, обязательное поле если backend <code>apple-id</code></p>"
          }
        ]
      }
    },
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "post",
    "url": "accounts/token/refresh/",
    "title": "Продление токена",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"access\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhw\"\n}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "access",
            "description": "<p>Новый токен пользователя</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"detail\": \"Токен недействителен или просрочен\",\n    \"code\": \"token_not_valid\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "name": "token_refresh",
    "group": "Аутентификация",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh",
            "description": "<p>Refresh Token пользователя</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/account/rest/v1/urls.py",
    "groupTitle": "Аутентификация"
  },
  {
    "type": "patch",
    "url": "accounts/account/update/",
    "title": "Редактирование данных",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"first_name\": \"Егор\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "account_update",
    "group": "Пользователь",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>Имя пользователя</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "post",
    "url": "accounts/account/change_password/",
    "title": "Изменение пароля",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Пароль успешно изменен\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Пароль успешно изменен</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "change_password",
    "group": "Пользователь",
    "description": "<p>Пользователь должен быть авторизован с помощью ввода емейла и пароля, в противном случае ответ будет <code>403</code></p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Новый пароль, минимум <code>6</code> символов (минимум <code>1</code> цифра и <code>1</code> буква)</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "post",
    "url": "accounts/email/change/",
    "title": "Смена почты",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Код отправлен на user@example.com\",\n    \"email\": \"user@example.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Код успешно отправлен</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "1.Error-Response:",
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": 2,\n    \"error_message\": \"30\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Смена емейла заблокирована на 24 часа</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "2",
            "description": "<p>Время блокировки в секундах</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "email_change",
    "group": "Пользователь",
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "post",
    "url": "accounts/email/confirm/",
    "title": "Подтверждение смены почты",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Валидация прошла успешно\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Валидация прошла успешно</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "1.Error-Response:",
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": 2,\n    \"error_message\": \"Неправильный код подтверждения\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Смена емейла заблокирована на 24 часа</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "2",
            "description": "<p>Неправильный код подтверждения</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "email_change_confirm",
    "group": "Пользователь",
    "description": "<p>Если Пользователь ввел 3 раза неверно проверочный код, смена емейла блокируется на <code>24</code> часа.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Актуальная эл. почта пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "4",
            "optional": false,
            "field": "code",
            "description": "<p>Код подтверждения полученный на емейл</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "post",
    "url": "accounts/new_email/add/",
    "title": "Добавление новой почты",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Код отправлен на user@example.com\",\n    \"email\": \"user@example.com\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Код успешно отправлен</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "1.Error-Response:",
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": 2,\n    \"error_message\": \"30\"\n}",
          "type": "json"
        },
        {
          "title": "3.Error-Response:",
          "content": "{\n    \"error_code\": 3,\n    \"error_message\": \"Изменение невозможно, обратитесь в техподдержку\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Смена емейла заблокирована на 24 часа</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "2",
            "description": "<p>Время блокировки в секундах</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "3",
            "description": "<p>Эл. почта уже занята</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "new_email",
    "group": "Пользователь",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Новая эл. почта пользователя</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "post",
    "url": "accounts/new_email/confirm/",
    "title": "Подтверждение новой почты",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Вы изменили адрес электронной почты\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Адрес электронной почты изменен</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "1.Error-Response:",
          "content": "{\n    \"error_code\": 1,\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": 2,\n    \"error_message\": \"Неправильный код подтверждения\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "1",
            "description": "<p>Смена емейла заблокирована на 24 часа</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "2",
            "description": "<p>Неправильный код подтверждения</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>User Bearer Token.</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "User",
        "title": "User access rights needed.",
        "description": "<p>Permission is granted to modify user objects.</p>"
      }
    ],
    "name": "new_email_confirm",
    "group": "Пользователь",
    "description": "<p>Если Пользователь ввел 3 раза неверно проверочный код, смена емейла блокируется на <code>24</code> часа.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Новая эл. почта пользователя</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "size": "4",
            "optional": false,
            "field": "code",
            "description": "<p>Код подтверждения полученный на емейл</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  }
] });
