let url = {
  'topicHome': '/topics',
  'topicDetail': '/topic/',
  'userInfo': '/user/'
}

let host = 'https://cnodejs.org/api/v1'
for (let key in url) {
  if (url.hasOwnProperty(key)) {
      url[key] = host + url[key]
  }
}

export default url