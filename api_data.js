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
    "url": "achievements/",
    "title": "список достижений",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"last_achievement\": {\n        {\n        \"achievement\": {\n            \"achievement_type\": \"daily_active\",\n            \"image\": null,\n            \"title\": \"Охотник на простуду\",\n            \"slug\": \"oxotnik-na-prostudu\",\n            \"duration\": 1,\n            \"description\": \"\",\n            \"text\": \"Bla Bla\",\n            \"name\": \"рассказать друзьям\",\n            \"repeat\": true,\n            \"day\": 0\n        },\n        \"progress\": 1,\n        \"completed\": true,\n        \"complete_date\": \"2022-01-25T15:40:16Z\",\n        \"viewed\": false,\n        \"version\": 1\n        \"users_percent\": 60\n    }\n    },\n    \"daily_active\": [\n        {\n            \"achievement\": {\n                \"achievement_type\": \"daily_active\",\n                \"image\": null,\n                \"title\": \"Охотник на простуду\",\n                \"slug\": \"oxotnik-na-prostudu\",\n                \"duration\": 1,\n                \"description\": \"\",\n                \"text\": \"Bla Bla\",\n                \"name\": \"рассказать друзьям\",\n                \"repeat\": true,\n                \"day\": 0\n            },\n            \"progress\": 1,\n            \"completed\": true,\n            \"complete_date\": \"2022-01-25T15:40:16Z\",\n            \"viewed\": false,\n            \"version\": 1\n            \"users_percent\": 60\n        },\n        {\n            \"achievement\": {\n                \"achievement_type\": \"daily_active\",\n                \"image\": null,\n                \"title\": \"Истребитель ванных чудовищ\",\n                \"slug\": \"istrebitel-vannix-chudovish\",\n                \"duration\": 1,\n                \"description\": \"\",\n                \"text\": \"Bla Bla\",\n                \"name\": \"рассказать друзьям\",\n                \"repeat\": true,\n                \"day\": 0\n            }\n        }\n    ],\n    \"wellness_fountain\": [],\n    \"wasted_water\": [\n        {\n            \"achievement\": {\n                \"achievement_type\": \"wasted_water\",\n                \"image\": null,\n                \"title\": \"Вы встали на мокрую дорожку.\",\n                \"slug\": \"vi-vstali-na-mokri-put\",\n                \"duration\": 1,\n                \"description\": \"\",\n                \"text\": \"Bla Bla\",\n                \"name\": \"рассказать друзьям\",\n                \"repeat\": true,\n                \"day\": 0\n            },\n            \"progress\": 30,\n            \"completed\": true,\n            \"complete_date\": \"2022-01-25T15:41:23Z\",\n            \"viewed\": false,\n            \"version\": 1\n            \"users_percent\": 60\n        },\n        {\n            \"achievement\": {\n                \"achievement_type\": \"wasted_water\",\n                \"image\": null,\n                \"title\": \"Человек- Водопад\",\n                \"slug\": \"chelovek-bodapad\",\n                \"duration\": 1,\n                \"description\": \"\",\n                \"text\": \"Bla Bla\",\n                \"name\": \"рассказать друзьям\",\n                \"repeat\": true,\n                \"day\": 0\n            }\n        }\n    ]\n}",
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
          "content": "{\n    \"daily_norm\": {\n        \"notify\": true,\n        \"date\": \"2021-09-06\"\n    }\n}",
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
    "type": "post",
    "url": "history/data/",
    "title": "История принятого душа",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"count\": 1,\n    \"next\": null,\n    \"previous\": null,\n    \"results\": [\n        {\n            \"date\": 2021,\n            \"data\": {\n                \"8\": {\n                    \"days\": {\n                        \"1\": 107,\n                        \"2\": 100\n                    }\n                },\n                \"9\": {\n                    \"days\": {\n                        \"1\": 100\n                    }\n                }\n            }\n        }\n    ]\n}",
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
            "type": "Number",
            "optional": false,
            "field": "results.data.8.days.1",
            "description": "<p>День <code>&quot;1&quot;: 107</code></p>"
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
    "url": "notification/fcm_token/",
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
          "content": "{\n    \"policy\": \"Политика конфиденциальности – по сути документ, при помощи которого вы объясняете вашим\n    пользователям то, как вы обрабатываете его данные. Часто встречается и другое (официальное) название\n    данного документа - Политика обработки персональных данных.\",\n    \"terms\": \"Условия использования, условия предоставления услуг (англ. Terms of service/use) — это правила,\n    с которыми нужно согласиться перед использованием какой-либо службы, чаще всего в интернете.\"\n}",
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
            "description": "<p>Политика конфиденциальности</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "terms",
            "description": "<p>Условия использования</p>"
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
          "content": "{\n    \"check_email\": false,\n    \"check_full_info\": false,\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response": [
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
    "filename": "shower/apps/account/rest/v1/api.py",
    "groupTitle": "Статус"
  }
] });
