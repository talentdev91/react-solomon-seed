var _ = require('underscore');

var users = [
  {
    id:    1,
    login: "test",
    hash:  "dkILWxksFSfTNnzyv0annfrCNd2vFQ8hUJyXpaEDO022pW+OA4Otx4/PSM8Irq5NjjUUWjT4rZa8xaWj/ZpprOVNM+NcGFQnYz3WKyfGo+h8EZWKfkw3P/J6zRNKzqHqBvx/6FCHUOIs3Ov3wBhNooE9guWYYwqzg5dyvBeoclk=",
    salt:  "dOfXeSMI69X3on2eNlolWLaWGDAf4/obx8SFnF4UBhiIZDkRPzHoDoC6Yy6xIkY7Igi+Y3hmmhB9ccEYw2BXDWhp3UZjlx4gBOvCu0KPNtigjhsK1O414qyxNHAURGyKhjNuqA6Tyfvlx7a2Fcy2RL2pjl6M1umiDR2RTfXn1OY = "
  }
];

module.exports = {
  getUserById: function(userid, cb) {
    var user = _.findWhere(users, {
      id: +userid
    });

    cb(null, user);
  },

  getUserByLogin: function(login, cb) {
    var user = _.findWhere(users, {
      login: login
    });

    cb(null, user);
  }
};