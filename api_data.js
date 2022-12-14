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
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": \"Неверный емейл или пароль\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": \"2\",\n    \"error_message\": \"30\"\n}",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "newsletters",
            "defaultValue": "True",
            "description": "<p>Подписка на новости</p>"
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
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": \"30\"\n}",
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
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": [\n        \"400 Client Error: Bad Request for url: https://graph.facebook.com/v8.0/me?fields=id%2C+name%2C+email\"\n    ]\n}",
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "newsletters",
            "defaultValue": "True",
            "description": "<p>Подписка на новости</p>"
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
    "type": "get",
    "url": "core/android/video/instructions/",
    "title": "Android watch инструкции",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"title\": \"Пример 1\",\n        \"file\": \"https://dev.api.water.jsay.ru/media/core/video/instructions/1.mp4\"\n    },\n    {\n        \"title\": \"Пример 2\",\n        \"file\": \"https://dev.api.water.jsay.ru/media/core/video/instructions/2.mp4\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Название</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>Ссылка на файл</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "get_android_videoinstructions",
    "group": "Видеоинструкции",
    "filename": "shower/apps/core/rest/v1/api.py",
    "groupTitle": "Видеоинструкции"
  },
  {
    "type": "get",
    "url": "core/apple/video/instructions/",
    "title": "Apple watch инструкции",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"title\": \"Пример 1\",\n        \"file\": \"https://dev.api.water.jsay.ru/media/core/video/instructions/1.mp4\"\n    },\n    {\n        \"title\": \"Пример 2\",\n        \"file\": \"https://dev.api.water.jsay.ru/media/core/video/instructions/2.mp4\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Название</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>Ссылка на файл</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "get_apple_videoinstructions",
    "group": "Видеоинструкции",
    "filename": "shower/apps/core/rest/v1/api.py",
    "groupTitle": "Видеоинструкции"
  },
  {
    "type": "get",
    "url": "core/video/instructions/",
    "title": "Видео инструкции",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"title\": \"Пример 1\",\n        \"file\": \"https://dev.api.water.jsay.ru/media/core/video/instructions/1.mp4\"\n    },\n    {\n        \"title\": \"Пример 2\",\n        \"file\": \"https://dev.api.water.jsay.ru/media/core/video/instructions/2.mp4\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Название</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "file",
            "description": "<p>Ссылка на файл</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "get_videoinstructions",
    "group": "Видеоинструкции",
    "filename": "shower/apps/core/rest/v1/api.py",
    "groupTitle": "Видеоинструкции"
  },
  {
    "type": "get",
    "url": "achievements/",
    "title": "список достижений",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"last_achievement\": {\n        {\n        \"achievement\": {\n            \"achievement_type\": \"daily_active\",\n            \"image\": null,\n            \"title\": \"Охотник на простуду\",\n            \"slug\": \"oxotnik-na-prostudu\",\n            \"duration\": 1,\n            \"description\": \"\",\n            \"text\": \"Bla Bla\",\n            \"name\": \"рассказать друзьям\",\n            \"repeat\": true,\n            \"day\": 0\n        },\n        \"progress\": 1,\n        \"completed\": true,\n        \"complete_date\": \"2022-01-25T15:40:16Z\",\n        \"viewed\": false,\n        \"version\": 1\n        \"users_percent\": 60\n    }\n    },\n    \"daily_active\": [\n        {\n            \"achievement\": {\n                \"users_percent\": 50,\n                \"achievement_type\": \"daily_active\",\n                \"image\": null,\n                \"title\": \"Охотник на простуду\",\n                \"slug\": \"oxotnik-na-prostudu\",\n                \"duration\": 1,\n                \"description\": \"\",\n                \"text\": \"Bla Bla\",\n                \"name\": \"рассказать друзьям\",\n                \"repeat\": true,\n                \"day\": 0\n            },\n            \"progress\": 1,\n            \"completed\": true,\n            \"complete_date\": \"2022-01-25T15:40:16Z\",\n            \"viewed\": false,\n            \"version\": 1\n            \"users_percent\": 60\n        },\n        {\n            \"achievement\": {\n                \"users_percent\": 50,\n                \"achievement_type\": \"daily_active\",\n                \"image\": null,\n                \"title\": \"Истребитель ванных чудовищ\",\n                \"slug\": \"istrebitel-vannix-chudovish\",\n                \"duration\": 1,\n                \"description\": \"\",\n                \"text\": \"Bla Bla\",\n                \"name\": \"рассказать друзьям\",\n                \"repeat\": true,\n                \"day\": 0\n            }\n        }\n    ],\n    \"wellness_fountain\": [],\n    \"wasted_water\": [\n        {\n            \"achievement\": {\n                \"users_percent\": 50,\n                \"achievement_type\": \"wasted_water\",\n                \"image\": null,\n                \"title\": \"Вы встали на мокрую дорожку.\",\n                \"slug\": \"vi-vstali-na-mokri-put\",\n                \"duration\": 1,\n                \"description\": \"\",\n                \"text\": \"Bla Bla\",\n                \"name\": \"рассказать друзьям\",\n                \"repeat\": true,\n                \"day\": 0\n            },\n            \"progress\": 30,\n            \"completed\": true,\n            \"complete_date\": \"2022-01-25T15:41:23Z\",\n            \"viewed\": false,\n            \"version\": 1\n            \"users_percent\": 60\n        },\n        {\n            \"achievement\": {\n                \"users_percent\": 50,\n                \"achievement_type\": \"wasted_water\",\n                \"image\": null,\n                \"title\": \"Человек- Водопад\",\n                \"slug\": \"chelovek-bodapad\",\n                \"duration\": 1,\n                \"description\": \"\",\n                \"text\": \"Bla Bla\",\n                \"name\": \"рассказать друзьям\",\n                \"repeat\": true,\n                \"day\": 0\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "last_achievement",
            "description": "<p>Последняя достижения</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "last_achievement.progress",
            "description": "<p>Прогресс</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "last_achievement.completed",
            "description": "<p>Завершенный</p>"
          },
          {
            "group": "Response",
            "type": "DateTime",
            "optional": false,
            "field": "last_achievement.complete_date",
            "description": "<p>дата завершенный</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "last_achievement.viewed",
            "description": "<p>Посмотрен</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "last_achievement.version",
            "description": "<p>Счетчик повторений</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "last_achievement.users_percent",
            "description": "<p>процент выполнивших</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "last_achievement.repeat",
            "description": "<p>Повторяемы</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "last_achievement.day",
            "description": "<p>День серии</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "last_achievement.achievement",
            "description": "<p>Достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "last_achievement.achievement.users_percent",
            "description": "<p>процент выполнивших</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "last_achievement.achievement.achievement_type",
            "description": "<p>Тип достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "last_achievement.achievement.image",
            "description": "<p>Иконка</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "last_achievement.achievement.title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "last_achievement.achievement.slug",
            "description": "<p>Алиас</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "last_achievement.achievement.duration",
            "description": "<p>Продолжительность или количество</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "last_achievement.achievement.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "last_achievement.achievement.text",
            "description": "<p>текст</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "last_achievement.achievement.name",
            "description": "<p>заголовок для рассказать друзьям</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "daily_active",
            "description": "<p>Ежедневная активность</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "daily_active.progress",
            "description": "<p>Прогресс</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "daily_active.completed",
            "description": "<p>Завершенный</p>"
          },
          {
            "group": "Response",
            "type": "DateTime",
            "optional": false,
            "field": "daily_active.complete_date",
            "description": "<p>дата завершенный</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "daily_active.viewed",
            "description": "<p>Посмотрен</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "daily_active.version",
            "description": "<p>Счетчик повторений</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "daily_active.users_percent",
            "description": "<p>процент выполнивших</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "daily_active.repeat",
            "description": "<p>Повторяемы</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "daily_active.day",
            "description": "<p>День серии</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "daily_active.achievement",
            "description": "<p>Достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.achievement.users_percent",
            "description": "<p>процент выполнивших</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.achievement.achievement_type",
            "description": "<p>Тип достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.achievement.image",
            "description": "<p>Иконка</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.achievement.title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.achievement.slug",
            "description": "<p>Алиас</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.achievement.duration",
            "description": "<p>Продолжительность или количество</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.achievement.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.achievement.text",
            "description": "<p>текст</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_active.achievement.name",
            "description": "<p>заголовок для рассказать друзьям</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "wellness_fountain",
            "description": "<p>Фонтан оздоровления</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "wellness_fountain.progress",
            "description": "<p>Прогресс</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "wellness_fountain.completed",
            "description": "<p>Завершенный</p>"
          },
          {
            "group": "Response",
            "type": "DateTime",
            "optional": false,
            "field": "wellness_fountain.complete_date",
            "description": "<p>дата завершенный</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "wellness_fountain.viewed",
            "description": "<p>Посмотрен</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "wellness_fountain.version",
            "description": "<p>Счетчик повторений</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "wellness_fountain.users_percent",
            "description": "<p>процент выполнивших</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "wellness_fountain.repeat",
            "description": "<p>Повторяемы</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "wellness_fountain.day",
            "description": "<p>День серии</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "wellness_fountain.achievement",
            "description": "<p>Достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wellness_fountain.achievement.users_percent",
            "description": "<p>процент выполнивших</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wellness_fountain.achievement.achievement_type",
            "description": "<p>Тип достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wellness_fountain.achievement.image",
            "description": "<p>Иконка</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wellness_fountain.achievement.title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wellness_fountain.achievement.slug",
            "description": "<p>Алиас</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wellness_fountain.achievement.duration",
            "description": "<p>Продолжительность или количество</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wellness_fountain.achievement.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wellness_fountain.achievement.text",
            "description": "<p>текст</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wellness_fountain.achievement.name",
            "description": "<p>заголовок для рассказать друзьям</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "wasted_water",
            "description": "<p>Литры потраченной воды</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "wasted_water.progress",
            "description": "<p>Прогресс</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "wasted_water.completed",
            "description": "<p>Завершенный</p>"
          },
          {
            "group": "Response",
            "type": "DateTime",
            "optional": false,
            "field": "wasted_water.complete_date",
            "description": "<p>дата завершенный</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "wasted_water.viewed",
            "description": "<p>Посмотрен</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "wasted_water.version",
            "description": "<p>Счетчик повторений</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "wasted_water.users_percent",
            "description": "<p>процент выполнивших</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "wasted_water.repeat",
            "description": "<p>Повторяемы</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "wasted_water.day",
            "description": "<p>День серии</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "wasted_water.achievement",
            "description": "<p>Достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wasted_water.achievement.users_percent",
            "description": "<p>процент выполнивших</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wasted_water.achievement.achievement_type",
            "description": "<p>Тип достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wasted_water.achievement.image",
            "description": "<p>Иконка</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wasted_water.achievement.title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wasted_water.achievement.slug",
            "description": "<p>Алиас</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wasted_water.achievement.duration",
            "description": "<p>Продолжительность или количество</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wasted_water.achievement.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wasted_water.achievement.text",
            "description": "<p>текст</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "wasted_water.achievement.name",
            "description": "<p>заголовок для рассказать друзьям</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "single_achievements",
            "description": "<p>Одиночные достижения</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "single_achievements.progress",
            "description": "<p>Прогресс</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "single_achievements.completed",
            "description": "<p>Завершенный</p>"
          },
          {
            "group": "Response",
            "type": "DateTime",
            "optional": false,
            "field": "single_achievements.complete_date",
            "description": "<p>дата завершенный</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "single_achievements.viewed",
            "description": "<p>Посмотрен</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "single_achievements.version",
            "description": "<p>Счетчик повторений</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "single_achievements.users_percent",
            "description": "<p>процент выполнивших</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "single_achievements.repeat",
            "description": "<p>Повторяемы</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "single_achievements.day",
            "description": "<p>День серии</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "single_achievements.achievement",
            "description": "<p>Достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_achievements.achievement.users_percent",
            "description": "<p>процент выполнивших</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_achievements.achievement.achievement_type",
            "description": "<p>Тип достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_achievements.achievement.image",
            "description": "<p>Иконка</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_achievements.achievement.title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_achievements.achievement.slug",
            "description": "<p>Алиас</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_achievements.achievement.duration",
            "description": "<p>Продолжительность или количество</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_achievements.achievement.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_achievements.achievement.text",
            "description": "<p>текст</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "single_achievements.achievement.name",
            "description": "<p>заголовок для рассказать друзьям</p>"
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
    "name": "achievements_list",
    "group": "Душ_и_достижения",
    "filename": "shower/apps/achievements/rest/v1/api.py",
    "groupTitle": "Душ_и_достижения"
  },
  {
    "type": "post",
    "url": "accounts/dj_booth/",
    "title": "Кабинка ди-джея",
    "success": {
      "examples": [
        {
          "title": "1.Success-Response:",
          "content": "{\n    \"progress\": 30,\n    \"completed\": true,\n    \"complete_date\": \"2022-01-25T15:41:23Z\",\n    \"viewed\": false,\n    \"version\": 1\n    \"users_percent\": 60\n    \"achievement\": {\n        \"achievement_type\": \"wasted_water\",\n        \"image\": null,\n        \"title\": \"Человек- Водопад\",\n        \"slug\": \"chelovek-bodapad\",\n        \"description\": \"\",\n        \"text\": \"Bla Bla\",\n        \"name\": \"рассказать друзьям\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "progress",
            "description": "<p>Прогресс</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "completed",
            "description": "<p>Завершенный</p>"
          },
          {
            "group": "Response",
            "type": "DateTime",
            "optional": false,
            "field": "complete_date",
            "description": "<p>дата завершенный</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "viewed",
            "description": "<p>Посмотрен</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "version",
            "description": "<p>Версия</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "users_percent",
            "description": "<p>процент выполнивших</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "achievement",
            "description": "<p>Достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "achievement.achievement_type",
            "description": "<p>Тип достижения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "achievement.image",
            "description": "<p>Иконка</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "achievement.title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "achievement.slug",
            "description": "<p>Алиас</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "achievement.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "achievement.text",
            "description": "<p>текст</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "achievement.name",
            "description": "<p>заголовок для рассказать друзьям</p>"
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
    "name": "single_achievement",
    "group": "Душ_и_достижения",
    "filename": "shower/apps/uprofile/rest/v1/api.py",
    "groupTitle": "Душ_и_достижения"
  },
  {
    "type": "post",
    "url": "accounts/to_bathe/",
    "title": "Принять душ",
    "success": {
      "examples": [
        {
          "title": "1.Success-Response:",
          "content": "{\n\"daily_norm\": {\n    \"notify\": true\n},\n\"new_achievement\": [\n        {\n            \"achievement\": {\n                \"achievement_type\": \"wasted_water\",\n                \"image\": null,\n                \"title\": \"Сколько воды утекло...\",\n                \"slug\": \"skolko-vodi-yteklo\",\n                \"duration\": 360,\n                \"description\": \"360л воды - в копилку!\",\n                \"text\": \"А когда то всё только начиналось. С тех пор столько воды утекло...и не зря!\",\n                \"name\": \"Потрачено 360л в душе! Могу повторить\",\n                \"repeat\": true\n            },\n            \"progress\": 360,\n            \"users_percent\": 100,\n            \"completed\": true,\n            \"complete_date\": \"2022-07-10T19:02:20.263791Z\",\n            \"viewed\": false,\n            \"version\": 8\n        },\n        {\n            \"achievement\": {\n                \"achievement_type\": \"wellness_fountain\",\n                \"image\": null,\n                \"title\": \"Искатель здоровья\",\n                \"slug\": \"iskatel-zdorovya\",\n                \"duration\": 28,\n                \"description\": \"Следующие 28 сеансов регулярно, не больше 3х пропусков\",\n                \"text\": \"Здоровье дороже золота - легко потерять и тяжело найти. Давайте же его беречь.\",\n                \"name\": \"Оздоровительный курс контрастного душа JSay Shower пройден мной еще раз!\",\n                \"repeat\": true\n            },\n            \"progress\": 28,\n            \"users_percent\": 100,\n            \"completed\": true,\n            \"complete_date\": \"2022-07-10T19:02:20.297602Z\",\n            \"viewed\": false,\n            \"version\": 3\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "daily_norm",
            "description": "<p>Дневная цель</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "daily_norm.notify",
            "description": "<p>Поздравить <code>True</code> - да, <code>False</code> - нет</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "daily_norm.date",
            "description": "<p>День выполнения</p>"
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
    "name": "to_bathe",
    "group": "Душ_и_достижения",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "YYYY-MM-DD"
            ],
            "optional": false,
            "field": "date",
            "description": "<p>Текущая дата</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/uprofile/rest/v1/api.py",
    "groupTitle": "Душ_и_достижения"
  },
  {
    "type": "get",
    "url": "history/data/",
    "title": "История принятого душа",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"count\": 1,\n    \"next\": null,\n    \"previous\": null,\n    \"results\": [\n        {\n            \"date\": 2021,\n            \"data\": {\n                \"8\": {\n                    \"days\": {\n                        \"1\": true,\n                        \"2\": false\n                    }\n                },\n                \"9\": {\n                    \"days\": {\n                        \"1\": true,\n                        \"2\": false\n                    }\n                }\n            }\n        }\n    ],\n    \"joined\": \"2021-05-27\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "results",
            "description": "<p>Список истории по годам</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "results.date",
            "description": "<p>Год</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "results.data",
            "description": "<p>Помесячная история за текущий год</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "results.data.8",
            "description": "<p>Число месяца, <code>8 - Август</code></p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "results.data.8.days",
            "description": "<p>Дни месяца</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "results.data.8.days.1",
            "description": "<p>День <code>&quot;1&quot;: true</code></p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Количество годов</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "next",
            "description": "<p>Ссылка на следующую страницу, может быть <code>string</code> или <code>null</code></p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "previous",
            "description": "<p>Ссылка на предыдущую страницу, может быть <code>string</code> или <code>null</code></p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "joined",
            "description": "<p>День регистрации</p>"
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
    "name": "history",
    "group": "История",
    "filename": "shower/apps/history/rest/v1/api.py",
    "groupTitle": "История"
  },
  {
    "type": "post",
    "url": "history/user/mood/",
    "title": "История настроений",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"1\": null,\n        \"2\": null,\n        \"3\": null,\n        \"4\": null\n    },\n    \"percents\": [\n        {\n            \"type\": \"0\",\n            \"percentage\": 100\n        },\n        {\n            \"type\": \"1\",\n            \"percentage\": 0\n        },\n        {\n            \"type\": \"2\",\n            \"percentage\": 0\n        },\n        {\n            \"type\": \"3\",\n            \"percentage\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>История настроения</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "data.1",
            "description": "<p>дни текущей недели, дни текущего месяца, месяцы текущего года. <code>null</code> - нулевое значение, <code>&quot;0&quot;</code> - Плохое настроение, <code>&quot;1&quot;</code> - Нейтральное настроение, <code>&quot;2&quot;</code> - Хорошее настроение, <code>&quot;3&quot;</code> - Отличное настроение</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "percents",
            "description": "<p>Процент настроений</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "percents.type",
            "description": "<p>Тип настроения, <code>&quot;0&quot;</code> - Плохое настроение, <code>&quot;1&quot;</code> - Нейтральное настроение, <code>&quot;2&quot;</code> - Хорошее настроение, <code>&quot;3&quot;</code> - Отличное настроение</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "percents.percentage",
            "description": "<p>Процент</p>"
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
    "name": "mood_history",
    "group": "История",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "YYYY-MM-DD"
            ],
            "optional": false,
            "field": "date",
            "description": "<p>Текущая дата</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "week",
              "month",
              "year"
            ],
            "optional": false,
            "field": "type",
            "description": "<p>Неделя - <code>week</code>, Месяц - <code>month</code>, Год - <code>year</code></p>"
          }
        ]
      }
    },
    "filename": "shower/apps/history/rest/v1/api.py",
    "groupTitle": "История"
  },
  {
    "type": "post",
    "url": "notifications/fcm_token/",
    "title": "FCM Token",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"registration_id\": \"UID090974679\",\n    \"device_id\": \"f6e47bd0-e019-11eb-ba80-0242ac130004\",\n    \"device\": \"ios\",\n    \"login\": true\n}",
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
    "name": "fcm_token",
    "group": "Напоминания",
    "description": "<p>Создание FirebaseToken для отправки PUSH уведомлений</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registration_id",
            "description": "<p>FirebaseToken</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "device_id",
            "description": "<p>ID устройства</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "ios",
              "android"
            ],
            "optional": false,
            "field": "device",
            "description": "<p>Тип устройства</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "login",
            "description": "<p>Статус авторизации пользователя в системе, <code>True</code> - вход, <code>False</code> - выход</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/notification/rest/v1/api.py",
    "groupTitle": "Напоминания"
  },
  {
    "type": "get",
    "url": "notifications/notification/",
    "title": "Получить настройки напоминания",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"notification_days\": [\n        {\n            \"weekday\": 1,\n            \"remind_time\": \"13:00:00\",\n            \"remind\": true\n        },\n        ...\n        {\n            \"weekday\": 7,\n            \"remind_time\": \"09:00:00\",\n            \"remind\": true\n        }\n    ],\n    \"remind\": true,\n    \"sound\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object[]",
            "optional": false,
            "field": "notification_days",
            "description": "<p>Дни недели напоминания</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "notification_days.weekday",
            "description": "<p>День недели</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "notification_days.remind_time",
            "description": "<p>Время</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "notification_days.remind",
            "description": "<p>Напоминать <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "remind",
            "description": "<p>Глобальные настройки напоминания <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "sound",
            "description": "<p>Звук напоминания <code>True</code> - Да, <code>False</code> - Нет</p>"
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
    "name": "get_notification",
    "group": "Напоминания",
    "filename": "shower/apps/notification/rest/v1/api.py",
    "groupTitle": "Напоминания"
  },
  {
    "type": "patch",
    "url": "notifications/notification/",
    "title": "Обновление глобальных настроек напоминания",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"remind\": true,\n    \"sound\": true\n}",
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
    "name": "notification_partial_update",
    "group": "Напоминания",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "remind",
            "description": "<p>Напоминать, <code>True</code> - включен, <code>False</code> - отключен</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "sound",
            "description": "<p>Звук, <code>True</code> - включен, <code>False</code> - отключен</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/notification/rest/v1/api.py",
    "groupTitle": "Напоминания"
  },
  {
    "type": "patch",
    "url": "notifications/notification-day/",
    "title": "Обновление дня недели напоминания",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"weekday\": 1,\n    \"remind_time\": \"09:00\",\n    \"remind\": true\n}",
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
    "name": "notification_weekday",
    "group": "Напоминания",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "weekday",
            "description": "<p>День недели</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remind_time",
            "description": "<p>Время напоминания</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "remind",
            "description": "<p>Напоминать, <code>True</code> - включен, <code>False</code> - отключен</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/notification/rest/v1/api.py",
    "groupTitle": "Напоминания"
  },
  {
    "type": "put",
    "url": "notifications/notification/",
    "title": "Обновление настроек напоминания",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"notification_days\": [\n        {\n            \"weekday\": 1,\n            \"remind_time\": \"14:00:00\",\n            \"remind\": false\n        },\n        ...\n        {\n            \"weekday\": 7,\n            \"remind_time\": \"09:00:00\",\n            \"remind\": true\n        }\n    ],\n    \"remind\": false,\n    \"sound\": true\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object[]",
            "optional": false,
            "field": "notification_days",
            "description": "<p>Дни недели напоминания</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "notification_days.weekday",
            "description": "<p>День недели</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "notification_days.remind_time",
            "description": "<p>Время</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "notification_days.remind",
            "description": "<p>Напоминать <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "remind",
            "description": "<p>Глобальные настройки напоминания <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "sound",
            "description": "<p>Звук напоминания <code>True</code> - Да, <code>False</code> - Нет</p>"
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
    "name": "put_notification",
    "group": "Напоминания",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "notification_days",
            "description": "<p>Дни недели напоминания</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notification_days.weekday",
            "description": "<p>День недели</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notification_days.remind_time",
            "description": "<p>Время</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "notification_days.remind",
            "description": "<p>Напоминать <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "remind",
            "description": "<p>Напоминать, <code>True</code> - включен, <code>False</code> - отключен</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "sound",
            "description": "<p>Звук, <code>True</code> - включен, <code>False</code> - отключен</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/notification/rest/v1/api.py",
    "groupTitle": "Напоминания"
  },
  {
    "type": "get",
    "url": "core/advices/",
    "title": "Советы",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"title\": \"Лучше ЭТО сделать заранее\",\n        \"text\": \"Распределяйте объем воды в течение дня и не полагайтесь на жажду.\",\n        \"link\": \"https://www.nytimes.com/2000/07/11/health/personal-health.html\",\n        \"short_link\": \"https://nytimes.com\"\n    },\n    {\n        \"title\": \"Упс, вы что-то упустили...\",\n        \"text\": \"Когда чувствуете жажду — организм уже слегка обезвожен.\",\n        \"link\": \"https://www.nytimes.com/2000/07/11/health/personal-health-for-lifelong.html\",\n        \"short_link\": \"https://nytimes.com\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Текст</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Ссылка на источник</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short_link",
            "description": "<p>Краткая ссылка</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "advices",
    "group": "Основные",
    "filename": "shower/apps/core/rest/v1/api.py",
    "groupTitle": "Основные"
  },
  {
    "type": "get",
    "url": "core/benefits/",
    "title": "О пользе душа",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"title\": \"Укрепление иммунитета\",\n        \"text\": \"Принятие контрастного душа делает человека выносливее и улучшает его врожденный иммунитет.\",\n        \"link\": \"https://www.championat.com/lifestyle/article-4027747-chem-polezen-holodnyj-dush-pohudenie-vosstanovlenie-myshc-ukreplenie-immuniteta.html\",\n        \"short_link\": \"www.championat.com\"\n    },\n    {\n        \"title\": \"Тренировка терморегуляции\",\n        \"text\": \"Под горячей водой гормоны расширяют кровеносные и лимфатические сосуды.\",\n        \"link\": \"https://www.championat.com/lifestyle/article-4027747-chem-polezen-holodnyj-dush-pohudenie-vosstanovlenie-myshc-ukreplenie-immuniteta.html\",\n        \"short_link\": \"www.championat.com\"\n    },\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Текст</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Ссылка на источник</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "short_link",
            "description": "<p>Краткая ссылка</p>"
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
    "name": "benefits",
    "group": "Основные",
    "filename": "shower/apps/core/rest/v1/api.py",
    "groupTitle": "Основные"
  },
  {
    "type": "get",
    "url": "core/legal_docs/",
    "title": "Правовые документы",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"policy\": \"JSay IT built the JSay Water app and JSay Shower as a Freemium app.\n    This SERVICE is provided by JSay IT at no cost and is intended for use as is.\",\n    \"policy_ru\": \"Политика конфиденциальности – по сути документ, при помощи которого вы объясняете вашим\n    пользователям то, как вы обрабатываете его данные. Часто встречается и другое (официальное) название\n    данного документа - Политика обработки персональных данных.\",\n    \"terms\": \"By downloading or using the app, these terms will automatically apply to you –\n    you should make sure therefore that you read them carefully before using the app.\",\n    \"terms_ru\": \"Условия использования, условия предоставления услуг (англ. Terms of service/use) — это правила,\n    с которыми нужно согласиться перед использованием какой-либо службы, чаще всего в интернете.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "policy",
            "description": "<p>Политика конфиденциальности анг.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "policy_ru",
            "description": "<p>Политика конфиденциальности русский</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "terms",
            "description": "<p>Условия использования анг.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "terms_ru",
            "description": "<p>Условия использования русский</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "get_questions",
    "group": "Основные",
    "filename": "shower/apps/core/rest/v1/api.py",
    "groupTitle": "Основные"
  },
  {
    "type": "post",
    "url": "feedback/add_feedback/",
    "title": "Добавить отзыв",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"question\": [\n        1,\n        4\n    ],\n    \"message\": \"testing\"\n}",
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
    "name": "add_feedback",
    "group": "Отзывы",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": true,
            "field": "question",
            "description": "<p>ID вопроса, JSON Array пример: [<code>1, 4</code>]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "2000",
            "optional": false,
            "field": "message",
            "description": "<p>Комментарий.</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/feedback/rest/v1/api.py",
    "groupTitle": "Отзывы"
  },
  {
    "type": "post",
    "url": "feedback/support/message/create/",
    "title": "Создать сообщение поддержке",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Сообщение создано\"\n}",
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
    "name": "add_message",
    "group": "Отзывы",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "2000",
            "optional": false,
            "field": "message",
            "description": "<p>Комментарий.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "allowedValues": [
              "png",
              "jpeg",
              "jpg"
            ],
            "optional": false,
            "field": "image",
            "description": "<p>Картинка сообщения.</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/feedback/rest/v1/api.py",
    "groupTitle": "Отзывы"
  },
  {
    "type": "get",
    "url": "core/get_questions/",
    "title": "Варианты вопросов",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n    {\n        \"id\": 1,\n        \"question\": \"Дорого\"\n    },\n    {\n        \"id\": 2,\n        \"question\": \"Непонятно\"\n    },\n    {\n        \"id\": 3,\n        \"question\": \"Неудобно\"\n    },\n    {\n        \"id\": 4,\n        \"question\": \"Работает неправильно\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID вопроса</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "question",
            "description": "<p>Название вопроса</p>"
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
    "name": "get_questions",
    "group": "Отзывы",
    "filename": "shower/apps/core/rest/v1/api.py",
    "groupTitle": "Отзывы"
  },
  {
    "type": "post",
    "url": "billing/add/subscription/",
    "title": "Создать подписку",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Чек проверен\"\n}",
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
            "description": "<p>Чек проверен</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error_code\": 21003,\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "21002",
            "description": "<p>Чек поврежден, не удалось его распарсить</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21003",
            "description": "<p>Некорректный чек, покупка не подтверждена</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21004",
            "description": "<p>Ваш Shared Secret некорректный или не соответствует чеку</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21005",
            "description": "<p>Сервер эпла не смог обработать ваш запрос, стоит попробовать еще раз</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21006",
            "description": "<p>Чек недействителен</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21007",
            "description": "<p>Чек из SandBox (тестовой среды), но был отправлен в prod</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21008",
            "description": "<p>Чек из прода, но был отправлен в тестовую среду</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21009",
            "description": "<p>Сервер эпла не смог обработать ваш запрос, стоит попробовать еще раз</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21010",
            "description": "<p>Аккаунт был удален</p>"
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
    "name": "add_subscription",
    "group": "Подписки",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "store",
            "description": "<p>Магазин, <code>0</code> - Apple, <code>1</code> - Google</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registration_id",
            "description": "<p>Чек полученный от магазина</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/billing/rest/v1/api.py",
    "groupTitle": "Подписки"
  },
  {
    "type": "post",
    "url": "billing/cancel/robokassa/subscription/",
    "title": "Отмена подписки на Robokassa",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Done\"\n}",
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
    "name": "cancel_robokassa_subscription",
    "group": "Подписки",
    "filename": "shower/apps/billing/rest/v1/api.py",
    "groupTitle": "Подписки"
  },
  {
    "type": "post",
    "url": "billing/subscription/status/",
    "title": "Статус подписки",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"store\": \"0\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "store",
            "description": "<p>Магазин подписки <code>0</code> - Apple, <code>1</code> - Google, <code>None</code> - Нет активной подписки</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error_code\": 21003,\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error Code": [
          {
            "group": "Error Code",
            "optional": false,
            "field": "21002",
            "description": "<p>Чек поврежден, не удалось его распарсить</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21003",
            "description": "<p>Некорректный чек, покупка не подтверждена</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21004",
            "description": "<p>Ваш Shared Secret некорректный или не соответствует чеку</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21005",
            "description": "<p>Сервер эпла не смог обработать ваш запрос, стоит попробовать еще раз</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21006",
            "description": "<p>Чек недействителен</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21007",
            "description": "<p>Чек из SandBox (тестовой среды), но был отправлен в prod</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21008",
            "description": "<p>Чек из прода, но был отправлен в тестовую среду</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21009",
            "description": "<p>Сервер эпла не смог обработать ваш запрос, стоит попробовать еще раз</p>"
          },
          {
            "group": "Error Code",
            "optional": false,
            "field": "21010",
            "description": "<p>Аккаунт был удален</p>"
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
    "name": "get_subscription",
    "group": "Подписки",
    "filename": "shower/apps/billing/rest/v1/api.py",
    "groupTitle": "Подписки"
  },
  {
    "type": "get",
    "url": "accounts/account/",
    "title": "Просмотр данных",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"first_name\": \"Егор\",\n    \"email\": \"egor@example.com\",\n    \"newsletters\": true\n    \"auth_status\": {\n        \"social\": true,\n        \"provider\": \"facebook\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "auth_status",
            "description": "<p>Статус авторизации</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "auth_status.social",
            "description": "<p>Статус соц. сети, <code>True</code> - через соц. сеть, <code>False</code> - через email</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "auth_status.provider",
            "description": "<p>Название соц. сети</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID пользователя</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>Имя пользователя</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Эл. почта пользователя</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "newsletters",
            "description": "<p>Подписка на новости</p>"
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
    "name": "account_info",
    "group": "Пользователь",
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
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
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "newsletters",
            "defaultValue": "True",
            "description": "<p>Подписка на новости</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "delete",
    "url": "accounts/account/delete/remove/schedule/",
    "title": "Отмена удаления пользователя",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Done\"\n}",
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
    "name": "cancel_user_remove",
    "group": "Пользователь",
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
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": \"2\",\n    \"error_message\": \"30\"\n}",
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
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": \"2\",\n    \"error_message\": \"Неправильный код подтверждения\"\n}",
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
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": \"2\",\n    \"error_message\": \"30\"\n}",
          "type": "json"
        },
        {
          "title": "3.Error-Response:",
          "content": "{\n    \"error_code\": \"3\",\n    \"error_message\": \"Изменение невозможно, обратитесь в техподдержку\"\n}",
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
          "content": "{\n    \"error_code\": \"1\",\n    \"error_message\": \"Смена емейла заблокирована на 24 часа\"\n}",
          "type": "json"
        },
        {
          "title": "2.Error-Response:",
          "content": "{\n    \"error_code\": \"2\",\n    \"error_message\": \"Неправильный код подтверждения\"\n}",
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
  },
  {
    "type": "post",
    "url": "accounts/account/add/remove/schedule/",
    "title": "Запрос на удаление пользователя",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"project\": \"1\",\n    \"store\": \"0\",\n    \"expires_date\": \"2022-07-21\",\n    \"remove_date\": \"2022-07-22\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "project",
            "description": "<p>Проект, <code>0</code> - Water, <code>1</code> - Shower</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "store",
            "description": "<p>Магазин, <code>0</code> - Apple, <code>1</code> - Google, <code>2</code> - Robokassa</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expires_date",
            "description": "<p>Дата завершения подписки</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remove_date",
            "description": "<p>Дата удаления пользователя</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"project\": \"1\",\n    \"store\": \"0\",\n    \"expires_date\": \"2022-07-21\",\n    \"remove_date\": null\n}",
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
    "name": "schedule_user_remove",
    "group": "Пользователь",
    "description": "<p>Если у пользователя нет задачи на удаление и ответ сервера <code>400</code>, у пользователя есть активная подписка черезе Apple или Google</p>",
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Пользователь"
  },
  {
    "type": "get",
    "url": "profile/shower-settings/",
    "title": "Получить настройки душа",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"bask_before_shower\": 60,\n    \"cold_shower\": 10,\n    \"warm_shower\": 30,\n    \"approaches_in_one_shower\": 2,\n    \"voice_prompt\": true,\n    \"voice_type\": \"WOMANISH\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "bask_before_shower",
            "description": "<p>Время в душе</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "cold_shower",
            "description": "<p>Холодный душ</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "warm_shower",
            "description": "<p>Теплый душ</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "approaches_in_one_shower",
            "description": "<p>Подходы</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "voice_prompt",
            "description": "<p>Звук подсказки, <code>True</code> - включен, <code>False</code> - отключен</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "voice_type",
            "description": "<p>Тип голоса, <code>WOMANISH</code> - Женский, <code>MASCULINE</code> - Мужской</p>"
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
    "name": "get_shower_settings",
    "group": "Профиль",
    "filename": "shower/apps/uprofile/rest/v1/api.py",
    "groupTitle": "Профиль"
  },
  {
    "type": "patch",
    "url": "profile/shower-settings/",
    "title": "Назначить настройки душа",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"bask_before_shower\": 60,\n    \"cold_shower\": 10,\n    \"warm_shower\": 30,\n    \"approaches_in_one_shower\": 2,\n    \"voice_prompt\": true,\n    \"voice_type\": \"WOMANISH\"\n}",
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
    "name": "put_shower_settings",
    "group": "Профиль",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "bask_before_shower",
            "description": "<p>Время в душе</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "cold_shower",
            "description": "<p>Холодный душ</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "warm_shower",
            "description": "<p>Теплый душ</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "approaches_in_one_shower",
            "description": "<p>Подходы</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "voice_prompt",
            "description": "<p>Звук подсказки, <code>True</code> - включен, <code>False</code> - отключен</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "voice_type",
            "description": "<p>Тип голоса, <code>WOMANISH</code> - Женский, <code>MASCULINE</code> - Мужской</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/uprofile/rest/v1/api.py",
    "groupTitle": "Профиль"
  },
  {
    "type": "post",
    "url": "accounts/status_active/",
    "title": "Статус пользователя",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"billing\": true,\n    \"subscription\": {\n        \"expiry_date\": 1663748582,\n        \"status\": true,\n        \"method\": \"2\",\n        \"type\": \"subscription.yearly\",\n        \"renewal\": true\n    },\n    \"maintenance\": true,\n    \"maintenance_title\": \"Заголовок технических работ\",\n    \"maintenance_text\": \"Текст технических работ\",\n    \"check_email\": false,\n    \"check_full_info\": false,\n    \"course\": {\n        \"missed\": 0,\n        \"end\": 28\n    },\n    \"remove_date\": null\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "subscription",
            "description": "<p>Информация о подписке</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "subscription.expiry_date",
            "description": "<p>Дата окончания подписки в Unixtime</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "subscription.status",
            "description": "<p>Есть подписка <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "subscription.method",
            "description": "<p>Способ оплаты <code>null</code> - Пусто, <code>0</code> - Apple, <code>1</code> - Google, <code>2</code> - Robokassa</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "subscription.type",
            "description": "<p>Тип подписки <code>subscription.monthly, subscription.quarterly, subscription.semiannual, subscription.yearly</code></p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "subscription.renewal",
            "description": "<p>Статус автопродления подписки (для Robokassa)</p>"
          },
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>Курс</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "course.missed",
            "description": "<p>Пропущенные дни</p>"
          },
          {
            "group": "Response",
            "type": "Number",
            "optional": false,
            "field": "course.end",
            "description": "<p>Количество дней до завершения</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "billing",
            "description": "<p>Статус подписки <code>True</code> - Активна, <code>False</code> - Просроченна</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "check_email",
            "description": "<p>Статус почты <code>True</code> - необходима проверка, <code>False</code> - проверка не требуется</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "check_full_info",
            "description": "<p>Статус данных пользователя <code>True</code> - необходима проверка, <code>False</code> - проверка не требуется</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "remove_date",
            "description": "<p>Дата удаления пользователя</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "maintenance",
            "description": "<p>Технические работы <code>True</code> - Да, <code>False</code> - Нет</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "maintenance_title",
            "description": "<p>Заголовок технических работ</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "maintenance_text",
            "description": "<p>Текст технических работ</p>"
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
    "name": "user_status",
    "group": "Статус",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "YYYY-MM-DD"
            ],
            "optional": false,
            "field": "date",
            "description": "<p>Текущая дата</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Статус"
  },
  {
    "type": "post",
    "url": "course/start/",
    "title": "начать курс",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"course\": {\n        \"image\": \"link\",\n        \"title\": \"curse\",\n        \"slug\": \"asdasda\",\n        \"duration\": 28,\n        \"may_miss\": 3,\n        \"description\": \"akfldkaldska\",\n        \"motivational_messages\": \"asfsghsdgf\",\n        \"percent\": 10\n    },\n    \"auto_settings\": true,\n    \"missed\": 1,\n    \"history\": [\n        {\n            \"date\": \"2022-02-16\",\n            \"missed\": false,\n            \"weekday\": 4\n        }\n    ],\n    \"version\": 0,\n    \"updated\": \"2022-02-16\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>Курс</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.image",
            "description": "<p>Иконка</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.slug",
            "description": "<p>Алиас</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "course.duration",
            "description": "<p>Продолжительность или количество</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "course.may_miss",
            "description": "<p>может пропустить</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.motivational_messages",
            "description": "<p>мотивационные сообщения</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "course.percent",
            "description": "<p>процент прошедших Курс Пользователь</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>статус курса</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "auto_settings",
            "description": "<p>автоувеличение настроек</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "missed",
            "description": "<p>пропущенные дни</p>"
          },
          {
            "group": "Response",
            "type": "Object[]",
            "optional": false,
            "field": "history",
            "description": "<p>история курса</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "history.date",
            "description": "<p>день</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "history.missed",
            "description": "<p>пропущен</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "history.weekday",
            "description": "<p>день недели, 0-6 Mo-Su,</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "version",
            "description": "<p>Счетчик повторений</p>"
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
    "name": "start_course",
    "group": "курс",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "YYYY-MM-DD"
            ],
            "optional": false,
            "field": "date",
            "description": "<p>Текущая дата</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/course/rest/v1/api.py",
    "groupTitle": "курс"
  },
  {
    "type": "get",
    "url": "course/stop/",
    "title": "остановить курс",
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
    "name": "stop_course",
    "group": "курс",
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>Курс</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.image",
            "description": "<p>Иконка</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.slug",
            "description": "<p>Алиас</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "course.duration",
            "description": "<p>Продолжительность или количество</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "course.may_miss",
            "description": "<p>может пропустить</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.motivational_messages",
            "description": "<p>мотивационные сообщения</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "course.percent",
            "description": "<p>процент прошедших Курс Пользователь</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>статус курса</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "auto_settings",
            "description": "<p>автоувеличение настроек</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "missed",
            "description": "<p>пропущенные дни</p>"
          },
          {
            "group": "Response",
            "type": "Object[]",
            "optional": false,
            "field": "history",
            "description": "<p>история курса</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "history.date",
            "description": "<p>день</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "history.missed",
            "description": "<p>пропущен</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "history.weekday",
            "description": "<p>день недели, 0-6 Mo-Su,</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "version",
            "description": "<p>Счетчик повторений</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/course/rest/v1/api.py",
    "groupTitle": "курс"
  },
  {
    "type": "patch",
    "url": "course/update/",
    "title": "обновить курс",
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
    "name": "update_course",
    "group": "курс",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "auto_settings",
            "description": "<p>автоувеличение настроек</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Response": [
          {
            "group": "Response",
            "type": "Object",
            "optional": false,
            "field": "course",
            "description": "<p>Курс</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.image",
            "description": "<p>Иконка</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.title",
            "description": "<p>Заголовок</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.slug",
            "description": "<p>Алиас</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "course.duration",
            "description": "<p>Продолжительность или количество</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "course.may_miss",
            "description": "<p>может пропустить</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.description",
            "description": "<p>Описание</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "course.motivational_messages",
            "description": "<p>мотивационные сообщения</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "course.percent",
            "description": "<p>процент прошедших Курс Пользователь</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>статус курса</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "auto_settings",
            "description": "<p>автоувеличение настроек</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "missed",
            "description": "<p>пропущенные дни</p>"
          },
          {
            "group": "Response",
            "type": "Object[]",
            "optional": false,
            "field": "history",
            "description": "<p>история курса</p>"
          },
          {
            "group": "Response",
            "type": "String",
            "optional": false,
            "field": "history.date",
            "description": "<p>день</p>"
          },
          {
            "group": "Response",
            "type": "Boolean",
            "optional": false,
            "field": "history.missed",
            "description": "<p>пропущен</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "history.weekday",
            "description": "<p>день недели, 0-6 Mo-Su,</p>"
          },
          {
            "group": "Response",
            "type": "Integer",
            "optional": false,
            "field": "version",
            "description": "<p>Счетчик повторений</p>"
          }
        ]
      }
    },
    "filename": "shower/apps/course/rest/v1/api.py",
    "groupTitle": "курс"
  }
] });
