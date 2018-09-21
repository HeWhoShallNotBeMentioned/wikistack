const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
      
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div >
      <label for= "author_name" class="col-sm-2 control-label" >Author Name</label>
      <div class="col-sm-10">
        <input id="author_name" name = "author_name" type= "text" class="form-control">
      </div>
      <label for= "author_email" class="col-sm-2 control-label" >Author E-Mail</label>
      <div class="col-sm-10">
        <input id="author_email" name = "author_email" type= "text" class="form-control">
      </div>
      <label for= "page_content" class="col-sm-2 control-label" >Page Body</label>
      <div class="col-sm-10">
        <input id="page_content" name = "page_content" type= "text" class="form-control">
      </div>
      <label for= "page_status" class="col-sm-2 control-label" >Page Status</label>
      <div class="col-sm-10">
        <input id="page_status" name = "page_status" type= "text" class="form-control">
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);