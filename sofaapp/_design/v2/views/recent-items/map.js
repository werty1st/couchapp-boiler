/* http://localhost:5984/apiserver/_design/v1/_view/recent-items */
function(doc) {
  if (doc.created_at) {
      var p = doc.profile || {};
      emit(doc.created_at, {
          message:doc.message,
          gravatar_url : p.gravatar_url,
          nickname : p.nickname,
          name : doc.name
      });
  }
};