var AWS = require('aws-sdk'),
    fs = require('fs');

// For dev purposes only
AWS.config.update({ accessKeyId: '',
 secretAccessKey: '' });

// Read in the file, convert it to base64, store to S3
fs.readFile('./del.txt', function (err, data) {
  if (err) { throw err; }

  var base64data = new Buffer(data, 'binary');

  var s3 = new AWS.S3();
  s3.upload({
    Bucket: 'abbvie-darma-dev',
    Key: 'del3.txt',
    Body: base64data,
    ACL: 'public-read'
  },function () {
    console.log(arguments);
    console.log('Successfully uploaded package.');
  });

});